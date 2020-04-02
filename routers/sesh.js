const express = require('express')
const Sesh = require('../models/sesh')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/seshes', auth, async (req, res) => {
    const sesh = new Sesh({
        ...req.body,
        owner: req.user._id
    })

    try {
        await sesh.save()
        res.status(201).send(sesh)
    } catch (e) {
        res.status(400).send(e)
    }
})

// GET /tasks?completed=true
// GET /tasks?limit=10&skip=20
// GET /tasks?sortBy=createdAt:desc
router.get('/seshes', auth, async (req, res) => {
    const match = {}
    const sort = {}

    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try {
        await req.user.populate({
            path: 'seshes',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.send(req.user.seshes)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/seshes/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const sesh = await Sesh.findOne({ _id, owner: req.user._id })

        if (!sesh) {
            return res.status(404).send()
        }

        res.send(sesh)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/seshes/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['activity', 'amount']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const sesh = await Sesh.findOne({ _id: req.params.id, owner: req.user._id})

        if (!sesh) {
            return res.status(404).send()
        }

        updates.forEach((update) => sesh[update] = req.body[update])
        await sesh.save()
        res.send(sesh)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/seshes/:id', auth, async (req, res) => {
    try {
        const sesh = await Sesh.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!sesh) {
            res.status(404).send()
        }

        res.send(sesh)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router

import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import ConnectorDashboardPage from '../components/ConnectorDashboardPage'
import AddConnectorPage from '../components/AddConnectorPage'
import EditConnectorPage from '../components/EditConnectorPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ConnectorDashboardPage} exact={true} />
        <Route path='/add' component={AddConnectorPage} />
        <Route path='/edit/:id' component={EditConnectorPage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter

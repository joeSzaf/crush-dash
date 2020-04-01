// ADD_CONNECTOR
export const addConnector = (data) => ({
  type: 'ADD_CONNECTOR',
  connector: {
    id: `${data.customer}-${data.source}`,
    customer: data.customer,
    source: data.source,
    namespaceNumber: data.namespaceNumber
  }
})

// REMOVE_CONNECTOR
export const removeConnector = ({ id } = {}) => ({
  type: 'REMOVE_CONNECTOR',
  id
})

// EDIT_CONNECTOR
export const editConnector = (id, updates) => ({
  type: 'EDIT_CONNECTOR',
  id,
  newId: `${updates.customer}-${updates.source}`,
  updates
});

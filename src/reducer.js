const reducer = (state = 'HELLO!', action = {}) => {
  switch (action.type) {
  case 'GREET':
    return action.payload
  default:
    return state
  }
}

export default reducer

export const switchRoom = (roomId) => {
  return {
    type: 'SWITCH_ROOM',
    id: roomId
  }
}

export const changeUserInput = (value) => {
  return {
    type: 'CHANGE_USER_INPUT',
    value: value
  }
}

export const changeCurrentUser = (userId) => {
  return {
    type: 'CHANGE_CURRENT_USER',
    userId: userId
  }
}

export const switchRoom = (roomId, userId) => {
  return {
    type: 'SWITCH_ROOM',
    id: roomId,
    userId: userId
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

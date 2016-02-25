const rooms = (state=statingRooms, action) => {
  // action = { userId, }
  switch (action.type) {
    case 'SWITCH_ROOM':
      return [
        ...startingRooms
      ];
    default:
      return state
  }
}

const statingRooms = [
  {name: 'Pauls room', id: 1, users:[]},
  {name: 'Eduardos Room ', id: 2, users:[]},
  {name: 'Lobby', id: 0, users:[]}
]

export default rooms;

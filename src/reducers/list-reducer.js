import _ from 'lodash';

export default function(state=[],action){

   switch (action.type) {
    case 'INSERT_ELEMENT':
      return _.uniq([...state, action.payload]);


    case 'DELETE_ITEM':
      const data = action.payload;
      _.pull(state, data);
      console.log("state after deletion:",state);
      return state;

    default:
      return state;
  }
}

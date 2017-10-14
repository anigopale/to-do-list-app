import _ from 'lodash';

export default function(state=[], action){
  switch (action.type) {
    case 'CHANGE_PENDING':
      const data2 = action.payload;
      _.pull(state,data2);
      return state;

    case 'CHANGE_COMPLETED':
      const data3 = action.payload;
      return _.uniq([...state, data3]);


   case 'INSERT_ELEMENT':
     return _.uniq([...state, action.payload]);


   case 'DELETE_ITEM':
     const data = action.payload;
     _.pull(state, data);

     return state;

   default:
     return state;
   }
}

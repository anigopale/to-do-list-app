export default function(state=[], action){
  switch (action.type) {

    case 'CHANGE_COMPLETED':
      const data2 = action.payload;
      _.pull(state,data2);
      return state;

    case 'CHANGE_PENDING':
      const data3 = action.payload;
      return _.uniq([...state, data3]);



   case 'DELETE_ITEM':
     const data = action.payload;
     _.pull(state, data);

     return state;

   default:
     return state;
   }
}

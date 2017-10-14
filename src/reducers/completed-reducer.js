export default function(state=[], action){
  switch (action.type) {


   case 'DELETE_ITEM':
     const data = action.payload;
     _.pull(state, data);

     return state;

   default:
     return state;
   }
}

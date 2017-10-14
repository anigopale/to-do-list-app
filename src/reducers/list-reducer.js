import _ from 'lodash';

export default function(state=[],action){
  console.log("payload reached:",action.payload);
  const temp = _.uniq([...state, action.payload]);

  console.log(temp);
   switch (action.type) {
     case 'INSERT_ELEMENT':
     return _.uniq([...state, action.payload]);
   }
  return state;
}

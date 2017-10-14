

export function insertElement(data){

  return{
    type: 'INSERT_ELEMENT',
    payload: data
  }
}

export function deleteItem(data){

  return{
    type:'DELETE_ITEM',
    payload: data
  }
}

export function changePending(data){
  return{
    type: 'CHANGE_PENDING',
    payload: data
  }
}
export function changeCompleted(data){
  return{
    type: 'CHANGE_PENDING',
    payload: data
  }
}



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

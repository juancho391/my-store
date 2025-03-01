const findTheIndex = (id, array)=>{
  const index = array.findIndex(item => item.id === id)
  if (index === -1){
    throw "Not Found"
  }
  return index
}


module.exports = findTheIndex

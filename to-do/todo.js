

const fs = require('fs')


let listToDo = [];

const saveDB = () => {
  
  let data = JSON.stringify(listToDo);

  fs.writeFile('db/data.json', data, (err)=>{
    if (err) throw new Error('System error',err);
    console.log('The file has been saved!')
  })
}
const loadDB = () => {
  try {
    
    listToDo = require('../db/data.json');
  } catch (error) {
    listToDo = []
  }
}
const create = (description) =>{
  loadDB();
  let toDo = {
    description,
    complete: false
  };

  listToDo.push(toDo);
  saveDB()
  return toDo;
}

const getList = () => {
  loadDB();
  return listToDo

}

const refresh = (description, complete = true) =>{
  loadDB();

  let index = listToDo.findIndex(work => work.description === description);

  if (index => 0){
    listToDo[index].complete = complete;
    saveDB();
    return true
  }else{
    return false
  }
}
const deleteItem = (description) =>{
  loadDB();
  let newToDo = listToDo.filter(task => task.description != description)

  if (newToDo.length === listToDo.length){
    return false
  }else{
    listToDo = newToDo;
    saveDB();
    true
  }
}

module.exports = {
  create,
  getList,
  refresh,
  deleteItem
}
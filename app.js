
const {argv} = require('./config/yargs');
const colors = require('colors');
const toDo = require('./to-do/todo');

let command = argv._[0];

switch (command){
  case 'create':
   let work = toDo.create(argv.description);
   console.log(work);
  break;
  case 'list':
    
  let list = toDo.getList()
  for (let work of list){
    console.log('========To Do======='.green)
    console.log(work.description)
    console.log('State: ', work.complete);
    console.log('===================='.green)
  }
  break;
  case 'refresh':
    
    let refresh = toDo.refresh(argv.description, argv.complete);
    console.log(refresh);
  break;
  case 'delete':

    let deleteItem = toDo.deleteItem(argv.description);
    console.log(`The ${argv.description} was deleted`)
  break;

  default:
    console.log('Comando no es reconocido');

}
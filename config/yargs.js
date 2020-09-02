
const description =  {
  alias: 'd',
  demand: true,
  desc: 'Task to do description'
}

const complete = {
  alias:'c',
  demand: true,
  desc: 'Complete the task or pendind'
}

const argv = require('yargs')
  .command('create','Create a task to do',{
    description
  })
  .command('refresh','Refresh the state of a task',{
    description,
    complete
  })
  .command('delete', 'Delete a task',{
    description
  })
  .help()
  .argv

  module.exports = {
    argv
  }
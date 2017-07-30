// Task Model

function createTasks(){
  id = 0

  return class {
    constructor(description, list){
      this.description = description
      this.id = ++id
      this.listId = list.id
      store['tasks'].push(this)
    }

    makeLi() {
      return `<li>${this.description}</li>`
    }

  }
}

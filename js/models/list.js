// List Model

  function createLists (){
    id = 0
    return class {
      constructor(title){
        this.title = title
        this.id = ++id
        store['lists'].push(this)
      }

      makeDiv(){
        return `<div class='list-${this.id}'>
          <h2><button class='destroy-list' id="list-${this.id}" >x</button> ${this.title} </h2>
          <ul id="ul-${this.id}"></ul>
        </div>`
      }

    }
  }

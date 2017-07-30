class ListsController{

  init(){
    // Add Event Listeners Here
    let List = createLists()
    $('#add_list').on("submit", function(event) {
    	let list = new List($('#list_title').val())
      $('#lists').append(list.makeDiv())
      ListsController.populateDropdown()
      event.preventDefault();
      $('#add_task').toggle()
    })

    $('body').on('click', '.destroy-list', function(event){
        // we need to find the list in the store with a corresponding id and delete it.=
        let list = store.lists.find((list) => {
          return `${list.id}` === this.id[this.id.length - 1]
        })

        //get all tasks associated with list
        let tasks = store.tasks.filter((task) => {
        	return task.listId === list.id
        })
        //destroy them
        tasks.forEach((task) => {
          let index = store.tasks.indexOf(task)
          store.tasks.splice(index, 1);
        })

        //destroy list
        let index = store.lists.indexOf(list)
        store.lists.splice(index, 1);

		    $(`.${this.id}`).remove()
        ListsController.populateDropdown()
        event.preventDefault();

        if (store.lists.length === 0 ){
          $('#add_task').toggle()
        }
    })
  }

  static populateDropdown(){
    let select = $('#select_list')
    select.empty()
    for(var i = 0; i < store['lists'].length; i++) {
        var listTitle = store['lists'][i].title;
        var el = document.createElement("option");
        el.textContent = listTitle;
        el.value = listTitle;
        select.append(el);
    }
  }
}

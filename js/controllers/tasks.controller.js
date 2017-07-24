class TasksController {

  init(){
    let Task = createTasks()
    $('#add_task').on("submit", function(event){
      event.preventDefault();
      //higher level iterator would be nice here
      let theList = null
      let select = $('#select_list')
      for(let i = 0; i < store.lists.length; i++){
      	if (store.lists[i].title === select.val()){
      		theList = store.lists[i]
          }
      }
      let description = $('#task_description').val()
      let task = new Task(description, theList)
      $(`#ul-${task.listId}`).append(task.makeLi())
    })
  }
}

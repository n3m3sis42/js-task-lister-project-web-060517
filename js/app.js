// Initialize

$(function() { // on document ready
  $('#add_task').toggle()
  listController = new ListsController();
  listController.init();
  tasksController = new TasksController();
  tasksController.init();
});

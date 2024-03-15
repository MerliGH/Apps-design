// models/TodoModel.js

class TodoModel {
    constructor(id, title, completed = false, userId = null) {
      this.id = id;
      this.title = title;
      this.completed = completed;
      this.userId = userId;
    }
  }
  
  export default TodoModel;
  
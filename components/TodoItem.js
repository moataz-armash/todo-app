class TodoItem {
  constructor(id, text, color) {
    this.id = id;
    this.text = text;
    this.color = color || '#fff'; // Default color if not provided
  }
}

export default TodoItem;

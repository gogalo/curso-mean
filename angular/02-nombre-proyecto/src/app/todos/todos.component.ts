import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  todo: any;
  todos: any[];

  constructor() { }

  ngOnInit() {
    this.todo = {'text': ''}

    this.todos = [
      {text: "hacer la compra"},
      {text: "revisar el coche"}
    ];
  }

  addTodo() {
    let mitodo={text:this.todo.text};
    this.todos.push(mitodo);
    this.todo.text = '';
  }

  removeTodo(text) {
    for (let x = 0; x < this.todos.length; x++) {
      let obj = this.todos[x];

      if (obj.text != text) {
        continue;
      }

      this.todos.splice(x, 1);
    }
  }

}

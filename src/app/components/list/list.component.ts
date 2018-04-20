import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos:string[];
  currentTodo: string;

  constructor() { 
    // console.log('constructor ran...');
  }

  ngOnInit() {
    this.todos = ['Eat breakfast', 'Go to the gym', 'Read a book'];
  }

  onClick(){
    this.todos.push('something new');
    console.log('hello');
  }

  addToDo(todo) {
    // console.log(todo);
    this.todos.unshift(todo.value);
    todo.value = '';
    return false;
  }

  deleteToDo(todo) {
    for(let i = 0; i < this.todos.length; i++){
      if(this.todos[i] == todo){
        this.todos.splice(i, 1);
      }
    }
  }

}


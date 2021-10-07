import {Component, OnInit} from '@angular/core';
import {Todo} from '../../model/todo';
import {TodoService} from '../../service/todo.service';
import {LoadCssService} from '../../bootstrap/load-css.service (1)';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  private idDelete: any;

  constructor(private todoService: TodoService,
              private loadFile: LoadCssService,
              private router: Router) {
    loadFile.loadCss('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css');
    loadFile.loadScript('https://code.jquery.com/jquery-3.5.1.slim.min.js');
    loadFile.loadScript('https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js');
    loadFile.loadScript('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js');
  }

  ngOnInit() {
    this.getToDo();
  }

  getToDo() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }

  changeId(id: any) {
    this.idDelete = id;
    console.log(id);
  }

  deleteModal() {
    this.todoService.deleteTodo(this.idDelete).subscribe(() => {
    }, e => {
      console.log(e);
    });
  }
}

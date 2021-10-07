import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../service/todo.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  createForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  });

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const todo = this.createForm.value;
    this.todoService.saveTodo(todo).subscribe(() => {
      this.router.navigate(['/list']);
    }, e => {
      console.log(e);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  editForm: FormGroup ;
  id: number;
  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getTodo(this.id);
    });
  }

  ngOnInit(): void {
  }

  private getTodo(id: number) {
    return this.todoService.findById(id).subscribe(todo => {
      this.editForm = new FormGroup({
        name: new FormControl(todo.name)
      });
    });
  }

  updateProduct(id: number) {
    const todo = this.editForm.value;
    this.todoService.updateDodo(id, todo).subscribe(() => {
      this.router.navigate(['/']);
    }, e => {
      console.log(e);
    });
  }
}

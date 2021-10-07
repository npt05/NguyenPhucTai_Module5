import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TodoCreateComponent} from './todo/todo-create/todo-create.component';
import {TodoEditComponent} from './todo/todo-edit/todo-edit.component';
import {TodoListComponent} from './todo/todo-list/todo-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: 'create',
    component: TodoCreateComponent
  },
  {
    path: 'edit/:id',
    component: TodoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/people-list', pathMatch: 'full' },
  {
    path: 'people-list',
    component: PeopleListComponent
  },
  {
    path: 'people-add',
    component: PeopleEditComponent
  },
  {
    path: 'people-edit/:id',
    component: PeopleEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

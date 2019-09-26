import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './userlist/userlist.component';
import { UserAddComponent } from './useradd/useradd.component';
import { FrontComponent } from './front/front.component';

const routes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'list', component: UserListComponent },
  { path: 'add', component: UserAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}

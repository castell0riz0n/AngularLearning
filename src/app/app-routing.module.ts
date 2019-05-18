import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users/:id',
    component: UserComponent,
    resolve: {user: UserDetailResolver},
    data: {animation: 'FilterPage'}
  },
  {
    path: 'users',
    component: UsersComponent,
    data: {animation: 'AboutPage'}
  },
  {path: 'home', component: HomeComponent, data: {animation: 'HomePage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

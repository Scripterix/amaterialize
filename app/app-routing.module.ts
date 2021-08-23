import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { NavComponent } from './components/nav/nav.component';
import { SecuredComponent } from './components/secured/secured.component';
import { StyleComponent } from './components/style/style.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'style', component: StyleComponent },
  { path: 'user', component: UserComponent },
  { path: 'nav', component: NavComponent },
  { path: 'secured', component: SecuredComponent },
  { path: 'jokes', component: JokesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

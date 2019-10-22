import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateprojectComponent } from './components/createproject/createproject.component';
import { AppComponent } from './app.component';
import { AddprojectComponent } from './components/addproject/addproject.component';
import { AddemployeComponent } from './addemploye/addemploye.component';


const routes: Routes = [

  { path: 'my-projects', component: AppComponent },
  { path: 'create-project', component: CreateprojectComponent },
  { path: 'add-project', component: AddprojectComponent },
  { path: 'add-employe', component: AddemployeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

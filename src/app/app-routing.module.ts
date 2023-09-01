import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
{
  path:"" , redirectTo:"home",pathMatch:"full"
},
{
  path:"home" , component:HomeComponent
},
// {
//   path:"toddolist" , component:TodoComponent
// },
{
  path:"toddolist" , component:TodoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

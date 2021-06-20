import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./components/posts/create/create.component";
import {PostsComponent} from "./components/posts/posts.component";

const routes: Routes = [
  {path: 'posts/create', component: CreateComponent},
  {path: '', component: PostsComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

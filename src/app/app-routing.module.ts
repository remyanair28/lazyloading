import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users",
    //loadChildren: "../app/users/users.module#UsersModule"
    //the dynamic import syntax helps to import lazy-loaded module and gives you access to the module,
    loadChildren: () => import(`../app/users/users.module`).then(mod => mod.UsersModule)
  },
  {
    path: "contact",
    //loadChildren: "../app/contact/contact.module#ContactModule"
    loadChildren: () => import(`../app/contact/contact.module`).then(mod => mod.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

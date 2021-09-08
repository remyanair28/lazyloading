import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UsersComponent } from './users.component'


const routes: Routes = [
    { path: "", component: UsersComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class UsersRoutingModule { }
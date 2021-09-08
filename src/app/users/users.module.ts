import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {UsersRoutingModule  } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { NameCapPipe } from './name-cap.pipe';

@NgModule({
  imports: [CommonModule, UsersRoutingModule],
  declarations: [UsersComponent, NameCapPipe]
})
export class UsersModule {}
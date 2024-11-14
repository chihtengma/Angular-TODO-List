import {NgModule} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { SharedModule } from "../shared/shared.module";
import { NewTaskComponent } from "./new-task/new-task.component";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [SharedModule, CommonModule, FormsModule]
})

export class TasksModule {}

import { Component, EventEmitter, inject, Input, Output } from "@angular/core";

import { TaskForm } from "./new-task.model";
import { TasksService } from "../tasks.service";

@Component ({
  selector   : "app-new-task",
  styleUrl   : "./new-task.component.css",
  templateUrl: "./new-task.component.html"
})
export class NewTaskComponent {
  @Input () userId?: string;
  @Output () close = new EventEmitter<void> ();

  private taskService = inject (TasksService);

  enteredForm: TaskForm = {
    title  : "",
    summary: "",
    dueDate: ""
  };

  onClose() {
    this.close.emit ();
  }

  onSubmit() {
    this.taskService.addTask (this.enteredForm, this.userId!);
    this.close.emit ();
  }
}

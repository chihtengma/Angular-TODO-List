import { Component, Input } from "@angular/core";

import { Task } from "./task/task.model";
import { DUMMY_TASKS } from "./dummy-tasks";
import { TaskForm } from "./new-task/new-task.model";
import { TasksService } from "./tasks.service";

@Component({
   selector: "app-tasks",
   templateUrl: "./tasks.component.html",
   styleUrl: "./tasks.component.css"
})
export class TasksComponent {
   @Input() userId?: string;
   @Input() name?: string;
   @Input() isAddingTask = false;
   @Input() tasks = DUMMY_TASKS;

   private taskService: TasksService;

   // Angular's dependency injection
   constructor(taskService: TasksService) {
      this.taskService = taskService;
   }

   trackById(index: number, task: Task) {
      return task.id;
   }

   get selectedUserTasks() {
      return this.taskService.getUserTasks(this.userId!);
   }

   handleStartAddTask() {
      this.isAddingTask = true;
   }

   handleCloseAddTask() {
      this.isAddingTask = false;
   }

   handleNewTask(taskData: TaskForm) {
      this.taskService.addTask(taskData, this.userId!);
      this.isAddingTask = false;
   }
}

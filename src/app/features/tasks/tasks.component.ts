import { Component, computed, input, Signal, signal } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Task } from './task/task.model';
import { User } from '../user-list/user/user.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: "tasks.component.html",
  styleUrl: "tasks.component.css"
})
export class TasksComponent {

  userTasks: Signal<Array<Task>> = computed(() => []);
  selectedUser = input.required<User>();

  // Dependency injection
  constructor(private tasksService: TaskService) {
    this.loadUserTasks();
  }
  //private tasksService = inject(TasksService);

  // Load user from parent component
  // private tasks = computed(() => this.tasksService.getTasks());

  //id = signal<string | null>(null);
  //name = input<string>();

  isAddingTask = signal(false);

  loadUserTasks() {
    this.userTasks = computed(() => {
      // Load tasks from service
      // this.tasksService.getTasks().subscribe(tasks => {
      //   this.tasks.set(tasks);
      // });
      const userTasks = this.tasksService.getByUserId(this.selectedUser()?.id as string);
      return userTasks.sort((a, b) => Number(a.completed) - Number(b.completed));
    });
  }

  onAddTask() {
    this.isAddingTask.set(true);
  }

  closeAddTaskDialog() {
    this.isAddingTask.set(false);
    this.loadUserTasks();
  }

}

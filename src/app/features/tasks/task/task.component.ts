import { Component, computed, inject, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { CardComponent } from "../../../shared/components/card/card.component";
import { TaskService } from '../../../core/services/task.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: "task.component.html",
  styleUrl: "task.component.css",
})
export class TaskComponent {
  task = input.required<Task>();
  changeEvent = output<string>();
  isCompleted = computed(() => this.task().completed);

  private tasksService = inject(TaskService);

  ngOnInit() {
    this.isCompleted.apply(this.task().completed ? true : false)
  }

  propagateTaskId() {
    this.changeEvent.emit(this.task().id);
  }

  onComplete() {
    const task = this.tasksService.getById(this.task().id);
    if (task) {
      task.completed = !task.completed;
      this.tasksService.update(task.id, task);
    }
    this.propagateTaskId();
  }

  onDelete() {
    this.tasksService.delete(this.task().id);
    this.propagateTaskId();
  }
}

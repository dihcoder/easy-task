import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';
import { TaskService } from '../../../core/services/task.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: "add-task.component.html",
  styleUrl: "add-task.component.css",
})
export class AddTaskComponent {
  title = signal<string>("");
  summary = signal<string>("");
  userId = input.required<string | undefined>();
  dueDate = signal<string>("");

  // inject function
  private tasksService = inject(TaskService);

  closeDialogEvent = output<void>();

  onSubmit() {
    const allfieldsFilled = this.title().length && this.summary().length && this.userId()?.length && this.dueDate().length;

    if (allfieldsFilled) {
      const newTask: Task = {
        id: Math.random().toString(36).substring(2, 9),
        title: this.title(),
        summary: this.summary(),
        userId: this.userId() as string,
        dueDate: this.dueDate(),
      };

      this.tasksService.create(newTask);

      this.onCloseDialog();
    }
  }

  onCloseDialog() {
    this.title.set("");
    this.summary.set("");
    this.dueDate.set("");
    this.closeDialogEvent.emit();
  }
}

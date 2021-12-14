import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ArchiveTask, PinTask, TasksState } from '../state/task.state';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  @Select(TasksState.getAllTasks) tasks$: Observable<Task[]>;

  constructor(private store: Store) {}

  archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }
}

import { render } from '@testing-library/angular';

import { PureTaskListComponent } from './pure-task-list.component';
import { TaskComponent } from './task.component';

import { WithPinnedTasks } from './pure-task-list.stories';

describe('TaskList Component', () => {
  it('renders pinned tasks at the start of the list', async () => {
    const mockedActions = jest.fn();
    const tree = await render(PureTaskListComponent, {
      declarations: [TaskComponent],
      componentProperties: {
        ...WithPinnedTasks.args,
        onPinTask: {
          emit: mockedActions
        },
        onArchiveTask: {
          emit: mockedActions
        }
      }
    });
    const component = tree.fixture.componentInstance;
    expect(component.tasksInOrder[0].id).toBe('6');
  });
});

import { TasksAppPage } from './app.po';

describe('tasks-app App', () => {
  let page: TasksAppPage;

  beforeEach(() => {
    page = new TasksAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

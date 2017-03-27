import { TeamAdminNg4Page } from './app.po';

describe('team-admin-ng4 App', () => {
  let page: TeamAdminNg4Page;

  beforeEach(() => {
    page = new TeamAdminNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

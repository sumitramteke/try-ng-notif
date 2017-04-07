import { TryNgNotifPage } from './app.po';

describe('try-ng-notif App', () => {
  let page: TryNgNotifPage;

  beforeEach(() => {
    page = new TryNgNotifPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

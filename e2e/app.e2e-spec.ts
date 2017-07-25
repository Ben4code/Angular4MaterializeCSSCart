import { CollectionAppPage } from './app.po';

describe('collection-app App', () => {
  let page: CollectionAppPage;

  beforeEach(() => {
    page = new CollectionAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

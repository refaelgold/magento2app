import { Magento2appPage } from './app.po';

describe('magento2app App', function() {
  let page: Magento2appPage;

  beforeEach(() => {
    page = new Magento2appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

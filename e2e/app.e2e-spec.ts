import { FullstacktestingFrontendPage } from './app.po';

describe('fullstacktesting-frontend App', function() {
  let page: FullstacktestingFrontendPage;

  beforeEach(() => {
    page = new FullstacktestingFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

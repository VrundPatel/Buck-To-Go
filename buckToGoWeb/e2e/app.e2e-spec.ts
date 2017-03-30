import { BuckToGoWebPage } from './app.po';

describe('buck-to-go-web App', function() {
  let page: BuckToGoWebPage;

  beforeEach(() => {
    page = new BuckToGoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

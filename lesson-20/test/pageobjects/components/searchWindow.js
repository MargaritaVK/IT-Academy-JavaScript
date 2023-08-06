class SearchWindow {
    
    get searchInput() {
      return $('form.DocSearch-Form input');
    }
    get firstSearchOutput() {
      return $('#docsearch-item-0 span.DocSearch-Hit-title');
    }
    get firstAnswer() {
      return $('#docsearch-item-0 span.DocSearch-Hit-title');
  }
    async enterSearchInput(input) {
      await this.searchInput.waitForEnabled();
      await this.searchInput.setValue(input);
    }
    async getfirstSearchOutput() {
      await this.firstSearchOutput.waitForEnabled();
    }
  }
  
  module.exports = new SearchWindow();
class SearchWindow {
    
    get searchInput() {
      return $('form.DocSearch-Form input');
    }
    get firstSearchOutput() {
      return $('#docsearch-item-0 span.DocSearch-Hit-title');
    }
    
    async enterSearchInput(input) {
      await this.searchInput.waitForEnabled();
      await this.searchInput.setValue(input);
    }
     async getFirstSearchOutput() {
       await this.firstSearchOutput.waitForDisplayed();
     }
  }
  
  module.exports = new SearchWindow();
class SearchPage {

    get searchInput() {
      return '#docsearch-input';
    }
    get firstSearchOutput() {
      return '#docsearch-item-0 span.DocSearch-Hit-title';
    }
  }

  module.exports = SearchPage;
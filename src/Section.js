class Section {
  constructor({ items, renderer }, addCardSelector) {
    this._renderedItems = items;
    this._renderer = renderer;

    this._addCardSelector = addCardSelector;
  }
  renderer() {
    this._renderedItems.forEach((item) => this._renderer(item));
  }
  addItem(element) {
    this._addCardSelector.append(element);
  }
}

export default Section;

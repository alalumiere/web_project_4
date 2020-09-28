class Section {
  constructor({ items, renderer }, addCardSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    console.log(addCardSelector);
    this._container = document.querySelector(addCardSelector);
  }
  renderer() {
    this._renderedItems.forEach((item) => this._renderer(item));
  }
  addItem(element) {
    this._container.append(element);
  }
}

export default Section;

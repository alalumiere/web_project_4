class Section {
  constructor({items, renderer}, addCardSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.quareySelector(addCardSelector);
  }
  renderer() {
    this._renderer.forEach(item => this._renderer(item));
  }
  addItem(element) {
    this._container.append(element);
  }
}

export default Section;
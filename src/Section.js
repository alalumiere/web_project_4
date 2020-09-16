class Section {
    constructor({
        items,
        renderer
    }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);

    }
    addItem(item) {
        this._container.prepend(item);
    }
    clear() {
      this._container.innerHTML = ""; 
    } 
    renderedItems() {
        this._items.array.forEach((item) => {
            this._renderer(item);
        });
    }

}

export default Section;
import store from "../store";

export class BaseComponent extends HTMLElement {
	shadowDOM = true;
	subscribeUpdates = false;

	connectedCallback() {
		if (this.shadowDOM) {
			this.attachShadow({ mode: "open" });
		}
		this.render();
		if (this.subscribeUpdates) {
			store.subscribe(() => {
				this.update();
			});
		}
	}

	get state() {
		return store.getState();
	}

	dispatch(action) {
		store.dispatch(action);
	}

	update() {
		this.render();
	}

	render() {}
}

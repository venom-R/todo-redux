import { BaseComponent } from "../../core/BaseComponent";
import { inputSearchValue } from "../todoSlice";

export class TodoSearch extends BaseComponent {
	constructor() {
		super();
		this.onInputSearchValue = this.onInputSearchValue.bind(this);
	}

	get searchElement() {
		return this.querySelector("input[type=search]");
	}

	onInputSearchValue(event) {
		const { value } = event.target;
		this.dispatch(inputSearchValue({ value }));
	}

	disconnectedCallback() {
		this.searchElement.removeEventListener("input", this.onInputSearchValue);
	}

	render() {
		this.innerHTML = `
            <form>
                  <label>
                        <span>Search task</span>
                        <input type="search">
                  </label>
            </form>
		`;
		this.searchElement.addEventListener("input", this.onInputSearchValue);
	}
}

import { BaseComponent } from "../../core/BaseComponent";
import { TODO_FILTER } from "../todo-constants";
import { applyFilterByStatus } from "../todoSlice";

export class TodoFilter extends BaseComponent {
	constructor() {
		super();
		this.onFilterChange = this.onFilterChange.bind(this);
	}

	get radioElements() {
		return this.shadowRoot.querySelectorAll("input[type=radio]");
	}

	disconnectedCallback() {
		this.detachEventListeners();
	}

	attachEventListeners() {
		this.radioElements.forEach((radioElement) => {
			radioElement.addEventListener("change", this.onFilterChange);
		});
	}

	detachEventListeners() {
		this.radioElements.forEach((radioElement) => {
			radioElement.removeEventListener("change", this.onFilterChange);
		});
	}

	renderFilterItem(caption, value, isChecked) {
		return `
	        <label>
              <span>${caption}</span>
              <input type="radio" name="todo_filter" value="${value}" ${isChecked ? "checked" : ""}>
            </label>
	    `;
	}

	onFilterChange(event) {
		const element = event.target;
		if (element.checked) {
			this.dispatch(applyFilterByStatus({ filter: element.value }));
		}
	}

	render() {
		this.shadowRoot.innerHTML = `
            <ul>
              <li>
                ${this.renderFilterItem("All", TODO_FILTER.ALL, true)}
              </li>
              <li>
                ${this.renderFilterItem("Completed", TODO_FILTER.COMPLETED, false)}
              </li>
              <li>
                ${this.renderFilterItem("Undone", TODO_FILTER.UNDONE, false)}
              </li>
            </ul>
	    `;
		this.attachEventListeners();
	}
}

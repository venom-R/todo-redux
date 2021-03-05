import { BaseComponent } from "../../core/BaseComponent";
import { addTodoItem } from "../todoSlice";

export class TodoAddForm extends BaseComponent {
	constructor() {
		super();
		this.onCreateTask = this.onCreateTask.bind(this);
	}

	get form() {
		return this.firstElementChild;
	}

	onCreateTask(event) {
		event.preventDefault();
		const [inputElement] = this.form.elements;
		const text = inputElement.value.trim();
		if (text !== "") {
			this.dispatch(addTodoItem({ text }));
			inputElement.value = "";
		}
	}

	disconnectedCallback() {
		this.form.removeEventListener("submit", this.onCreateTask);
	}

	render() {
		this.innerHTML = `
            <form>
                  <label>
                        <span>Enter new task</span>
                        <input type="text">
                  </label>
                  <button>Create</button>
            </form>
		`;
		this.form.addEventListener("submit", this.onCreateTask);
	}
}

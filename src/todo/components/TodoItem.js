import { BaseComponent } from "../../core/BaseComponent";
import { removeTodoItem, toggleTodoItemStatus } from "../todoSlice";

export class TodoItem extends BaseComponent {
	constructor() {
		super();
		this.onToggleComplete = this.onToggleComplete.bind(this);
		this.onRemove = this.onRemove.bind(this);
	}

	get key() {
		return Number(this.getAttribute("key"));
	}

	get isCompeted() {
		return this.getAttribute("is-completed") === "true";
	}

	get text() {
		return this.getAttribute("text");
	}

	get itemStyle() {
		return this.isCompeted ? "text-decoration: line-through" : "";
	}

	get toggleElement() {
		return this.querySelector("[name=isCompleted]");
	}

	get removeButton() {
		return this.querySelector("[name=remove]");
	}

	onToggleComplete() {
		this.dispatch(toggleTodoItemStatus({ id: this.key }));
	}

	onRemove() {
		const isConfirmed = confirm("Are you sure?");
		if (isConfirmed) {
			this.dispatch(removeTodoItem({ id: this.key }));
		}
	}

	disconnectedCallback() {
		this.toggleElement.removeEventListener("change", this.onToggleComplete);
		this.removeButton.removeEventListener("click", this.onRemove);
	}

	render() {
		this.innerHTML = `
			<li style="${this.itemStyle}">
				<label>
					<input type="checkbox" name="isCompleted" ${this.isCompeted ? "checked" : ""}>
					${this.text}
				</label>
				<button name="remove">&#10005;</button>
			</li>
		`;
		this.toggleElement.addEventListener("change", this.onToggleComplete);
		this.removeButton.addEventListener("click", this.onRemove);
	}
}

import { BaseComponent } from "../../core/BaseComponent";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoAddForm } from "./TodoAddForm";
import { TodoFilter } from "./TodoFilter";
import "../todo.css";

export class TodoApp extends BaseComponent {
	render() {
		this.innerHTML = `
			<div class="todo-app">
				<todo-add-form></todo-add-form>
				<hr>
				<todo-search></todo-search>
				<hr>
				<todo-list></todo-list>
				<hr>
				<todo-filter></todo-filter>
			</div>
		`;
	}
}
customElements.define("todo-app", TodoApp);
customElements.define("todo-item", TodoItem);
customElements.define("todo-list", TodoList);
customElements.define("todo-search", TodoSearch);
customElements.define("todo-add-form", TodoAddForm);
customElements.define("todo-filter", TodoFilter);

import { BaseComponent } from "../../core/BaseComponent";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoAddForm } from "./TodoAddForm";
import { TodoFilter } from "./TodoFilter";

export class TodoApp extends BaseComponent {
	shadowDOM = false;

	render() {
		this.innerHTML = `
			<div>
				<todo-add-form></todo-add-form>
				<todo-search></todo-search>
				<todo-list></todo-list>
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

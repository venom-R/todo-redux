import { BaseComponent } from "../../core/BaseComponent";
import { TODO_FILTER } from "../todo-constants";

export class TodoList extends BaseComponent {
	subscribeUpdates = true;
	emptyText = "No tasks have been added yet 😒";

	get filteredList() {
		const { list } = this.state.todo;
		return this.applySearchValue(this.applyFilter(list));
	}

	applyFilter(list) {
		return list.filter((item) => {
			switch (this.state.todo.filter) {
				case TODO_FILTER.COMPLETED:
					return item.isCompleted;
				case TODO_FILTER.UNDONE:
					return !item.isCompleted;
			}
			return true;
		});
	}

	applySearchValue(list) {
		const searchValue = this.state.todo.searchValue.trim();
		if (searchValue !== "") {
			return list.filter((item) => {
				const itemText = item.text.toUpperCase();
				return itemText.includes(searchValue.toUpperCase());
			});
		}
		return list;
	}

	render() {
		if (this.filteredList.length === 0) {
			this.innerHTML = `<span>${this.emptyText}</span>`;
		} else {
			this.innerHTML = `
				<ul class="todo-list">
					${this.filteredList
						.map(
							(item) =>
								`<todo-item text="${item.text}"
										is-completed="${item.isCompleted}"
										key="${item.id}">
								</todo-item>`,
						)
						.join("")}
				</ul>
			`;
		}
	}
}

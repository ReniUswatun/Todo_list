import { LitElement, html, css } from "lit";
import { v4 as uuidV4 } from "uuid";

class TodoList extends LitElement {
  static properties = {
    todos: { type: Object },
  };

  static styles = css`
    .completed {
      background-color: green;
      color: white;
    }
    .noCompleted {
      background-color: white;
      color: black;
    }
  `;
  constructor() {
    super();
    this.todos = [
      {
        id: uuidV4(),
        title: "Praktikum PAB Week 5",
        isCompleted: false,
      },
      {
        id: uuidV4(),
        title: "Praktikum RPL Diagram",
        isCompleted: false,
      },
      {
        id: uuidV4(),
        title: "Praktikum Jarkom Cisco",
        isCompleted: false,
      },
      {
        id: uuidV4(),
        title: "TBA Kelompok",
        isCompleted: false,
      },
      {
        id: uuidV4(),
        title: "TBA Ulangan",
        isCompleted: false,
      },
      {
        id: uuidV4(),
        title: "Jarkom Ulangan Netacad",
        isCompleted: false,
      },
      {
        id: uuidV4(),
        title: "Jarkom Ulangan Netacad",
        isCompleted: false,
      },
      {
        id: uuidV4(),
        title: "Praktikum RPL bukan diagram",
        isCompleted: false,
      },
      {
        id: uuidV4(),
        title: "Jarkom Ulangan UTS",
        isCompleted: false,
      },
      {
        id: uuidV4(),
        title: "Pemweb Praktikum",
        isCompleted: false,
      },
      {
        id: uuidV4(),
        title: "Pemweb PHP",
        isCompleted: false,
      },
    ];
  }
  render() {
    return html`
      <ol>
        ${this.todos.map((todo, index) => {
          return html`
            <li>
              ${todo.title}
              <button @click="${() => this._deleteTodo(todo.id)}">
                Delete
              </button>
              <button
                @click="${() => this._markAsCompleted(todo.id)}"
                class=${todo.isCompleted ? "completed" : "noCompleted"}
              >
                ${todo.isCompleted ? "Mark As Done" : "Done"}
              </button>
            </li>
          `;
        })}
      </ol>
    `;
  }

  _markAsCompleted(id) {
    console.log(id);
    this.todos.map((todo, index) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        this.todos = this.todos;
        console.log(todo.isCompleted);
      }
      return todo;
    });
    this.requestUpdate();
  }

  _deleteTodo(id) {
    this.todos = this.todos.filter((todo, index) => id !== todo.id);
    this.requestUpdate();
  }
}

customElements.define("todo-list", TodoList);

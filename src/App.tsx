import { Button } from "./components/ui/button"

function App() {
  return (
    <main>
      <section>
        <div>
          <h1>Todo App</h1>
          <button>☀️</button>
        </div>
        <div>
          <input type="text" placeholder="Add a new todo..." />
          <select name="" id="">
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
          </select>
          <Button>Add</Button>
        </div>
      </section>
      <section>
        <div>
          <select name="" id="">
            <option value="all">All Categories</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
          </select>
          <select name="" id="">
            <option value="all">All Statuses</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
        <div>
          <ul>
            <li>
              <input type="checkbox" />
              <span>Todo 1</span>
              <span>Category</span>
              <button>✏️</button>
              <button>🗑️</button>
            </li>
            <li>
              <input type="checkbox" />
              <span>Todo 2</span>
              <span>Category</span>
              <button>✏️</button>
              <button>🗑️</button>
            </li>
            <li>
              <input type="checkbox" />
              <span>Todo 3</span>
              <span>Category</span>
              <button>✏️</button>
              <button>🗑️</button>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <label htmlFor="todosPerPage">Show:</label>
            <select name="todosPerPage" id="todosPerPage  ">
              <option value="5">5 per page</option>
              <option value="10">10 per page</option>
              <option value="20">20 per page</option>
            </select>
          </div>
          <div>
            <button>First</button>
            <button>Previous</button>
            <span>Page 1 of 10</span>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div>
        <div>
          <span>Todos: 15 todos</span>
          <span>Active: 10 todos</span>
          <span>Completed: 5 todos</span>
          <span>40% completed</span>
        </div>
      </section>
    </main>
  )
}

export default App

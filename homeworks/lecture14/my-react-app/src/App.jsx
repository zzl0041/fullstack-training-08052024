import GitHubList from "./components/hw1"
import ColorComponents from './components/hw2';
import TodoList from "./components/hw3";

function App() {

  return (
    <>
    <div className="App">
      <h1>GitHub User Explorer</h1>
      <GitHubList />
    </div>

    <div className="App">
      <h1>Color Components</h1>
      <ColorComponents />
    </div>

    <div className="App">
      <h1>todo Components</h1>
      <TodoList />
    </div>
    </>
  )
}

export default App

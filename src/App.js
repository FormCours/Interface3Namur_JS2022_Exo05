import './App.css';
import Header from './containers/header/header';
import TodoApp from './containers/todo-app/todo-app';

function App() {
  return (
    <>
      <Header />
      <main className="App">
        <TodoApp />
      </main>
    </>
  );
}

export default App;

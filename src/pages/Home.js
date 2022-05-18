import TodoInput from '../components/todo-list/TodoInput';
import TodoList from '../components/todo-list/TodoList';
import { TodoContextProvider } from '../contexts/TodoContext';

function Home() {
  return (
    <TodoContextProvider>
      <TodoInput />
      <TodoList />
    </TodoContextProvider>
  );
}

export default Home;

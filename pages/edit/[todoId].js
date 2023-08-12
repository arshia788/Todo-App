import TodoEditPage from 'components/templates/TodoEditPage';
import { useRouter } from 'next/dist/client/router';

function TodoEdit() {

  const router = useRouter().query || '';
  const {todoId} = router
  
  if (todoId) return <TodoEditPage id={todoId}/>
}

export default TodoEdit
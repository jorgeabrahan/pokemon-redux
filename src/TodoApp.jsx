import { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis'

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1)
  const { data: todos = [], isLoading: areTodosLoading } = useGetTodosQuery()
  const { data: todo = {}, isLoading: isTodoLoading } = useGetTodoQuery(todoId)
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      {areTodosLoading && <h4>Loading multiple todos...</h4>}
      <ul>
        {todos.slice(0, 20).map((t) => (
          <li key={t.id}>
            <strong>{t.completed ? 'DONE' : 'PENDING'}: </strong>
            {t.title}
          </li>
        ))}
      </ul>
      <hr />
      <h1>Single Todo - RTK Query</h1>
      {isTodoLoading && <h4>Loading single todo...</h4>}
      <pre>{JSON.stringify(todo)}</pre>
      <button
        disabled={isTodoLoading || todo.id === 1}
        onClick={() => setTodoId((prev) => prev - 1)}
      >
        Previous todo
      </button>
      <button disabled={isTodoLoading} onClick={() => setTodoId((prev) => prev + 1)}>
        Next todo
      </button>
    </>
  )
}

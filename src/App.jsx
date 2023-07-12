import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './store/slices/counter/'

function App() {
  const { count } = useSelector((store) => store.counter)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
        <p>count is {count}</p>
      </div>
    </>
  )
}

export default App

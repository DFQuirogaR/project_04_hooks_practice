import { useEffect, useState } from 'react'
import './App.css'
import { UseReducer } from './components/UseReducer';
import { UseRef } from './components/UseRef';
import { UseMemo } from './components/UseMemo';

function App() {
  const [count, setCount] = useState(0)

  //useEffect se ejecuta después de cada renderizado
  useEffect(()=>{
    //Actualiza el titulo del documento con el count (pestaña de la página)
    document.title = `Count is ${count}`;
  }, [count]);
  

  return (
    <>
      <h1>React Hooks Practice</h1>
      <div className="card">
        <hr />
        <h2>Exercise Hook useState</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <hr />
      </div>
      <UseReducer/>
      <UseRef count={count} setCount={setCount}/>
      <UseMemo count={count} setCount={setCount}/>
    </>
  )
}

export default App

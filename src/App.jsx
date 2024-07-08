import { useEffect, useState } from 'react'
import './App.css'

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
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
        <hr />
      </div>
    </>
  )
}

export default App

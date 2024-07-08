import PropTypes from 'prop-types'
import { useRef } from 'react';

export const UseRef = ({ count, setCount }) => {
    
    //Crear una referencia con useRef para almacenar el elemento del DOM
    const countRef = useRef();

    const handleClick =()=> {
        setCount(count + 1);
        countRef.current.textContent = `Count ins now ${count + 1}`;
    }

    const handleDoubleClick = () =>{
        setCount(0);
        countRef.current.textContent = `Count ins now 0`;
    }

  return (
    <div>
        <h2>Exercise Hook useRef</h2>
        <button className='increment-button' onClick={handleClick} onDoubleClick={handleDoubleClick}>
            Increment
        </button>
        <p ref={countRef} className='count-text'>
            Count is {count}
        </p>
        <hr />
    </div>
  )
};

UseRef.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired
}

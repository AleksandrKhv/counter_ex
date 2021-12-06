import React, {useState} from 'react';
import './App.css';
import Counter from './Counter';

function App() {

    const [counter, setCounter] = useState(0)
    const onIncHandler = () => {
        setCounter(counter + 1)
    }

    const onResetHandler = () => {
        const reset = 0
        setCounter(reset)
    }

    return (
        <div>
            <Counter counter={counter}
                     onIncHandler={onIncHandler}
                     onResetHandler={onResetHandler}/>
        </div>
    );
}

export default App;

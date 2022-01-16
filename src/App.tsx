import React, {useState} from 'react';
import './App.css';
import Counter from './Counter';
import {NavLink, Route, Routes} from 'react-router-dom';
import SetCounter from './SetCounter';

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
            <Routes>
                <Route path={'/'} element={<Counter counter={counter}
                                                    onIncHandler={onIncHandler}
                                                    onResetHandler={onResetHandler}/>}/>
                <Route path={'/setCounter'} element={<SetCounter counter={counter}
                                                                 setCounter={counter}
                                                                 setHandler={onIncHandler}/>}/>
            </Routes>
        </div>
    );
}

export default App;

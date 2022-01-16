import React, {ChangeEvent, useEffect, useState} from 'react';
import st from './SetCounter.module.css';
import Button from './components/Button';
import {NavLink} from 'react-router-dom';

export type propsType = {
    counter: number
    setCounter: number
    setHandler: () => void
}

const SetCounter = (props: propsType) => {

    const [maxValue, setMaxValue] = useState(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterMaxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    }, [maxValue])

    const onMaxHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        setMaxValue(e.currentTarget.value)
    }

    const [startValue, setStartValue] = useState(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterStartValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
    }, [startValue])

    const onStartHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        setStartValue(e.currentTarget.value)
    }

    const loadSetHandler=()=>{

    }

    return (
        <div className={st.setWrapper_all}>
            <div className={st.setWrapper}>
                <div className={st.setWrapper_count}>
                    <h4 className={st.h4}>Max Value:</h4>
                    <input type={'number'} className={st.input1} onChange={onMaxHandler} value={maxValue}/>
                    <h4 className={st.h4}>Start Value:</h4>
                    <input type={'number'} className={st.input2} onChange={onStartHandler} value={startValue}/>
                </div>
                <div className={st.setWrapper_button}>
                    <NavLink to={'/'}><Button name={'set'}
                                              callBack={loadSetHandler}
                                              className={st.but3}/></NavLink>
                </div>
            </div>
        </div>
    );
};

export default SetCounter;
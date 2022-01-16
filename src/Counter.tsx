import React from 'react';
import st from './Counter.module.css'
import Button from './components/Button';
import {NavLink} from 'react-router-dom';

export type propsType = {
    counter: number
    onIncHandler: () => void
    onResetHandler: () => void
}

const Counter = (props: propsType) => {

    return (
        <div className={st.wrapper_all}>
            <div className={st.wrapper}>
                <div className={`${st.wrapper_count} + ${props.counter === 5 ? st.counter_full : st.counter_null}`}>
                    <div className={st.counter}>{props.counter}</div>
                </div>
                <div className={st.wrapper_button}>
                    <Button name={'inc'} callBack={props.onIncHandler} className={st.but1} disabled={props.counter === 5}/>
                    <Button name={'reset'} callBack={props.onResetHandler} className={st.but2} disabled={props.counter === 0}/>
                    <NavLink to={'/setCounter'}><Button name={'set'} className={st.but2}/></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Counter;
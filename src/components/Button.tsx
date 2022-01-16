import React from 'react';


export type propsType = {
    name: string
    callBack?:()=>void
    className?:string
    disabled?:boolean
}

const Button = (props:propsType) => {

    return (
        <button className={props.className} onClick={props.callBack} disabled={props.disabled}>{props.name}</button>
    );
};

export default Button;
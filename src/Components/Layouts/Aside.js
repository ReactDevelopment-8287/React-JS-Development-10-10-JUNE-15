import React from 'react'

export default function Aside(props) {
    console.log('Aside : ', props.children);
    return (
        <aside className={`col-2 ${props.cls} h-100`}>{props.children}</aside>
    )
}

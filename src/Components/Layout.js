import React from 'react'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import Aside from './Layouts/Aside'

export default function Layout(props) {
    console.log('Layout : ', props.children);
    return (
        <>
            <Header />
            <main>
                <div className="container h-100 a_cont">
                    <div className='row h-100'>
                        <Aside cls='a_leftaside'>Left Aside</Aside>
                        {props.children}
                        <Aside cls='a_rightaside'>Right Aside</Aside>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

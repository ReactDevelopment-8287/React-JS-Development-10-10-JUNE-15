import React, { Component } from 'react'
import Layout from './Components/Layout'
import Sec from './Components/Layouts/Sec'
import PageOne from './Pages/PageOne'
import Page2 from './Pages/Page2'



export default class App extends Component {
    render() {
        return (
            <Layout>
                <Sec>
                    <PageOne></PageOne>
                    <Page2></Page2>
                </Sec>
            </Layout>
        )
    }
}

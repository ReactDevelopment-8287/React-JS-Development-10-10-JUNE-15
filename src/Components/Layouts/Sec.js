import React, { Component } from 'react'

export default class Sec extends Component {
    render() {
        console.log('Sec : ', this.props.children);
        return (
            <section className='col-8 a_row h-100'>{this.props.children}</section>
        )
    }
}

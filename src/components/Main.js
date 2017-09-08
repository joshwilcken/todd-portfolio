import React, { Component } from 'react'
import './componentCSS.css'

export default class Main extends Component {
    render() {
        return (
            <div className='main'>
                <div className='topColor'></div>
                <div className='jumbotron'>
                    <div className='links'>
                        <div>PORTFOLIO</div>
                        <div>ABOUT ME</div>
                        <div>RESUME</div>
                        <div>CONTACT</div>
                    </div>
                    <div className='about'>
                        <h1>TODD WILSON</h1>
                        <h5>Designer / Illustrator</h5>
                    </div>
                    <img src={require('../images/1496208960347.jpeg')} alt='Todd'/>
                </div>
            </div>
        )
    }
}


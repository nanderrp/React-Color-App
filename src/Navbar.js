import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';

export default class Navbar extends Component {
    render() {
        const { level, changeLevel } = this.props;
        return (
            <nav className="Navbar">
                <div className="logo">
                    <a href="/">Palette Master</a>
                </div>
                <div className="Slider-container">
                    <span>Level: {level}</span>
                <div className="Slider">
                <Slider 
                    defaultValue={level} 
                    min={100} 
                    max={900} 
                    step={100} 
                    onAfterChange={changeLevel}/>
                </div>
                </div>
            </nav>
        )
    }
}

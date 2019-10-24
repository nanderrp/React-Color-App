import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';

export default class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {format: 'hex'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({ format: e.target.value });
        this.props.handleChange(e.target.value);
    }

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
                <div className="Select-container">
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
            </nav>
        )
    }
}

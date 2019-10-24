import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';

export default class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {format: 'hex', open: false};
        this.handleChange = this.handleChange.bind(this);
        this.closeSnack = this.closeSnack.bind(this);
    }

    handleChange(e){
        this.setState({ format: e.target.value, open: true });
        this.props.handleChange(e.target.value);
    }

    closeSnack(){
        this.setState({ open: false });
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
                <Snackbar anchorOrigin ={{ vertical: "bottom", horizontal: "left" }} 
                          open={this.state.open}
                          autoHideDuration={3000}
                          message={<span id="message-id">Format changed to {this.state.format.toUpperCase()}</span>}
                          ContentProps={{"aria-describedby" : "message-id"}}
                          onClose={this.closeSnack}
                          action={[
                              <IconButton 
                                onClick={this.closeSnack} 
                                color="inherit"
                                key="close"
                                aria-label="close">
                                  <CloseIcon />
                              </IconButton>
                          ]}/>
            </nav>
        )
    }
}

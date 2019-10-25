import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

export default class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500)
        });
    };

    render() {
        
        const { name, background, paletteId, id } = this.props;
        const { copied } = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <div style={{background: background}}className="ColorBox">
                <div className={`Copy-overlay ${copied && 'show'}`} style={{background: background}} />
                <div className={`Copy-message ${copied && 'show'}`}>
                    <h1>Copied</h1>
                    <p>{this.props.background}</p>
                </div>
                <div className="Copy-container">
                <div className="Box-content">
                    <span>{name}</span>
                </div>
                    <button className="Copy-button">Copy</button>
                </div>
               <Link to={`/palette/${paletteId}/${id}`} onClick={(e) => e.stopPropagation()}>
                   <span className="See-more">
                        More
                    </span>
                </Link> 
            </div>
            </CopyToClipboard>
        )
    }
}
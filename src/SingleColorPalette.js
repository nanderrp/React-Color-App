import React, { Component } from 'react';
import ColorBox from './ColorBox';


export default class SingleColorPalette extends Component {

    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    }

    gatherShades(palette, colorFilter){
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorFilter)           
            )
        }
        return shades.slice(1);
    }

    render() {
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.id} name={color.name} background={color.hex}/>
        ))
        return (
            <div className="Palette">
                <h1>Singe Color Palette</h1>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

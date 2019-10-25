import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from "@material-ui/styles";
import {  } from "react-router-dom";


class PaletteList extends Component {

    goToPalette(id) {
        this.props.history.push(`/palette/${id}` )
    }

    render() {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Palette Master</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                        <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
}

export default withStyles(styles)(PaletteList);


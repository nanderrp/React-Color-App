import React from 'react';
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        border: "1px solid black",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "& :hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#dea1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3px"
    }
}

function MiniPalette(props) {

    const { classes, paletteName, emoji, colors } = props;

    const miniColorBoxes = colors.map(color => (
        <div className={classes.miniColor} 
             style={{backgroundColor: color.color}}
             key={color.name}>
         </div>))
    
    return(
    <div className={classes.root} onClick={props.handleClick}>
        <div className={classes.colors}>
            {miniColorBoxes}
        </div>
            <div></div>
            <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
    </div>
    );
};

export default withStyles(styles)(MiniPalette);
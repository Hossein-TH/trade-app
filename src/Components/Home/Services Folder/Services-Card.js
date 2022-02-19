import React from 'react';
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    Card: {
        background: '#242741',
        borderRadius: "20px",
        padding: "20px 35px",
        textAlign: "center",
        overflow: "hidden",
        margin: "0 auto",
        width: "250px",
        transition: "all 0.3s ease",
        height: "280px",

        '&:hover': {
            background: "#242749",
        },
    },
    Title: {
        fontSize: "18px",
        color: "#e7e6f2",
        fontFamily: "Poppins",
        margin: "10px 0 15px 0"
    },
    Description: {
        fontSize: "18px",
        color: "#a9b3c1",
        margin: "10px 0"
    },
    Image: {
        height: "80px",
        width: "80px",
        objectFit: "cover",
        borderRadius: "50%",
        margin: "0 auto",
        border: "5px solid crimson",
        transition: "all 0.3 ease"
    }
}));

const ServicesCard = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.Card}>
            <img alt="Services" className={classes.Image} src={props.Src}/>
            <Typography className={classes.Title}>
                {props.Text}
            </Typography>
            <Typography className={classes.Description}>
                {props.Description}
            </Typography>
        </div>
    );
};

export default ServicesCard;

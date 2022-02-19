import React from 'react';
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    Card: {
        background: 'linear-gradient(180deg,#28292c 0%,rgba(39,40,43,0.82) 100%)',
        borderRadius: "16px",
        boxShadow: "0px 13px 40px rgb(0 0 0 / 30%), 0px 4px 4px rgb(0 0 0 / 20%)",
        padding: "52px",
        textAlign: "left",
        width: "366px",
        overflow: "hidden",
        height: "268px",

        [theme.breakpoints.down('md')]: {
            height: "268px",
            width: "auto",
        },

        '&:hover': {
            transform: "scale(1.06)",
            transition: "all 0.4s ease-out"
        },
    },
    Title: {
        fontSize: "20px",
        color: "#F7F8F8",
        fontFamily: "Poppins",
        fontWeight: 500,
        margin: "10px 0 7px 0"
    },
    Description: {
        fontSize: "18px",
        color: "#8A8F98",
        lineHeight: 1.4,
        margin: "10px 0 7px 0"
    },
}));

const FeatureCard = (props) => {
    const classes = useStyles();

    return (
        <section className={classes.Card}>
            <div>
                {props.Icon}
            </div>
            <Typography className={classes.Title}>
                {props.Title}
            </Typography>
            <Typography variant="caption" className={classes.Description}>
                {props.Description}
            </Typography>
        </section>
    );
};

export default FeatureCard;

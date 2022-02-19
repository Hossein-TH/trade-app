import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
import animationData from '../../../Assets/img/intro-animation';
import TypeMe, {Delay, Delete} from 'react-typeme';

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fff",
        padding: "160px 0 120px 0",
        position: "relative",
        background: "#191b2d",

        [theme.breakpoints.down('md')]: {
            padding: "80px 0",
        }
    },
    Heading: {
        fontSize: "30px",
        fontWeight: 600,
        marginTop: "-20px",
        fontFamily: "Ubuntu-Bold",

        [theme.breakpoints.up('md')]: {
            fontSize: "40px",
        },
        '& span:nth-child(1)': {
            color: "#7FFF00",
            borderBottom: "1px solid",
            borderRadius: "50%",
        },
        '& span:nth-child(2)': {
            color: "crimson",
            borderBottom: "1px solid",
            borderRadius: "50%",
        }
    },
    TopLine: {
        color: "#C850C0",
        fontSize: "17px",
        lineHeight: "16px",
        fontWeight: 700,
        marginTop: "-35px",
        letterSpacing: "1.4px",
        marginBottom: "36px",
        fontFamily: "Ubuntu-Bold"
    },
    TypedText: {
        fontSize: "20px",
        marginTop: "30px",
        fontFamily: "Ubuntu-Bold",
        color: "#a9b3c1",
        [theme.breakpoints.up('md')]: {
            fontSize: "27px",
        },
    },
    Buttons: {
        marginTop: "50px"
    },
    animationWrapper: {
        marginTop: 0,
        [theme.breakpoints.up('lg')]: {
            marginTop: "-120px",
        },
    },
    CustomShape: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
    },
    Svg: {
        position: "relative",
        display: "block",
        width: "calc(300% + 1.3px)",
        height: "150px",
    },
    ShapeFill: {
        fill: "#1d1f34"
    },
}));


const Header = () => {
    const classes = useStyles();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <div id="Intro" className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item lg={6} xs={12}>
                        <Typography className={classes.TopLine}>
                            STAY IN TOUCH
                        </Typography>
                        <Typography className={classes.Heading}>
                            Providing the <span>simplest</span> solution for the most complex <span>problem</span>
                        </Typography>
                        <Typography className={classes.TypedText}>
                            <TypeMe strings={[
                                'Welcome to our trade app :)',
                                <Delay ms={2000}/>,
                                <Delete characters={27}/>,
                                'Leave your trades to us !',
                                <Delay ms={2000}/>,
                                <Delete characters={26}/>,
                                'Experience an easy trade with us',
                                <Delay ms={3000}/>,
                                <Delete characters={32}/>,
                                'Welcome to our trade app :)',
                            ]}/>
                        </Typography>
                        <Grid container spacing={3} className={classes.Buttons}>
                            <Grid item>
                                <Button component={Link} color="primary" variant="outlined" to="/Download-Page">
                                    Download App
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button component={Link} color="secondary" variant="outlined" to="/Tutorial-Page">
                                    Learn More
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6} xs={12} className={classes.animationWrapper}>
                        <Lottie options={defaultOptions} style={{maxWidth: "500px", float: "right"}}/>
                    </Grid>
                </Grid>
            </Container>
            <div className={classes.CustomShape}>
                <Hidden implementation="js" smDown xlUp>
                    <svg className={classes.Svg} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path className={classes.ShapeFill}
                              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        >
                        </path>
                    </svg>
                </Hidden>
            </div>
        </div>
    );
};

export default Header;

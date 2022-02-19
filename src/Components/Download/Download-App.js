import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {IconContext} from "react-icons";
import {FcLinux, FcAndroidOs} from "react-icons/fc";
import {FaWindows} from "react-icons/fa";
import Lottie from 'react-lottie';
import animationData from '../../Assets/img/education-animation';
import {styled} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fff",
        padding: "50px 0",
        background: "#191b2d",
    },
    ItemsWrapper: {
        marginTop: "80px"
    },
    HeaderText: {
        fontSize: "48px",
        fontFamily: "Poppins",
    },
    Features: {
        marginTop: "20px"
    },
    FeatureTitle: {
        margin: "10px auto",
        fontSize: "20px",
        fontFamily: "Ubuntu-Bold",
        color: "rgba(255, 255, 255, 0.7)",
    },
    FeatureSubtitle: {
        margin: "10px auto",
        fontSize: "15px",
        fontFamily: "Ubuntu-Regular",
        color: "#a9b3c1",
    },
    Card: {
        backgroundColor: "#242741",
        marginTop: "15px",
        padding: "25px",
        boxShadow: "0px 9px 21px -5px rgba(36,39,65,0.45)",
        borderRadius: "10px",
    },
    CardText: {
        textAlign: "center",
        margin: "25px 0 0 0",
        fontFamily: "Ubuntu-Bold",
        color: '#ddd'
    },
    Button: {
        borderRadius: "10px",
        color: 'white',
        height: 60,
        marginLeft: "15px",
        width: 250,
        textTransform: "none",
        fontSize: "17px",
    },
}));

const CardData = styled(Typography)({
    backgroundColor: props => props.Color,
    boxShadow: props => props.Shadow,
    padding: "35px",
    width: "100px",
    fontFamily: "Poppins",
    fontSize: "20px",
    borderRadius: "20px",
    textAlign: "center",
    margin: "0 auto"
});

const DownloadApp = () => {
    const classes = useStyles();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <section className={classes.root}>
            <IconContext.Provider value={{size: 40}}>
                <Container>
                    <Grid container>
                        <Grid item lg={6} xs={12}>
                            <Lottie options={defaultOptions}/>
                        </Grid>
                        <Grid item lg={6} xs={12} className={classes.ItemsWrapper}>
                            <Grid item lg={12} xs={12}>
                                <Typography className={classes.HeaderText}>
                                    Download The Best Financial App
                                </Typography>
                            </Grid>
                            <Grid container item lg={12} xs={12} spacing={3} className={classes.Features}>
                                <Grid item lg={6} xs={12}>
                                    <FaWindows/>
                                    <Typography className={classes.FeatureTitle}>
                                        Download For Windows
                                    </Typography>
                                    <Typography className={classes.FeatureSubtitle}>
                                        Our application support all of 7/8/10 versions of windows.
                                    </Typography>
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <FcAndroidOs/>
                                    <FcLinux/>
                                    <Typography className={classes.FeatureTitle}>
                                        Other platforms
                                    </Typography>
                                    <Typography className={classes.FeatureSubtitle}>
                                        this is coming soon...
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item lg={12} xs={12} container spacing={2}>
                                <Grid item lg={4} xs={12}>
                                    <div className={classes.Card}>
                                        <CardData Color="#9078f9" Shadow="0px 20px 35px -5px rgba(144,120,249,0.45)">
                                            2M
                                        </CardData>
                                        <Typography className={classes.CardText}>
                                            Downloads
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item lg={4} xs={12}>
                                    <div className={classes.Card}>
                                        <CardData Color="#ff80a4" Shadow="0px 20px 35px -5px rgba(255,128,164,0.45)">
                                            92k
                                        </CardData>
                                        <Typography className={classes.CardText}>
                                            Premium Users
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item lg={4} xs={12}>
                                    <div className={classes.Card}>
                                        <CardData Color="#ff9f64" Shadow="0px 20px 35px -5px rgba(255,159,100,0.45)">
                                            72k
                                        </CardData>
                                        <Typography className={classes.CardText}>
                                            Positive Reviews
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item lg={12} xs={12} style={{textAlign: "center",marginTop: "50px",padding: 0}}>
                                    <Button variant="contained" color="primary" className={classes.Button}>
                                        Download App
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </IconContext.Provider>
        </section>

    );
};

export default DownloadApp;

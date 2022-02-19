import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FeatureCard from "./Feature-Card";
import {IconContext} from "react-icons";
import {MdDirectionsRun, MdGroup, MdWhatshot, MdSpa, MdCloudOff,} from "react-icons/md";
import {FaMoon} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fff",
        padding: "120px 0",
        background: "#191b2d",
    },
    Text: {
        color: "#fff",
        fontSize: "48px",
        marginBottom: "100px",
        textAlign: "center",
        fontFamily: "Poppins"
    }
}));

const DownloadFeatures = () => {
        const classes = useStyles();

        return (
            <section className={classes.root}>
                <IconContext.Provider value={{size: 32, color: "#5e6ad2"}}>
                    <Grid container>
                        <Grid item lg={12} xs={12}>
                            <Typography className={classes.Text}>
                                An experience you'd expect from a <br/> professional tool
                            </Typography>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                            <Container maxWidth="lg">
                                <Grid container spacing={2}>
                                    <Grid item lg={4} xs={12}>
                                        <FeatureCard Icon={<MdDirectionsRun/>} Title="Built for speed"
                                                     Description="Synchronized in real-time across all users. No spinners or waiting."/>
                                    </Grid>
                                    <Grid item lg={4} xs={12}>
                                        <FeatureCard Icon={<MdSpa/>} Title="Keyboard first design"
                                                     Description="Optimized for efficiency with extensive keyboard shortcuts."/>
                                    </Grid>
                                    <Grid item lg={4} xs={12}>
                                        <FeatureCard Icon={<MdWhatshot/>} Title="For software teams"
                                                     Description="Created by software people for software product teams."/>
                                    </Grid>
                                    <Grid item lg={4} xs={12}>
                                        <FeatureCard Icon={<MdCloudOff/>} Title="Works offline"
                                                     Description="Access and make changes with or without internet access."/>
                                    </Grid>
                                    <Grid item lg={4} xs={12}>
                                        <FeatureCard Icon={<FaMoon/>} Title="Light and dark UI"
                                                     Description="We have multiple themes. Use light or dark, your choice."/>
                                    </Grid>
                                    <Grid item lg={4} xs={12}>
                                        <FeatureCard Icon={<MdGroup/>} Title="Multiple teams"
                                                     Description="Have all your teams in one shared workspace."/>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </IconContext.Provider>
            </section>
        );
    }
;

export default DownloadFeatures;

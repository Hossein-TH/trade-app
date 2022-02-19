import React from 'react';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Lottie from 'react-lottie';
import animationData from '../../Assets/img/dashboard';

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fafafa",
        padding: "140px 0",
        background: "#1d1f34",
    },
    TopLine: {
        color: "#addfcd",
        marginTop: "40px",
        fontSize: "18px",
        lineHeight: "16px",
        fontWeight: 700,
        letterSpacing: "1.4px",
        marginBottom: "16px"
    },
    Heading: {
        marginBottom: "24px",
        fontSize: "48px",
        lineHeight: "1.1",
        fontWeight: "600",
        color: "#f7f8fa"
    },
    Subtitle: {
        maxWidth: "440px",
        marginBottom: "35px",
        fontSize: "18px",
        lineHeight: "24px",
        color: "#a9b3c1"
    },
    animationWrapper: {
        marginTop: "15px",
        maxWidth: "600px",
        [theme.breakpoints.down('md')]: {
            marginTop: "80px"
        }
    }
}));


const DownloadDashboard = () => {
    const classes = useStyles();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <section className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item lg={6} xs={12}>
                        <Typography className={classes.TopLine}>
                            With cool Dashboard
                        </Typography>
                        <Typography className={classes.Heading}>
                            Easily control <br/> your data
                        </Typography>
                        <Typography className={classes.Subtitle}>
                            Enable the best product analytics, A/B testing, and data warehouse tools with the flip of a
                            switch.
                        </Typography>
                        <Button color="primary" size="large" variant="contained" style={{textTransform: "none"}}>
                            Learn More
                        </Button>
                    </Grid>
                    <Grid item lg={6} xs={12} className={classes.animationWrapper}>
                        <Lottie options={defaultOptions}/>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default DownloadDashboard;

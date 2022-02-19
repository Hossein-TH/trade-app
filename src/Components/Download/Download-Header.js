import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
import animationData from '../.././Assets/img/download';

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fff",
        padding: "120px 0",
        background: "#1d1f34",
        textAlign: "left",
    },
    Heading: {
        fontSize: "45px",
        fontWeight: 600,
        fontFamily: "Ubuntu-Bold",
    },
    Subtitle: {
        marginTop: "35px",
        fontSize: "18px",
        maxWidth: "500px",
        lineHeight: "24px",
        fontFamily: "Ubuntu-Regular",
        color: "#a9b3c1"
    },
    Button: {
        marginTop: "50px",
    },
    animationWrapper: {
        marginTop: "-80px",
    },
    animation: {
        maxWidth: "555px",
        width: "100%",
    },
}));

const DownloadHeader = () => {
    const classes = useStyles();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <section className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item lg={6} xs={12} className={classes.animationWrapper}>
                        <Lottie options={defaultOptions} style={{maxWidth: "500px", float: "left"}}/>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <Typography className={classes.Heading}>
                            Powering social proof <br/> for leading brands
                        </Typography>
                        <Typography className={classes.Subtitle}>
                            we built a product that converts online shoppers in real customers in a flash. Yes,we
                            are
                            that good and you will be soon as well.
                        </Typography>
                        <Button className={classes.Button} color="primary" size="large" variant="contained"
                                href="#DownloadApp">
                            Go to Download
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </section>

    );
};

export default DownloadHeader;

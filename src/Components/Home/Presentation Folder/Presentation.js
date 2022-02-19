import React from 'react';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, EffectFade} from 'swiper/core';
import "swiper/swiper.min.css";
import pic1 from '../../../Assets/img/Goal.png';
import pic2 from '../../../Assets/img/Blog.png';
import pic3 from '../../../Assets/img/Dollor.png';

SwiperCore.use([Autoplay, EffectFade]);

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fafafa",
        background: "#191b2d",
        padding: "160px 0",
        [theme.breakpoints.down('md')]: {
            padding: "80px 0",
        }
    },
    TopLine: {
        color: "#4B59F7",
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
    ImageWrapper: {
        textAlign: "center",
        marginTop: "-20px",
        [theme.breakpoints.down('md')]: {
            marginTop: "80px"
        }
    },
    Image: {
        maxHeight: "368px",
        borderRadius: "10px"
    }
}));


const Presentation = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item lg={6} xs={12} className={classes.textWrapper}>
                        <Typography className={classes.TopLine}>
                            How to use it
                        </Typography>
                        <Typography className={classes.Heading}>
                            Easily Download <br/> Our App
                        </Typography>
                        <Typography className={classes.Subtitle}>
                            Once you've joined, our team of specialist will
                            reach out to you and get you set up in minutes.
                            Learn More
                        </Typography>
                        <Button color="primary" size="large" variant="contained" style={{textTransform: "none"}}>
                            Learn More
                        </Button>
                    </Grid>
                    <Grid item lg={6} xs={12} className={classes.ImageWrapper}>
                        <Swiper speed={2000} autoplay={{
                            "delay": 5500,
                            "disableOnInteraction": false
                        }}>
                            <SwiperSlide><img src={pic1} className={classes.Image}/></SwiperSlide>
                            <SwiperSlide><img src={pic2} className={classes.Image}/></SwiperSlide>
                            <SwiperSlide><img src={pic3} className={classes.Image}/></SwiperSlide>
                        </Swiper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Presentation;

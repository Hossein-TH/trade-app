import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import Typography from "@material-ui/core/Typography";
import ServicesCard from "./Services-Card";
import Dollar from '../../../Assets/img/Dollor.png'
import Company from '../../../Assets/img/Company.png'
import Shot from '../../../Assets/img/Shot.png'
import Goal from '../../../Assets/img/Goal.png'
import Commerce from '../../../Assets/img/Commerce.png'
import Blog from '../../../Assets/img/Blog.png'

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fff",
        padding: "0 0 180px 0",
        clipPath: "polygon(0 0,100% 0,100% 90%,0 100%)",
        background: "#1d1f34",
        [theme.breakpoints.down('md')]: {
            clipPath: "polygon(0 0,100% 0,100% 95%,0 100%)",
        }
    },
    Title: {
        color: "#fff",
        fontSize: "48px",
        textAlign: "center",
        fontFamily: "Poppins",

        '& span': {
            color: "crimson",
            borderBottom: "1px solid crimson"
        }
    },
    Subtitle: {
        color: "#a9b3c1",
        fontSize: "30px",
        margin: "20px auto",
        textAlign: "center",
        padding: "10px",
        fontFamily: "Ubuntu-Bold"
    },
    Description: {
        color: "#b2adff",
        fontSize: "24px",
        maxWidth: "1000px",
        margin: "10px auto 80px auto",
        textAlign: "center",
        padding: "10px",
        fontFamily: "Ubuntu-Regular"
    }
}));

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Services = () => {
        const classes = useStyles();

        return (
            <div id="Services" className={classes.root}>
                <Grid container>
                    <Grid item lg={12} xs={12}>
                        <Typography className={classes.Title}>
                            Our <span> Services </span>
                        </Typography>
                        <Typography className={classes.Subtitle}>
                            The Best Services in Trading!
                        </Typography>
                        <Typography className={classes.Description}>
                            We serve small and medium sized companies in all tech related industries with high quality
                            growth services wich are presented below with ❤
                        </Typography>
                    </Grid>
                    <Grid item lg={12} xs={12}>
                        <Swiper
                            speed={5000}
                            loop={true}
                            grabCursor={true}
                            breakpoints={{
                                "640": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 40
                                },
                                "968": {
                                    "slidesPerView": 2,
                                    "spaceBetween": -150
                                },
                                "1200": {
                                    "slidesPerView": 4,
                                    "spaceBetween": -50,
                                }
                            }}
                            autoplay={{
                                "delay": 80,
                                "disableOnInteraction": false
                            }}
                        >
                            <SwiperSlide>
                                <ServicesCard Src={Dollar} Text="Take Control with money"
                                              Description="Financial and audience data from each platform, aggregated."/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ServicesCard Src={Commerce} Text="Big Commerce,you can have"
                                              Description="Diverse revenue streams are wonderful, but tracking them is a pain."/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ServicesCard Src={Shot} Text="In the second screenshot,you"
                                              Description="With other creators and track each project's performance in a communal space."/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ServicesCard Src={Blog} Text="Blog Articles and their software"
                                              Description="Whether for a single video or an entire march line, handles settlements."/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ServicesCard Src={Goal} Text="This is their overall goal and they"
                                              Description="Stir is backed and advised by leaders and innovators in the creator economy."/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ServicesCard Src={Company} Text="The Company drives home the"
                                              Description="we produce enabling creators to run great businesses."/>
                            </SwiperSlide>
                        </Swiper>
                    </Grid>


                </Grid>
            </div>
        );
    }
;

export default Services;

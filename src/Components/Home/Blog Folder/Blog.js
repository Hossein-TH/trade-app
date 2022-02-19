import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlogCard from "./BlogCard";
import Card1 from '../../../Assets/img/Card1.jpg';
import Card2 from '../../../Assets/img/Card2.jpg';
import Card3 from '../../../Assets/img/Card3.png';

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fafafa",
        padding: "160px 0",
        background: "#191b2d",
    },
    Title: {
        position: "relative",
        textAlign: "center",
        fontSize: "40px",
        fontWeight: 500,
        marginBottom: '100px',
        marginTop: "-100px",
        paddingTop: "20px",
        fontFamily: "Ubuntu-Bold",
        '&::before': {
            content: `""`,
            position: "absolute",
            bottom: "-15px",
            left: "50%",
            width: "180px",
            height: "3px",
            background: "#fafafa",
            transform: "translateX(-50%)",
        },
        '&::after': {
            content: `"Last Trade News"`,
            position: "absolute",
            top: "76px",
            bottom: "-16px",
            fontSize: "18px",
            left: "50%",
            color: "crimson",
            padding: "0 7px",
            background: "#191b2d",
            transform: "translateX(-50%)",
        }
    },
}));

const Blog = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item lg={12} xs={12} className={classes.Title}>
                        Blog News
                    </Grid>
                    <Grid item lg={12} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item lg={4} xs={12}>
                                <BlogCard Src={Card1} title={"Keep everyone in sync"} picTitle={"Blog"}
                                          caption={"Running effective re,ote meetings can be challenging, but its one of the most"}/>
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <BlogCard Src={Card2} title={"Build designs that scale"} picTitle={"Blog"}
                                          caption={"In order to help you with the process of transitioning your team to remote work"}/>
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <BlogCard Src={Card3} title={"Customise your workflow"} picTitle={"Blog"}
                                          caption={"Hiring employees in different parts of the world isn't only a great way to"}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Blog;

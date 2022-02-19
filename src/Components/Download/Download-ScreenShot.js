import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {IconContext} from "react-icons";
import {FcMultipleDevices, FcMoneyTransfer, FcBusinessman} from "react-icons/fc";
import photo from '../../Assets/img/Laptop.png';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    root: {
        color: "#fff",
        background: "#1d1f34",
        padding: "0 0 100px 0",
    },
    CardHeader: {
        color: "#fff",
        fontSize: "22px",
        textAlign: "left",
        marginTop: "10px",
        maxWidth: "350px",
        fontFamily: "Poppins",
    },
    TextHeader: {
        color: "#fff",
        fontSize: "30px",
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Poppins",
    },
    CardSubtitle: {
        marginTop: "10px",
        textAlign: "left",
        maxWidth: "350px",
        fontSize: "20px",
        lineHeight: "24px",
        fontFamily: "Roboto",
        color: "#a9b3c1"
    },
    TextSubtitle: {
        marginTop: "20px",
        textAlign: "center",
        fontSize: "30px",
        fontFamily: "Roboto",
        color: "crimson"
    },
    Image: {
        width: "100%",
    },
    Devider: {
        backgroundColor: "#a9b3c1",
        marginTop: "50px"
    }
});

const DownloadScreenShot = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <IconContext.Provider value={{size: 40}}>
                <Container maxWidth="lg">
                    <Grid className={classes.ImageWrapper}>
                        <img alt="Screenshots" src={photo} className={classes.Image}/>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item lg={4} xs={12}>
                            <FcMultipleDevices/>
                            <Typography className={classes.CardHeader}>
                                Beautiful themes that are responsive and customizable
                            </Typography>
                            <Typography className={classes.CardSubtitle}>
                                No design skills needed. You have complete control over the look and feel of your
                                website, from its layout, to content and colors.
                            </Typography>
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <FcMoneyTransfer/>
                            <Typography className={classes.CardHeader}>
                                Pricing as low as $9/month
                            </Typography>
                            <Typography className={classes.CardSubtitle}>
                                Whether you sell online, on social media. in store, or out of the trunk of your car,
                                trader has you covered. Start selling anywhere for just $9/month.
                            </Typography>
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <FcBusinessman/>
                            <Typography className={classes.CardHeader}>
                                Trusted by over 800,000 businesses worldwide
                            </Typography>
                            <Typography className={classes.CardSubtitle}>
                                trader handles everything from marketing and payments, to secure checkout and
                                shipping </Typography>
                        </Grid>
                    </Grid>
                    <Divider className={classes.Devider}/>
                    <Grid>
                        <Typography className={classes.TextHeader}>
                            "Trader is better than any other platform we've played with,<br/>
                            and we've played with them all"
                        </Typography>
                        <Typography className={classes.TextSubtitle}>
                            Join us to progress
                        </Typography>
                    </Grid>
                </Container>
            </IconContext.Provider>
        </section>

    );
};

export default DownloadScreenShot;

import React from 'react';
import {IconContext} from "react-icons";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {GiCrystalBars, GiCutDiamond, GiRock} from "react-icons/all";
import {makeStyles} from '@material-ui/core/styles';
import PriceCard from "./Price-Card";



const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fff",
        clipPath: "polygon(0 0,100% 10%,100% 100%,0 95%)",
        padding: "160px 0",
        position: "relative",
        background: "#1d1f34",
        [theme.breakpoints.down('md')]: {
            clipPath: "polygon(0 0,100% 3%,100% 100%,0 98%)",
        }
    },
    HeaderText: {
        color: "#fff",
        fontSize: "48px",
        marginBottom: "80px",
        textAlign: "center",
        fontFamily: "Poppins",
        "& span": {
            color: "crimson",
            borderBottom: "1px solid"
        }
    }
}));


const Pricing = () => {
    const classes = useStyles();
    return (
        <IconContext.Provider value={{color: '#a9b3c1', size: 64}}>
            <div className={classes.root}>
                <Container>
                    <Grid container justify="center">
                        <Grid item lg={12} xs={12}>
                            <Typography className={classes.HeaderText}>Pricing <span>Plan</span></Typography>
                        </Grid>
                        <Grid item lg={12} xs={12} container spacing={5} justify="center">
                            <Grid item>
                                <PriceCard Background="#0005" Icon={<GiRock/>} Header={"Starter Pack"} Price={"$99.99"}
                                           Length={"per month"} FirstFeature={"100 New Users"}
                                           SecondFeature={"$100 Budget"} ThirdFeature={"Retargeting Analytics"}
                                           ButtonText="Get Start for Free" Variant="outlined" Color="secondary"/>
                            </Grid>
                            <Grid item>
                                <PriceCard Background="#0007" Transform="scale(1.06)" Icon={<GiCrystalBars/>}
                                           Header={"Gold Rush"}
                                           Price={"299.99"}
                                           Length={"per six months"} FirstFeature={"1000 New Users"}
                                           SecondFeature={"$1,000 Budget"} ThirdFeature={"Lead Gen Analytics"}
                                           ButtonText="Get full access" Variant="contained" Color="primary"/>
                            </Grid>
                            <Grid item>
                                <PriceCard Background="#0005" Icon={<GiCutDiamond/>} Header={"Diamond Kings"}
                                           Price={"$999.99"}
                                           Length={"per year"} FirstFeature={"unlimited Users"}
                                           SecondFeature={"unlimited Budget"} ThirdFeature={"24/7 Support"}
                                           ButtonText="Get extra pack" Variant="outlined" Color="secondary"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </IconContext.Provider>
    );
};

export default Pricing;

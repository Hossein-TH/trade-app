import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CgArrowRight} from 'react-icons/cg'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        borderRadius: "8px"
    },
    Card: {
        backgroundColor: "#222",
        color: "#fff",
    },
    Title: {
        fontFamily: "Poppins",
        fontSize: "22px"
    },
    Caption: {
        fontFamily: "Ubuntu-Regular",
        fontSize: "15px"
    }
});

export default function BlogCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea classes={{root: classes.Card}}>
                <CardMedia
                    component="img"
                    alt="Trade Photo"
                    height="250"
                    image={props.Src}
                    title={props.picTitle}
                />
                <CardContent>
                    <Typography className={classes.Title} gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography className={classes.Caption} variant="body2" component="p">
                        {props.caption}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions classes={{root: classes.Card}}>
                <Button size="small" variant="outlined" color="secondary" style={{textTransform: "none"}}>
                    Read More &nbsp; <CgArrowRight/>
                </Button>
            </CardActions>
        </Card>
    );
}

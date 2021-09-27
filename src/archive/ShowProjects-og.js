import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    textAlign: 'center'
  },
  highlight: {
    color: theme.palette.primary.main,
  },
}));

export default function WorkCards({data}) {
    const classes = useStyles();
    return (
        <Grid container direction="row" spacing={2} maxWidth={90}>
            {
                data.map((item,index) => (
                    <Grid item xs={12} sm={4}>
                        <Card key={index}>
                            <CardActionArea href={item.link} target="_blank">
                                <CardHeader 
                                    title={item.project}
                                    subheader={"Released: " + item.deployed}
                                />
                                <CardMedia
                                    component="img"
                                    //width="20px"
                                    height="250px"
                                    image={item.image}
                                    title={item.project}
                                />
                                <CardContent>
                                    <Typography variant="subtitle2" gutterBottom>
                                        {item.desc}
                                    </Typography>
                                    <Typography className={classes.highlight} variant="caption" gutterBottom>
                                        <em>{item.details}</em>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    );
}

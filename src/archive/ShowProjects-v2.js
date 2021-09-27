import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
//import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.grey,
    },
    action: {
      backgroundColor: '#fff',
    },
    projectImage: {
        maxWidth: '100vh',
        height: 'auto'
    },
    titleBar: {
        background: '#255D69'
      //background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

export default function WorkCards({data}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight={400} cols={2.5}>
            {
                data.map((item,index) => (
                    <GridListTile key={item.image}>
                        <img src={item.image} alt={item.project} className={classes.projectImage}/>
                        <GridListTileBar
                            title={item.desc + " (" + item.deployed + ")"} 
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton className={classes.action} aria-label={`open ${item.project}`}>
                                    <LaunchIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))
            }
            </GridList>
        </div>
    );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Link from '@material-ui/core/Link';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
//import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    contentAlign: 'middle',
    textAlign: 'center'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline({data}) {
    const classes = useStyles();
    return (
        <Timeline align="alternate">
            {
                data.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                            <div className={(item.end)? "text-ep-blue-dark text-opacity-75 pt-2" : "text-ep-blue-dark pt-2"}>
                                {(item.start)?(item.end)?item.start + "- " + item.end : "Since " + item.start : "Class of " + item.end}
                            </div>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot>
                            {(item.start)?(item.end)?<WorkIcon />: <WorkIcon className="text-ep-blue-dark"/>:<SchoolIcon />}
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <h6 className="text-lg font-extrabold">{item.role}</h6>
                            <a className="text-sm italic text-ep-blue-dark hover:text-ep-yellow" href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.org}
                            </a>
                        </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
    );
}

import React, {Component} from 'react';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';


const CustomAppBar = styled(AppBar)({
    background: 'linear-gradient(45deg, #87bdc7 30%, #CAC486 90%)',
    position: 'fixed',
});

class AppHeader extends Component {
  render() {
    return (
        <div>
            <CustomAppBar boxshadow={3}>
                <Toolbar>
                    <Grid
                    justify="space-between" // Add it here :)
                    alignItems="center"
                    container 
                    spacing={1}
                    >
                        <Grid item>
                            <IconButton edge="start" aria-label="github" href="https://github.com/emmalu" target="_blank">
                                <GitHubIcon />
                            </IconButton>
                            <IconButton  aria-label="linkedin" href="https://linkedin.com/in/elpaz" target="_blank">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton  aria-label="phont/text" tel="4045421123" target="_blank">
                                <PhoneIphoneIcon />
                            </IconButton>
                            <IconButton  aria-label="email" href="mailto:mapmazelu@icloud.com?Subject=Portfolio" target="_blank">
                                <AlternateEmailIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <h1 className="cursor-pointer text-2xl" onClick={() => window.scrollTo(0, 0)}>
                                MapMazeLu
                            </h1>
                        </Grid>
                    </Grid>
                </Toolbar>
            </CustomAppBar>
        </div>
    )
  }
};

export default AppHeader;
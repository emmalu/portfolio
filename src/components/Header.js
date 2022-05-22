import React, { Component } from "react";
import { styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const CustomAppBar = styled(AppBar)({
  background: "linear-gradient(45deg, #87bdc7 30%, #CAC486 90%)",
  position: "fixed",
});

class AppHeader extends Component {
  render() {
    return (
      <CustomAppBar boxshadow={3}>
        <Toolbar>
          <Grid
            justify="space-between" // Add it here :)
            alignItems="center"
            container
            spacing={1}
          >
            <Grid item>
              <IconButton
                edge="start"
                aria-label="github"
                href="https://github.com/emmalu"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                href="https://linkedin.com/in/elpaz"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="email"
                href="mailto:dev@emmapaz.com?Subject=Portfolio"
                target="_blank"
              >
                <AlternateEmailIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <h1
                className="cursor-pointer text-4xl font-semibold text-ep-blue-dark"
                onClick={() => window.scrollTo(0, 0)}
              >
                EP
              </h1>
            </Grid>
          </Grid>
        </Toolbar>
      </CustomAppBar>
    );
  }
}

export default AppHeader;

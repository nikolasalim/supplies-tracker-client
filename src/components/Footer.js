import React from "react";

import { Grid, Typography } from "@material-ui/core/";

class Footer extends React.Component {
  render() {
    return (
      <Grid container justify="center" style={{ padding: 20 }}>
        <Grid item>
          <Typography variant="caption" gutterBottom>
            Stay safe ♥︎
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;

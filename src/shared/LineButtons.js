
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';


class LineButtons extends Component {
  //
  static propTypes = {
    children: PropTypes.any,
  };


  render() {
    //
    const { children } = this.props;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            { children }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LineButtons;

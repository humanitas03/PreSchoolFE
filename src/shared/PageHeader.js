
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Header, Divider } from 'semantic-ui-react';


class PageHeader extends Component {
  //
  static propTypes = {
    text: PropTypes.string,
  };


  render() {
    //
    const { text } = this.props;

    return (
      <Fragment>
        <Header as='h1' content={text} />
        <Divider />
      </Fragment>
    );
  }
}

export default PageHeader;

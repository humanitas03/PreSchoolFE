
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

@autobind
class LoginFormView extends Component {
  //
  static propTypes = {
    user: PropTypes.object,
    onChangeUserProp: PropTypes.func,
  };


  onChangeId(e) {
    //
    const { onChangeUserProp } = this.props;
    console.log("change ID : ",e.target.value);
    onChangeUserProp('id', e.target.value);
  }

  onChangePwd(e) {
    //
    const { onChangeUserProp } = this.props;
    console.log("change PWD : ",e.target.value);
    onChangeUserProp('pwd', e.target.value);
  }

  render() {
    //
    const { user } = this.props;

    return (
      <Form>
        <Form.Field>
          <label>ID</label>
          <input placeholder='ID' value={user.email} onChange={this.onChangeId} />
        </Form.Field>

        <Form.Field>
          <label>PWD</label>
          <input type='password' placeholder="PWD" value={user.name} onChange={this.onChangePwd} />
        </Form.Field>
      </Form>
    );
  }
}

export default LoginFormView;

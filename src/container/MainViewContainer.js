import React,{Component} from 'react';

import autobind from 'autobind-decorator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Button, Segment, Icon } from 'semantic-ui-react';

import userAction from '../action/userAction';
import PageHeader from '../shared/PageHeader';


class MainViewContainer extends Component{
   
    
    render(){
        <div>
            MainPage To : {this.props.user.name}
        </div>
    }
}


const mapStateToProps = ({ userListState }) => ({
    user : userState.users,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    userAction: bindActionCreators(userAction, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainViewContainer);
  
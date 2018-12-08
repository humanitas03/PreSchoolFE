import React,{Component} from 'react';

import autobind from 'autobind-decorator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Header, Segment, Icon } from 'semantic-ui-react';
import queryString from 'query-string';

import userAction from '../action/userAction';
import PageHeader from '../shared/PageHeader';


class MainViewContainer extends Component{
   
    render(){
        const query = queryString.parse(location.search);
        console.log("query : ",query);

        const titleString = "hello " + this.props.user.id;
        return(
            <Container style={{margin: '2em'}}>
                <PageHeader text={titleString}>
                    
                </PageHeader>
                
                <Segment>
                    this is the main page
                </Segment>
            </Container>

            // <div>
            //     {/* MainPage To : {this.props.user.name} */}
            //     <h2>This is main Page</h2><br/>
            //     <p>hello teacher : {this.props.user.id} </p>
            // </div>
        );
        
    }
}


const mapStateToProps = ({ userState }) => ({
    user : userState.teacher,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    userAction: bindActionCreators(userAction, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainViewContainer);
  
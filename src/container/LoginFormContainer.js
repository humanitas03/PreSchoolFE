import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Button, Segment, Icon, Header, Divider} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import userAction from '../action/userAction';
import PageHeader from '../shared/PageHeader';

import LoginFormView from '../view/LoginFormView';
import LineButtons from '../shared/LineButtons';

@autobind
class LoiginFormContainer extends Component{

    onRouteUser(user){
        const {history} = this.props;
        history.push(`/front/user/${user.id}`);
    }


    setUserProp(propName, value) {
        //
        this.props.userAction.setUserProp(propName, value);
    }

    onClickSignIn() {
        //
        console.log("show User :", this.props)
        const { user } = this.props;
        const invalid = Object.keys(user).some((userProp) => !user[userProp]);

        if (invalid) {
            alert('정보를 모두 입력해 주세요.');
            return;
        }

        Promise.resolve()
        .then(() => this.props.userAction.loginUser(user))
        .then((response)=>{
            console.log(response.data); //정상적이라면 아이디를 받아옵니다.
            //선생님 정보를 받아와서 state 변화
            this.props.userAction.findUser(response.data);
        }) // Step 1-2
        .then(this.onRouteUser(response.data))
        }

       

        render(){
            const {user} = this.props;
            return (
            <Container style={{margin: '2em'}}>
                <PageHeader text="Login Page" />
                <Segment>
                    <Header icon textAlign='center' size='huge'>
                        <Icon name='id badge'/>
                    </Header>
                   
                    <LoginFormView
                        user = {user}
                        onChangeUserProp = {this.setUserProp}
                    />
                    <Divider horizontal/>
                    <Button
                        fluid
                        primary
                        onClick = {this.onClickSignIn}
                    >Login</Button>
                </Segment>

                <Segment>
                    <a onClick={()=>alert('미구현입니다.')}>아이디 비밀번호 찾기</a>
                {/* <Link to={alert("미구현입니다.")}>아이디/비밀번호찾기</Link> */}
                </Segment>
            </Container>                
            );
        }
}


const mapStateToProps = ({ userState }) => ({
    user: userState.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    userAction: bindActionCreators(userAction, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoiginFormContainer);
  
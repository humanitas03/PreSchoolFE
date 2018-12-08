
import axios from 'axios';
// import {handleActions, createAction} from 'redux-action'

const basePath = '.';

//로그인 기능 담당
function signInUser(user) {
  console.log("Login POST api : ", user);
  
  return axios.post(`${basePath}/user`, user)
        .then((response) => {
            console.log("getResponse : ", response);
            return response
        });
}

function findUser(userId){
  return axios.get(`${basePath}/users/${userId}`)
    .then((response) => response.data);
}


export default {
 signInUser,
 findUser
};

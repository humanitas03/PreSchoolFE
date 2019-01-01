import axios from 'axios';
// import {handleActions, createAction} from 'redux-action'

const basePath = '.';

//포트폴리오리스트 데이터 가져오기
function findPolioList(stdId){
    return axios.get(`${basePath}/portfolio/${stdId}`)
      .then((response)=>response.data);
  }
  
  
  export default {
   findPolioList
  };
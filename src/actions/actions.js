import store from '../store.js';
import axios from 'axios';

export default () => {
  store.dispatch((dispatch) => {
    dispatch({type: 'FETCH_GEODATA_START'})

    axios.get('http://127.0.0.1:8080/api/geo')
      .then( (response) => {
        dispatch( {type: 'RECIVE_DATA', data: response.data} )
      })
      .catch( (err) => {
        dispatch( {type : 'FETCH_DATA_ERROR', data: err} )
      })
  })
};

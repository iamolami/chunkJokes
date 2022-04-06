import { SERVER_DETAILS } from "../../utils/fetchData";
import axios from 'axios'

export const GLOBAL_TYPES = {
    ALERT: 'ALERT'
}

export const JOKES_TYPE = {
    GET_JOKES: 'GET_JOKES',
    GET_CATEGORIES: 'GET_CATEGORIES',
    GET_RANDOM_JOKES: 'GET_RANDOM_JOKES',
    LOADING_JOKES: 'LOADING_JOKES',
    LOADING_CATEGORIES: 'LOADING_CATEGORIES'
}

export const getJokes = () => {
    return (dispatch) => {
      const headers = {
        "Content-Type": "application/json"
      };
      dispatch({ type: JOKES_TYPE.LOADING_JOKES});
      axios
        .get(SERVER_DETAILS.getJokes, {
          headers: headers,
        })
        .then((response) => {
          dispatch({
            type: JOKES_TYPE.GET_JOKES,
            payload: response?.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: JOKES_TYPE.LOADING_JOKES,
            payload: error?.response?.data
              ? error?.response?.data?.message
              : error?.message,
          });
        });
    };
  }

  export const getCategories = () => {
    return (dispatch) => {
      const headers = {
        "Content-Type": "application/json"
      };
      dispatch({ type: JOKES_TYPE.LOADING_CATEGORIES});
      axios
        .get(SERVER_DETAILS.getCategories, {
          headers: headers,
        })
        .then((response) => {
          dispatch({
            type: JOKES_TYPE.GET_CATEGORIES,
            payload: response?.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: JOKES_TYPE.LOADING_CATEGORIES,
            payload: error?.response?.data
              ? error?.response?.data?.message
              : error?.message,
          });
        });
    };
  }
// Define action creator and what should it do
import axios from "axios";

import { GET_LEADS, DELETE_LEAD } from "./types";
import { ADD_LEAD } from "./types";

export const getLeads = () => dispatch => {
  axios
    .get("http://127.0.0.1:8000/api/leads/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteLead = id => dispatch => {
  axios
    .delete(`http://127.0.0.1:8000/api/leads/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addLead = lead => dispatch => {
  axios
    .post("http://127.0.0.1:8000/api/leads/", lead)
    .then(res => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

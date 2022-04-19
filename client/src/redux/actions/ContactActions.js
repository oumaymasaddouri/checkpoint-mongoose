import { GETCONTACTS, GETONECONTACT } from "../actionTypes/ContactTypes";
import axios from "axios";

// export const getcontacts=()=>{
//     return {type:GETCONTACTS, payload:}
// }
export const getcontacts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/contacts/getcontact");
    dispatch({ type: GETCONTACTS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const addcontact = (newContact) => async (dispatch) => {
  try {
    await axios.post("/api/contacts", newContact);
    dispatch(getcontacts());
  } catch (error) {
    console.log(error);
  }
};
export const deleteContact = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/contacts/deletecontact/${id}`);
    dispatch(getcontacts());
  } catch (error) {
    console.log(error);
  }
};
export const editContact = (id, updatedcontact) => async (dispatch) => {
  try {
    const res = await axios.put(
      `/api/contacts/updatedcontact/${id}`,
      updatedcontact
    );
    dispatch(getcontacts());
  } catch (error) {
    console.log(error);
  }
};
export const getonecontact = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/contacts/${id}`);
    dispatch({ type: GETONECONTACT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

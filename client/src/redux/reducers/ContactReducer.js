import { GETCONTACTS, GETONECONTACT } from "../actionTypes/ContactTypes";
const intialState = {
  contacts: [],
  contact: {},
};

const ContactReducer = (state = intialState, action) => {
  switch (action.type) {
    case GETCONTACTS:
      return { ...state, contacts: action.payload.contacts };
    case GETONECONTACT:
      return { ...state, contact: action.payload.oneContact };
    default:
      return state;
  }
};
export default ContactReducer;

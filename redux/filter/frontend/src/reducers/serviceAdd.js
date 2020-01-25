import {CHANGE_SERVICE_FIELD, ADD_SERVICE, EDIT_SERVICE, CANCEL_SERVICE, UPDATE_SERVICE} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
      
      case ADD_SERVICE:
      case CANCEL_SERVICE: // added
      case UPDATE_SERVICE: {// added
        return {...initialState};
      }
      
      // added
      case EDIT_SERVICE: {
        const {id, name, price} = action.payload;
        return {...state, id, name, price};
      }
  
    default:
      return state;
  }
}

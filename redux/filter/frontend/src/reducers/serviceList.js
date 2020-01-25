import nanoid from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, UPDATE_SERVICE, FILTER_SERVICE, CANCEL_FILTER } from '../actions/actionTypes'

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];

    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter(service => service.id !== id);

    // added
    case UPDATE_SERVICE:
      const { service } = action.payload;
      return state.map(o => (o.id === service.id ? { ...service } : o));

    // filter added
    case FILTER_SERVICE:
      const { filter } = action.payload;
    // return state.filter(service => service.name.includes(filter));
    
    case CANCEL_FILTER:
      return state;

    default:
      return state;
  }
}

import { CHANGE_FILTER_FIELD, FILTER_SERVICE, CANCEL_FILTER } from '../actions/actionTypes'

const initialState = {
    filter: '',
};

export default function serviceFilterReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FILTER_FIELD:
            const { filter } = action.payload;
            return { filter };

        case FILTER_SERVICE:
            return { ...initialState };

        case CANCEL_FILTER:
            return { ...initialState };

        default:
            return state;
    }
}
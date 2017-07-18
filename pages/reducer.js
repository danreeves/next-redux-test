import { REQUEST_CATEGORY, RECEIVE_CATEGORY } from './actions';

export default categoryReducer;
function categoryReducer(
    state = {
        isFetching: false,
        category: {},
    },
    action
) {
    console.log(action);
    switch (action.type) {
        case REQUEST_CATEGORY:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_CATEGORY:
            return Object.assign({}, state, {
                isFetching: false,
                category: action.category,
            });
        default:
            return state;
    }
}

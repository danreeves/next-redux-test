import axios from 'axios';
// import getHost from '../../lib/getHost'

export const REQUEST_CATEGORY = 'REQUEST_CATEGORY';
function requestCategory(categoryId) {
    return {
        type: REQUEST_CATEGORY,
        categoryId,
    };
}

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
function receiveCategory(categoryId, data) {
    return {
        type: RECEIVE_CATEGORY,
        categoryId,
        category: data,
    };
}

export function fetchCategory(categoryId) {
    return function(dispatch) {
        dispatch(requestCategory(categoryId));
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve(
                    dispatch(receiveCategory(1, { id: 1, label: 'butts' }))
                );
            }, 1000);
        });
    };
}

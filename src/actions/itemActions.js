export const FETCH_ITEMS_BEGIN = "FETCH_ITEMS_BEGIN";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export const fetchItemsBegin = () => ({
  type: FETCH_ITEMS_BEGIN
});

export const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: { items }
});

export const fetchItemsFailure = error => ({
  type: FETCH_ITEMS_FAILURE,
  payload: { error }
});

export function fetchItems() {
  return dispatch => {
    dispatch(fetchItemsBegin());
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        dispatch(fetchItemsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchItemsFailure(error)));
  };
}

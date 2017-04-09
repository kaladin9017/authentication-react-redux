/*
  Basic Skeleton for future custom middleware
*/

export default function({ dispatch }) {
  return next => action => {
    /*
      If the action does not have a payload
      or the payload does not have a .then property
      send it on
    */
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload
      .then(function(response) {
        /*
          create a new action with the old type
          replace the promise with the response data
        */
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
  }
}

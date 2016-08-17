import * as types from '../actions/actionTypesConstants';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  // beacause we suffix our success actions with _SUCCESS
  // we can check against that to determine 
  // if the ajax call has ended and if it was successfull
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }


  return state;
}

import apiClient from './apiClient';
import { CALL_API } from '../../actions/actionTypes';

const api = (store) => (next) => (action) => {
  if (action.type !== CALL_API) {
    return next(action);
  }

  const { types, method, endpoint, data } = action;

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('INVALID API ACTION TYPES: ' +
    'Api Action must have `types` as an array of length 3');
  }

  if (typeof endpoint !== 'string') {
    throw new Error('INVALID API ENDPOINT: ' +
    'Api Action must have `endpoint` of type string')
  }

  const [ requestActionType, successActionType, errorActionType ] = types;

  const convertIntoNormalAction = data => {
    const normalAction = Object.assign({}, action, data);
    delete normalAction.types;
    return normalAction;
  };

  const config = { data, method };

  console.log('api middleware');
  console.log(convertIntoNormalAction({ type: requestActionType}));

  next(convertIntoNormalAction({ type: requestActionType }));

  return apiClient.request(endpoint, config).then(response => {
    console.log(response);
    next(convertIntoNormalAction({
      type: successActionType,
      data: { ...response.data },
    }));
  }).catch(error => {
    console.error(error);
    next(convertIntoNormalAction({
      type: errorActionType,
      error: error.message,
    }));
  });
};

export default api;

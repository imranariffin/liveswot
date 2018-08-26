import {
  INIT_APP,

  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,

  CALL_API,

  FETCH_SWOTS,
  FETCH_SWOTS_SUCCESS,
  FETCH_SWOTS_ERROR,
  CREATE_SWOT,
  CREATE_SWOT_SUCCESS,
  CREATE_SWOT_ERROR,
  UPDATE_SWOT,
  UPDATE_SWOT_SUCCESS,
  UPDATE_SWOT_ERROR,
  DELETE_SWOT,
  DELETE_SWOT_SUCCESS,
  DELETE_SWOT_ERROR,

  FETCH_SWOT_ITEMS,
  FETCH_SWOT_ITEMS_SUCCESS,
  FETCH_SWOT_ITEMS_ERROR,
  CREATE_SWOT_ITEM,
  CREATE_SWOT_ITEM_SUCCESS,
  CREATE_SWOT_ITEM_ERROR,
  UPDATE_SWOT_ITEM,
  UPDATE_SWOT_ITEM_SUCCESS,
  UPDATE_SWOT_ITEM_ERROR,
  DELETE_SWOT_ITEM,
  DELETE_SWOT_ITEM_SUCCESS,
  DELETE_SWOT_ITEM_ERROR,

  FETCH_VOTES,
  FETCH_VOTES_SUCCESS,
  FETCH_VOTES_ERROR,
  VOTE,
  VOTE_SUCCESS,
  VOTE_ERROR,

  LOAD_TOKEN,
  UPDATE_NEW_ITEM,
  CLEAR_NEW_ITEM,
  FETCH_MEMBERS,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_ERROR,
  ADD_MEMBER,
  ADD_MEMBER_SUCCESS,
  ADD_MEMBER_ERROR, CLEAR_ERROR,
} from './actionTypes';

export const InitApp = () => {
  return {type: INIT_APP};
};

export const Signup = (email, username, password) => {
  return {
    type: CALL_API,
    method: 'POST',
    endpoint: '/auth/signup',
    types: [SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR],
    data: {user: {email, username, password}},
  };
};

export const Login = (email, password) => {
  return {
    type: CALL_API,
    method: 'POST',
    endpoint: '/auth/login',
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_ERROR],
    data: {user: {email, password}},
  };
};

export const Logout = () => { return { type: LOGOUT, }; };

export const LogoutSuccess = (token) => {
  return {type: LOGOUT_SUCCESS, data: {token}};
};

export const LogoutError = () => { return { type: LOGOUT_ERROR, }; };

export const FetchSwots = () => {
  return {
    type: CALL_API,
    types: [FETCH_SWOTS, FETCH_SWOTS_SUCCESS, FETCH_SWOTS_ERROR],
    endpoint: `/swots/`,
  };
};

export const CreateSwot = (title, description) => {
  return {
    type: CALL_API,
    types: [CREATE_SWOT, CREATE_SWOT_SUCCESS, CREATE_SWOT_ERROR],
    endpoint: `/swots/`,
    method: 'POST',
    data: {title, description}
  };
};

export const UpdateSwot = (swotId, title, description) => {
  return {
    type: CALL_API,
    types: [UPDATE_SWOT, UPDATE_SWOT_SUCCESS, UPDATE_SWOT_ERROR],
    endpoint: `/swots/${swotId}/`,
    method: 'PUT',
    data: {title, description}
  };
};

export const DeleteSwot = (swotId) => {
  return {
    type: CALL_API,
    types: [DELETE_SWOT, DELETE_SWOT_SUCCESS, DELETE_SWOT_ERROR],
    endpoint: `/swots/${swotId}/`,
    method: 'DELETE',
  };
};

export const FetchSwotItems = (swotId) => {
  return {
    type: CALL_API,
    types: [FETCH_SWOT_ITEMS, FETCH_SWOT_ITEMS_SUCCESS, FETCH_SWOT_ITEMS_ERROR],
    endpoint: `/swots/${swotId}/items/`,
  };
};

export const CreateSwotItem = (swotId, text, cardType) => {
  return {
    type: CALL_API,
    types: [CREATE_SWOT_ITEM, CREATE_SWOT_ITEM_SUCCESS, CREATE_SWOT_ITEM_ERROR],
    method: 'POST',
    endpoint: `/swots/${swotId}/items/`,
    data: {text, cardType},
  };
};

export const UpdateSwotItem = (swotItemId, text, cardType) => {
  return {
    type: CALL_API,
    types: [UPDATE_SWOT_ITEM, UPDATE_SWOT_ITEM_SUCCESS, UPDATE_SWOT_ITEM_ERROR],
    method: 'PUT',
    endpoint: `/swots/items/${swotItemId}/`,
    data: {text, cardType},
  };
};

export const DeleteSwotItem = (swotItemId, text, cardType) => {
  return {
    type: CALL_API,
    types: [DELETE_SWOT_ITEM, DELETE_SWOT_ITEM_SUCCESS, DELETE_SWOT_ITEM_ERROR],
    method: 'DELETE',
    endpoint: `/swots/items/${swotItemId}/`,
  };
};

export const FetchVotes = (swotId) => {
  return {
    type: CALL_API,
    types: [FETCH_VOTES, FETCH_VOTES_SUCCESS, FETCH_VOTES_ERROR],
    endpoint: `/swots/${swotId}/items/votes/`,
  };
};

export const Vote = (swotItemId, voteType, userId) => {
  if (!swotItemId || !voteType || !userId) {
    throw new Error('(action) `Vote`: required args: `swotItemId`, `voteType` & `userId`');
  }

  if (!['up', 'down'].includes(voteType)) {
    throw new Error('(action) `Vote`: `voteType` arg must be either `up` or `down`');
  }

  return {
    type: CALL_API,
    types: [VOTE, VOTE_SUCCESS, VOTE_ERROR],
    method: 'POST',
    endpoint: `/swots/items/${swotItemId}/votes/`,
    data: {voteType, userId, swotItemId}
  };
};

export const UpdateNewItem = (text, cardType) => {
  return {type: UPDATE_NEW_ITEM, text, cardType};
};

export const ClearNewItem = (cardType) => {
  return {type: CLEAR_NEW_ITEM, cardType};
};

export const LoadToken = (token) => {
  return {type: LOAD_TOKEN, data: {token}};
};

export const FetchMembers = (swotId) => {
  return {
    type: CALL_API,
    types: [FETCH_MEMBERS, FETCH_MEMBERS_SUCCESS, FETCH_MEMBERS_ERROR],
    method: 'GET',
    endpoint: `/members/swots/${swotId}/`,
  };
};

export const AddMember = (swotId, userName) => {
  return {
    type: CALL_API,
    types: [ADD_MEMBER, ADD_MEMBER_SUCCESS, ADD_MEMBER_ERROR],
    method: 'POST',
    body: {},
    endpoint: `/members/${userName}/swots/${swotId}/`,
  };
};

export const ClearError = (errorType) => {
  return {
    type: CLEAR_ERROR,
    errorType,
  };
};
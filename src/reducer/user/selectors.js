import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.USER;


export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getUserEmail = (state) => {
  return state[NAME_SPACE].userEmail;
};

export const getLoadingStatus = (state) => {
  return state[NAME_SPACE].isLoading;
};



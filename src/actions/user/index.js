export const LOGIN_START = "LOGIN_START";

export const startLogin = (login, password) => ({ type: LOGIN_START, login, password });
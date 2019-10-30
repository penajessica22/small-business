import { connect } from "react-redux";
import jwt from 'jsonwebtoken'


export const login = ({userName, password}) => {
  return {
    type: "LOG_IN",
    value: ""
  };
};
export const removeCar = index => {
  return {
    type: "REMOVE_CAR",
    value: index
  };
};
import { combineReducers } from "@reduxjs/toolkit";
import { carritoReducer } from "./carritoReducer";

export const rootReducer = combineReducers({ carrito: carritoReducer });

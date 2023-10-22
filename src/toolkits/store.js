import { configureStore } from "@reduxjs/toolkit";
import crud from "./crud";

export const store=configureStore({
    reducer:{
        name:crud
    }
})
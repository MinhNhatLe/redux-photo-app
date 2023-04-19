import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "../features/Photo/photoSlice"

const rootReducer = {
    photos: photoReducer,
}

//sử dụng congifureStore để tạo re redux store nhanh hơn
const store = configureStore ({
    reducer: rootReducer,
});

export default store;
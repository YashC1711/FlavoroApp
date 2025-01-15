import {createSlice} from "@reduxjs/toolkit";
import CategoryMenu from "../../components/CategoryMenu";

const CategorySlice = createSlice({
    name : "Category",
    initialState : {
        category:"All",
    },
    reducers:{
        setCategory: (state,action) =>{
            state.category = action.payload;
        },
    },
});

export const {setCategory} = CategorySlice.actions;
export default CategorySlice.reducer
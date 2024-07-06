import {createSlice } from '@reduxjs/toolkit';

const STATUSES = {
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
}

// const addCardSlice = createSlice({

// })


const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE
    },
    reducers:{
        setProducts(state , action){
            state.data = action.payload; 
        },
        setStatus(state , action){
            state.status = action.payload; 
        }
    }
})

export const{setProducts , setStatus} = productSlice.actions;
export default productSlice.reducer;


export function fetchProducts() {
    return async function fetchProductThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await fetch('http://localhost:4000/all_product');
            const data =  await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (error) {
            console.error('Error fetching products:', error.message);
            dispatch(setStatus(STATUSES.ERROR));
        }

    }
    
}
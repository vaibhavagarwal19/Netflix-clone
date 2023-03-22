import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../features/userSlice'

const rootReducer = configureStore({

    reducer: {
        user: userReducer,
    }
});
    


export default rootReducer;



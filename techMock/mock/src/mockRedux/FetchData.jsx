//actions
const fetchUsersPending = () => ({type: 'FETCH_USERS_PENDING'});
const fetchUsersSuccess = (users) => ({type: 'FETCH_USERS_SUCCESS', payload: users});
const fetchUsersError = (error) => ({type: 'FETCH_USERS_ERROR', payload: error});

const fetchUsers = () => {
    return async(dispatch)=>{
        dispatch(fetchUsersPending());
        try{
            const res = await fetch('https://api.github.com/users');
            const users = await res.json();
            dispatch(fetchUsersSuccess(users));
        }catch(error){
            dispatch(fetchUsersError(error));
        }
    }
}
//Reducer
const initialState = {loading: false, users: [], error: null};
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_USERS_PENDING':
            return {...state, loading: true};
        case 'FETCH_USERS_SUCCESS':
            return {...state, loading: false, users: action.payload};
        case 'FETCH_USERS_ERROR':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};


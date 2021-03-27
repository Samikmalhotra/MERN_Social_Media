import { GET_PROFILE, GET_PROFILE_1,  GET_PROFILES, GET_REPOS, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE } from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
}

function profile(state = initialState, action){
    const {type,payload} = action;

    switch(type){
        case GET_PROFILE_1:
            return {
                ...state,
                profile: payload[0],
            }
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
            }
        case UPDATE_PROFILE:              
            return {...state,profile:payload,loading:false}
        case GET_PROFILES:
            return{
                ...state,
                profiles: payload,
                loading:false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case CLEAR_PROFILE:
                return{
                    ...state,
                    profile: null,
                    repos: [],
                    loading: false
                };
        case GET_REPOS:
            return{
                ...state,
                repos: payload,
                loading: false
            }
        default:
            return state;

    }
}
export default profile;
import userApi from "../../api/userApi"
import createSlice from "../../core/createSlice"
let user = JSON.parse(localStorage.getItem('login'))
let initalState = {
    login: !!user,
    user: user,
    error: null,
    loginerror: null,
    popupLogin: false
}
export function login(data) {
    return (dispatch) => {
        userApi.login(data)
            .then(res => {
                if (res.error) {
                    dispatch({ type: TYPE.error, payload: res.error })
                }
                else {
                    dispatch({ type: TYPE.login, payload: res.data })
                }
            })
    }

}

export function getUpdate(form) {
    return (dispatch) => {
        userApi.updateInfo(form)
            .then(res => {
                dispatch({ type: TYPE.updateinfor, payload: res.data })
            })
    }
}
let { action, reducer, TYPE } = createSlice({
    name: 'auth',
    initalState,
    reducers: {
        login: function (state, action) {
            let user = action.payload
            let token = action.payload.token
            localStorage.setItem('login', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(token))
            return {
                ...state,
                login: true,
                user

            }
        },
        logout: function (state, action) {
            localStorage.removeItem('login')
            localStorage.removeItem('token')
            return {
                ...state,
                login: false,
                user: null
            }
        },
        error: function (state, action) {
            return {
                ...state,
                error: action.payload
            }
        },
        popupLogin: function (state, action) {
            return {
                ...state,
                popupLogin: action.payload
            }

        },
        updateinfor: function (state, action) {
            return {
                ...state,
                user: action.payload.data
            }
        }
    }
})

export default reducer
export const userLogin = action.login
export const userLogout = action.logout
export const Popup = action.popupLogin
export const updateInfor = action.updateinfor
export const USER = TYPE

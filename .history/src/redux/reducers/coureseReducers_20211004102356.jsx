import courseApi from "../../api/courseApi"
import homeapi from "../../api/homeapi"
import createSlice from "../../core/createSlice"

const initalState = {
    Detail: [],
    Related: [],
    courses: [],
    count: 0
}
export function Coures() {
    return (dispatch) => {
        courseApi.courses()
            .then(res => {
                dispatch({ type: TYPE.course, payload: res })
            })
    }
}
export function Detail(slug) {
    return (dispatch) => {
        courseApi.detail(slug)
            .then(res => {
                dispatch({ type: TYPE.course, payload: res.data })
            })
    }
}
export function Related(slug) {
    return (dispatch) => {
        courseApi.related(slug)
            .then(res => {
                dispatch({ type: TYPE.course, payload: res.data })
            })
    }
}
export function Register(slug, data) {
    return (dispatch) => {
        courseApi.register(slug, data)
            .then(res => {
                if (res.error) {
                    dispatch({ type: TYPE.error, payload: res.error })
                } else {
                    dispatch({ type: TYPE.login, payload: res.data })
                }
            })
    }
}
let { action, reducer, TYPE } = createSlice({
    name: 'course',
    initalState,
    reducers: {
        course: function(state, action) {
            return {
                ...state,
                courses: action.payload,
                Detail: action.payload.data,
                Related: action.payload.data,

            }
        },
        incrementCout: function(state, action) {
            count++
            return {
                ...state,
                count
            }
        }



    }
})
export default reducer
export const count = action.incrementCout
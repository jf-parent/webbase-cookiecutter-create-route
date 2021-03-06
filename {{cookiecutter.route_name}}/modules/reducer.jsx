import axios from 'axios'

// ====================================
// Constants
// ====================================

export const LOADING = 'LOADING'
export const LOADED_SUCCESS = 'LOADED_SUCCESS'
export const LOADED_ERROR = 'LOADED_ERROR'

// ====================================
// Actions
// ====================================

export function doLoad (data) {
  return dispatch => {
    dispatch({type: LOADING})

    axios.post('/api/crud', data)
      .then((response) => {
        if (response.data.success) {
          dispatch(loadedSuccess(response.data))
        } else {
          dispatch(loadedError(response.data.error))
        }
      })
  }
}

function loadedSuccess (data) {
  return {
    type: LOADED_SUCCESS,
    data
  }
}

function loadedError (error) {
  return {
    type: LOADED_ERROR,
    error
  }
}

export const actions = {
  doLoad
}

// ====================================
// Reducers
// ====================================

const initialState = {
  error: null,
  loading: false,
  data: null
}

export default function {{cookiecutter.route_name|lower}} (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return Object.assign({},
        initialState,
        {
          loading: true
        }
      )

    case LOADED_SUCCESS:
      return Object.assign({},
        initialState,
        {
          data: action.data
        }
      )

    case LOADED_ERROR:
      return Object.assign({},
        initialState,
        {
          error: action.error
        }
      )

    default:
      return state
  }
}

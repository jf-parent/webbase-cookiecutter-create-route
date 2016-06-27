import axios from 'axios'

// ====================================
// Constants
// ====================================

export const DOING_SOMETHING = 'DOING_SOMETHING'
export const DO_SOMETHING_SUCCESS = 'DO_SOMETHING_SUCCESS'
export const DO_SOMETHING_ERROR = 'DO_SOMETHING_ERROR'

// ====================================
// Actions
// ====================================

const logger = require('loglevel').getLogger('{{cookiecutter.route_name|title}}')
logger.setLevel(__LOGLEVEL__)

export function doSomething (data) {
  return dispatch => {
    dispatch({type: DOING_SOMETHING})

    axios.post('/api/crud', data)
      .then((response) => {
        logger.debug('/api/crud (data) (response)', data, response)

        if (response.data.success) {
          dispatch(doSomethingSuccess(response.data))
        } else {
          dispatch(doSomethingError(response.error))
        }
      })
  }
}

function doSomethingSuccess (data) {
  return {
    type: DO_SOMETHING_SUCCESS
  }
}

function doSomethingError (error) {
  return {
    type: DO_SOMETHING_ERROR
  }
}

export const actions = {
  doSomething
}

// ====================================
// Reducers
// ====================================

const initialState = {
}

export default function profile (state = initialState, action) {
  switch (action.type) {
    case DOING_SOMETHING:
      return Object.assign({},
        initialState,
        {
        }
      )

    case DO_SOMETHING_SUCCESS:
      return Object.assign({},
        initialState,
        {
        }
      )

    case DO_SOMETHING_ERROR:
      return Object.assign({},
        initialState,
        {
        }
      )

    default:
      return state
  }
}


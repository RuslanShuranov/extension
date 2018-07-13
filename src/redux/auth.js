const authReducer = (state = { user: null }, action) => {
    switch (action.type) {
        case 'AUTH_USER_SET':
            state.user = action.payload
            break

        case 'AUTH_USER_DELETE':
            state.user = undefined
            break
    }

    return state
}

export default authReducer
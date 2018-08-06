const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_POSTS':
            state = action.payload
            break
    }

    return state
}

export default postsReducer
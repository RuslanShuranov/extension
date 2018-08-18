import {CHANGE_VISION} from '../actions/VisionAction';

const initialState = {
    myProp: false
};

export default function page(state = initialState, action) {

    switch (action.type) {

        case CHANGE_VISION:
            return {...state, myProp: action.payload};

        default:
            return state
    }
}
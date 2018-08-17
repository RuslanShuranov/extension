export function changeVision(myProp) {

    return {
        type: 'CHANGE_VISION',
        payload: !myProp
    }

}
export const CHANGE_VISION = 'CHANGE_VISION';

export function changeVision(myProp) {

    return {
        type: 'CHANGE_VISION',
        payload: !myProp
    }

}

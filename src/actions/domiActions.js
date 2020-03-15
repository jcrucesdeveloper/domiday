import {DRAG_TO_DOMI} from './types';

export const dragToDomi = (domiId,containerId) => {
    return{
        type: DRAG_TO_DOMI,
        domiId: domiId,
        containerId: containerId
    }
}
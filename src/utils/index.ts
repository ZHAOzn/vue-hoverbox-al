'use strict';

export default {
    isParents(obj: any, parentObj: any) {
        while (
            obj != undefined &&
            obj != null &&
            obj.tagName.toUpperCase() != "BODY" &&
            obj.tagName.toUpperCase() != "HTML"
        ) {
            if (obj == parentObj) {
                return true;
            }
            obj = obj.parentNode;
        }
        return false;
    }
}
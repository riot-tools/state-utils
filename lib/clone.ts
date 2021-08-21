import { MapType, TypeCloneFunc } from './types';
import {
    isNonIterable,
    _nextTick
} from './helpers';

const typeCloneFunc: MapType = new Map();

typeCloneFunc.set(Array, (a) => a.map((v: any) => clone(v)));

typeCloneFunc.set(Object, (a: Object) => {

    const copy: object = new Object;

    let key: keyof Object;
    for (key in a) {

        copy[key] = clone(a[key]);
    }

    return copy;
});

typeCloneFunc.set(Map, (a: Map<any, any>) => {

    const copy = new Map;

    for (const entry of a.entries()) {

        const [key, val] = entry;
        copy.set(key, clone(val));
    }

    return copy;
});

typeCloneFunc.set(Set, (a) => {

    const copy = new Set;

    for (const original in [...a.values()]) {

        const cloned = clone(original);
        copy.add(cloned);
    }

    return copy;
});

/**
 * Deep clones Objects, Arrays, Maps and Sets
 * @param original
 * @returns {any} Cloned value
 */
export const clone = (original: any): any => {

    // Primatives do not have issues with hoisting
    if (isNonIterable(original) || (original instanceof Date)) {
        return original;
    }

    const cloneType = typeCloneFunc.get(original.constructor);

    // Warn about using specific types that are not supported
    if (!cloneType) {
        _nextTick(() => console.warn(`Cannot clone ${original.constructor.name} type.`));
        return original;
    }

    return (cloneType as TypeCloneFunc)(original);
};


export default clone;

import { MapTypeMerge, TypeMergeFunc, TypeCloneFunc } from './types';
import {
    hasSameConstructor,
    isNonIterable,
    isNonObject,
    _nextTick
} from './helpers';

const typeMergeFunc: MapTypeMerge = new Map();

type MergeOptions = {
    mergeArrays?: Boolean;
    mergeSets?: Boolean;
};

const internals: { [k: string]: TypeMergeFunc } = {};

internals.mergeArrays = (current: Array<any>, incoming: Array<any>) => {

    for (const value of incoming) {
        current.push(value);
    }

    return current
};


internals.mergeSets = (current: Set<any>, incoming: Set<any>) => {

    for (const value of incoming) {

        if (!current.has(value)) {

            current.add(value);
        }
    }

    return current;
};


internals.overwriteArrays = (current: Array<any>, incoming: Array<any>) => {

    current.length = 0;

    for (const value of incoming) {
        current.push(value);
    }

    return current
};


internals.overwriteSets = (current: Set<any>, incoming: Set<any>) => {

    current.clear();

    for (const value of incoming) {

        current.add(value);
    }

    return current;
};


typeMergeFunc.set(Array, (current: Array<any>, incoming: Array<any>, options?: MergeOptions) => {

    if (options.mergeArrays) {

        return internals.mergeArrays(current, incoming);
    }

    return internals.overwriteArrays(current, incoming);
});

typeMergeFunc.set(Set, (current: Set<any>, incoming: Set<any>, options?: MergeOptions) => {

    if (options.mergeSets) {

        return internals.mergeSets(current, incoming);
    }

    return internals.overwriteSets(current, incoming);
});

typeMergeFunc.set(Object, (current: object, incoming: object, options?: MergeOptions) => {

    let key: string;

    for (key in incoming) {

        if (isNonObject(current[key]) || isNonObject(incoming[key])) {

            current[key] = incoming[key];
            continue;
        }

        if (hasSameConstructor(current[key], incoming[key])) {

            current[key] = merge(current[key], incoming[key], options);
            continue;
        }

        current[key] = incoming[key];
    }

    return current;
});

typeMergeFunc.set(Map, (current: Map<any, any>, incoming: Map<any, any>, options?: MergeOptions) => {

    for (const [key, bValue] of incoming.entries()) {

        if (!current.has(key)) {

            current.set(key, bValue);
            continue;
        }

        const aValue = current.get(key);

        if (isNonObject(aValue) || isNonObject(bValue)) {

            current.set(key, bValue);
            continue;
        }


        if (hasSameConstructor(bValue, aValue)) {

            current.set(key, merge(aValue, bValue, options));
            continue;
        }

        current.set(key, bValue);
    }

    return current;
});

/**
 * Deep merge Objects, Arrays, Maps and Sets
 * @param current
 * @param incoming
 * @returns {any} Merged value
 */
export const merge = (current: any, incoming: any, options: MergeOptions = {}): any => {

    options = Object.assign({
        mergeArrays: true,
        mergeSets: true
    }, options);

    // Primatives do not have issues with hoisting
    if (isNonIterable(incoming) || (incoming instanceof Date)) {
        return incoming;
    }

    if (hasSameConstructor(incoming, current)) {

        const mergeType = typeMergeFunc.get(current.constructor);

        // Warn about using specific types that are not supported
        if (!mergeType) {
            _nextTick(() => console.warn(`Cannot merge ${current.constructor.name} type.`));
            return current;
        }

        return (mergeType as TypeMergeFunc)(current, incoming, options);
    }

    return incoming;
};



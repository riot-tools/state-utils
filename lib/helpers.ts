/**
 * Checks if value is non-iterable:
 * null, undefined, String, Number, Boolean, Symbol
 * @param val
 * @returns {boolean}
 */
export const isNonIterable = (val: any): boolean => (
    val === null ||
    val === undefined ||
    val.constructor === String ||
    val.constructor === Number ||
    val.constructor === Boolean ||
    val.constructor === Symbol
);

/**
 * Checks if value is a type that does not
 * have a constructor
 * @param val
 * @returns {boolean}
 */
export const isNonObject = (val: any): boolean => (
    val === null ||
    val === undefined
);

/**
 * Checks if either value is non iterable
 * @param value
 * @param compare
 * @returns {boolean}
 */
export const oneIsNonIterable = (value: any, compare: any): boolean => (
    isNonIterable(value) || isNonIterable(compare)
);

/**
 * Checks if both values have the same constructor
 * @param value
 * @param compare
 * @returns {boolean}
 */
export const hasSameConstructor = (value: any, compare: any): boolean => (
    value.constructor === compare.constructor
);

/**
 * Checks if both values are the length (or size). Values can be any iterable with
 * the property `length` or `size`.
 * @param a
 * @param b
 * @returns {boolean}
 */
export const isSameLength = (a: any, b: any): boolean => (
    a.length === b.length &&
    a.size === b.size
);

/**
 * Checks if value is instance of a function
 * @param a
 * @returns {boolean}
 */
export const isFunction = (a: any) => a instanceof Function;

/**
 * Performs a for-in loop that breaks the instance `check` function returns false.
 * Used to check that a value is in another item.
 * @param {Object|Array} item an object or array
 * @param {Function} check function to perform the check
 * @returns {boolean}
 */
export const forInIsEqual = (item: any, check: { (v: any, i: number|string): boolean}): boolean => {

    let isEqual;

    for (const i in item) {

        isEqual = check(item[i], i);

        if (isEqual === false) {
            break;
        }
    }

    return isEqual;
};

/**
 * Performs a for-of loop that breaks the instance `check` function returns false.
 * Used to check that a value is in another item.
 * @param {Array|Set|Map} item an array, set or map
 * @param {Function} check function to perform the check
 * @returns {boolean}
 */
export const forOfIsEqual = (item: any, check: { (v: any): boolean }): boolean => {

    let isEqual;

    for (const val of item) {

        isEqual = check(val);

        if (isEqual === false) {
            break;
        }
    }

    return isEqual;
};


/** Next tick but in the browser */
const nextTickQueue = [];

window.addEventListener('message', function (ev) {

    const source = ev.source;

    if (
        (
            source === window ||
            source === null
        ) &&
        ev.data === 'process-tick'
    ) {

        ev.stopPropagation();

        if (nextTickQueue.length > 0) {

            const fn = nextTickQueue.shift();
            fn.call && fn();
        }
    }
}, true);

/**
 * Browser implementation of `process.nextTick`
 * @param {function} fn
 */
export const _nextTick = (fn) => {

    nextTickQueue.push(fn);
    window.postMessage('process-tick', '*');
};

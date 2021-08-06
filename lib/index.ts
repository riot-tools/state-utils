import * as DeepEqual from './deep-equal';

import * as Clone from './clone';

import * as Helpers from './helpers';

export * from './types';

export const addConstructorCheck = DeepEqual.addConstructorCheck
export const deepEqual = DeepEqual.deepEqual

export const clone = Clone.clone;

export const isNonIterable = Helpers.isNonIterable;
export const oneIsNonIterable = Helpers.oneIsNonIterable;
export const hasSameConstructor = Helpers.hasSameConstructor;
export const isSameLength = Helpers.isSameLength;
export const isFunction = Helpers.isFunction;
export const forInIsEqual = Helpers.forInIsEqual;
export const forOfIsEqual = Helpers.forOfIsEqual;
export const _nextTick = Helpers._nextTick;
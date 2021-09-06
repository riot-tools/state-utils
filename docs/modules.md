[@riot-tools/state-utils](README.md) / Exports

# @riot-tools/state-utils

## Table of contents

### Interfaces

- [DeepEqualFunc](interfaces/DeepEqualFunc.md)
- [TypeCloneFunc](interfaces/TypeCloneFunc.md)
- [TypeMergeFunc](interfaces/TypeMergeFunc.md)

### Type aliases

- [AnyConstructor](modules.md#anyconstructor)
- [ConstructorCheckOptions](modules.md#constructorcheckoptions)
- [MapType](modules.md#maptype)
- [MapTypeMerge](modules.md#maptypemerge)

### Functions

- [\_nextTick](modules.md#_nexttick)
- [addConstructorCheck](modules.md#addconstructorcheck)
- [clone](modules.md#clone)
- [deepEqual](modules.md#deepequal)
- [forInIsEqual](modules.md#forinisequal)
- [forOfIsEqual](modules.md#forofisequal)
- [hasSameConstructor](modules.md#hassameconstructor)
- [isFunction](modules.md#isfunction)
- [isNonIterable](modules.md#isnoniterable)
- [isNonObject](modules.md#isnonobject)
- [isSameLength](modules.md#issamelength)
- [merge](modules.md#merge)
- [oneIsNonIterable](modules.md#oneisnoniterable)

## Type aliases

### AnyConstructor

Ƭ **AnyConstructor**: `ArrayConstructor` \| `ObjectConstructor` \| `MapConstructor` \| `SetConstructor` \| `DateConstructor` \| `RegExpConstructor` \| `FunctionConstructor`

#### Defined in

[types.ts:2](https://github.com/riot-tools/state-utils/blob/1799034/lib/types.ts#L2)

___

### ConstructorCheckOptions

Ƭ **ConstructorCheckOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `constructor` | `any` |
| `deepEqualFunc?` | [`DeepEqualFunc`](interfaces/DeepEqualFunc.md) |
| `treatAs?` | [`AnyConstructor`](modules.md#anyconstructor) |

#### Defined in

[types.ts:35](https://github.com/riot-tools/state-utils/blob/1799034/lib/types.ts#L35)

___

### MapType

Ƭ **MapType**: `Map`<[`AnyConstructor`](modules.md#anyconstructor), [`DeepEqualFunc`](interfaces/DeepEqualFunc.md) \| [`TypeCloneFunc`](interfaces/TypeCloneFunc.md)\>

#### Defined in

[types.ts:20](https://github.com/riot-tools/state-utils/blob/1799034/lib/types.ts#L20)

___

### MapTypeMerge

Ƭ **MapTypeMerge**: `Map`<[`AnyConstructor`](modules.md#anyconstructor), [`TypeMergeFunc`](interfaces/TypeMergeFunc.md)\>

#### Defined in

[types.ts:30](https://github.com/riot-tools/state-utils/blob/1799034/lib/types.ts#L30)

## Functions

### \_nextTick

▸ `Const` **_nextTick**(`fn`): `void`

Browser implementation of `process.nextTick`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `any` |

#### Returns

`void`

#### Defined in

[helpers.ts:142](https://github.com/riot-tools/state-utils/blob/1799034/lib/helpers.ts#L142)

___

### addConstructorCheck

▸ `Const` **addConstructorCheck**(`opts`): `void`

Add special constructor checks. You can treat as an existing
supported js constructor or make your own deepEqual function.

**`example`**

addConstructorCheck({
     constructor: Triangle,
     treatAs: Object
})

addConstructorCheck({
     constructor: Triangle,
     deepEqualFunc: (a, b) => a.hypotenuse !== b.hypotenuse
})

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ConstructorCheckOptions`](modules.md#constructorcheckoptions) |

#### Returns

`void`

#### Defined in

[deep-equal.ts:98](https://github.com/riot-tools/state-utils/blob/1799034/lib/deep-equal.ts#L98)

___

### clone

▸ `Const` **clone**(`original`): `any`

Deep clones Objects, Arrays, Maps and Sets

#### Parameters

| Name | Type |
| :------ | :------ |
| `original` | `any` |

#### Returns

`any`

Cloned value

#### Defined in

[clone.ts:55](https://github.com/riot-tools/state-utils/blob/1799034/lib/clone.ts#L55)

___

### deepEqual

▸ `Const` **deepEqual**(`change`, `current`): `boolean`

Recursively checks if there are changes in the current structure.
Returns immediately after detecting a single change.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `change` | `any` | changed item |
| `current` | `any` | current item |

#### Returns

`boolean`

#### Defined in

[deep-equal.ts:147](https://github.com/riot-tools/state-utils/blob/1799034/lib/deep-equal.ts#L147)

___

### forInIsEqual

▸ `Const` **forInIsEqual**(`item`, `check`): `boolean`

Performs a for-in loop that breaks the instance `check` function returns false.
Used to check that a value is in another item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | an object or array |
| `check` | (`v`: `any`, `i`: `string` \| `number`) => `boolean` | function to perform the check |

#### Returns

`boolean`

#### Defined in

[helpers.ts:73](https://github.com/riot-tools/state-utils/blob/1799034/lib/helpers.ts#L73)

___

### forOfIsEqual

▸ `Const` **forOfIsEqual**(`item`, `check`): `boolean`

Performs a for-of loop that breaks the instance `check` function returns false.
Used to check that a value is in another item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | an array, set or map |
| `check` | (`v`: `any`) => `boolean` | function to perform the check |

#### Returns

`boolean`

#### Defined in

[helpers.ts:96](https://github.com/riot-tools/state-utils/blob/1799034/lib/helpers.ts#L96)

___

### hasSameConstructor

▸ `Const` **hasSameConstructor**(`value`, `compare`): `boolean`

Checks if both values have the same constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `compare` | `any` |

#### Returns

`boolean`

#### Defined in

[helpers.ts:43](https://github.com/riot-tools/state-utils/blob/1799034/lib/helpers.ts#L43)

___

### isFunction

▸ `Const` **isFunction**(`a`): `boolean`

Checks if value is instance of a function

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`boolean`

#### Defined in

[helpers.ts:64](https://github.com/riot-tools/state-utils/blob/1799034/lib/helpers.ts#L64)

___

### isNonIterable

▸ `Const` **isNonIterable**(`val`): `boolean`

Checks if value is non-iterable:
null, undefined, String, Number, Boolean, Symbol

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

#### Defined in

[helpers.ts:7](https://github.com/riot-tools/state-utils/blob/1799034/lib/helpers.ts#L7)

___

### isNonObject

▸ `Const` **isNonObject**(`val`): `boolean`

Checks if value is a type that does not
have a constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

#### Defined in

[helpers.ts:22](https://github.com/riot-tools/state-utils/blob/1799034/lib/helpers.ts#L22)

___

### isSameLength

▸ `Const` **isSameLength**(`a`, `b`): `boolean`

Checks if both values are the length (or size). Values can be any iterable with
the property `length` or `size`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

#### Returns

`boolean`

#### Defined in

[helpers.ts:54](https://github.com/riot-tools/state-utils/blob/1799034/lib/helpers.ts#L54)

___

### merge

▸ `Const` **merge**(`current`, `incoming`, `options?`): `any`

Deep merge Objects, Arrays, Maps and Sets

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | `any` |
| `incoming` | `any` |
| `options` | `MergeOptions` |

#### Returns

`any`

Merged value

#### Defined in

[merge.ts:148](https://github.com/riot-tools/state-utils/blob/1799034/lib/merge.ts#L148)

___

### oneIsNonIterable

▸ `Const` **oneIsNonIterable**(`value`, `compare`): `boolean`

Checks if either value is non iterable

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `compare` | `any` |

#### Returns

`boolean`

#### Defined in

[helpers.ts:33](https://github.com/riot-tools/state-utils/blob/1799034/lib/helpers.ts#L33)

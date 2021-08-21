## Constants

<dl>
<dt><a href="#clone">clone</a> ⇒ <code>any</code></dt>
<dd><p>Deep clones Objects, Arrays, Maps and Sets</p>
</dd>
<dt><a href="#addConstructorCheck">addConstructorCheck</a></dt>
<dd><p>Add special constructor checks. You can treat as an existing
supported js constructor or make your own deepEqual function.</p>
</dd>
<dt><a href="#deepEqual">deepEqual</a></dt>
<dd><p>Recursively checks if there are changes in the current structure.
Returns immediately after detecting a single change.</p>
</dd>
<dt><a href="#isNonIterable">isNonIterable</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if value is non-iterable:
null, undefined, String, Number, Boolean, Symbol</p>
</dd>
<dt><a href="#oneIsNonIterable">oneIsNonIterable</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if either value is non iterable</p>
</dd>
<dt><a href="#hasSameConstructor">hasSameConstructor</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if both values have the same constructor</p>
</dd>
<dt><a href="#isSameLength">isSameLength</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if both values are the length (or size). Values can be any iterable with
the property <code>length</code> or <code>size</code>.</p>
</dd>
<dt><a href="#isFunction">isFunction</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if value is instance of a function</p>
</dd>
<dt><a href="#forInIsEqual">forInIsEqual</a> ⇒ <code>boolean</code></dt>
<dd><p>Performs a for-in loop that breaks the instance <code>check</code> function returns false.
Used to check that a value is in another item.</p>
</dd>
<dt><a href="#forOfIsEqual">forOfIsEqual</a> ⇒ <code>boolean</code></dt>
<dd><p>Performs a for-of loop that breaks the instance <code>check</code> function returns false.
Used to check that a value is in another item.</p>
</dd>
<dt><a href="#_nextTick">_nextTick</a></dt>
<dd><p>Browser implementation of <code>process.nextTick</code></p>
</dd>
</dl>

<a name="clone"></a>

## clone ⇒ <code>any</code>
Deep clones Objects, Arrays, Maps and Sets

**Kind**: global constant
**Returns**: <code>any</code> - Cloned value

| Param    |
| -------- |
| original |

<a name="addConstructorCheck"></a>

## addConstructorCheck
Add special constructor checks. You can treat as an existing
supported js constructor or make your own deepEqual function.

**Kind**: global constant

| Param |
| ----- |
| opts  |

**Example**
```js
addConstructorCheck({
     constructor: Triangle,
     treatAs: Object
})

addConstructorCheck({
     constructor: Triangle,
     deepEqualFunc: (a, b) => a.hypotenuse !== b.hypotenuse
})
```
<a name="deepEqual"></a>

## deepEqual
Recursively checks if there are changes in the current structure.
Returns immediately after detecting a single change.

**Kind**: global constant

| Param   | Description  |
| ------- | ------------ |
| change  | changed item |
| current | current item |

<a name="isNonIterable"></a>

## isNonIterable ⇒ <code>boolean</code>
Checks if value is non-iterable:
null, undefined, String, Number, Boolean, Symbol

**Kind**: global constant

| Param |
| ----- |
| val   |

<a name="oneIsNonIterable"></a>

## oneIsNonIterable ⇒ <code>boolean</code>
Checks if either value is non iterable

**Kind**: global constant

| Param   |
| ------- |
| value   |
| compare |

<a name="hasSameConstructor"></a>

## hasSameConstructor ⇒ <code>boolean</code>
Checks if both values have the same constructor

**Kind**: global constant

| Param   |
| ------- |
| value   |
| compare |

<a name="isSameLength"></a>

## isSameLength ⇒ <code>boolean</code>
Checks if both values are the length (or size). Values can be any iterable with
the property `length` or `size`.

**Kind**: global constant

| Param |
| ----- |
| a     |
| b     |

<a name="isFunction"></a>

## isFunction ⇒ <code>boolean</code>
Checks if value is instance of a function

**Kind**: global constant

| Param |
| ----- |
| a     |

<a name="forInIsEqual"></a>

## forInIsEqual ⇒ <code>boolean</code>
Performs a for-in loop that breaks the instance `check` function returns false.
Used to check that a value is in another item.

**Kind**: global constant

| Param | Type                                      | Description                                                            |
| ----- | ----------------------------------------- | ---------------------------------------------------------------------- |
| item  | <code>Object</code> \| <code>Array</code> | an object or array                                                     |
| check | <code>function</code>                     | function to perform the check with signature `(val, index) => boolean` |

<a name="forOfIsEqual"></a>

## forOfIsEqual ⇒ <code>boolean</code>
Performs a for-of loop that breaks the instance `check` function returns false.
Used to check that a value is in another item.

**Kind**: global constant

| Param | Type                                                       | Description                                                     |
| ----- | ---------------------------------------------------------- | --------------------------------------------------------------- |
| item  | <code>Array</code> \| <code>Set</code> \| <code>Map</code> | an array, set or map                                            |
| check | <code>function</code>                                      | function to perform the check with signature `(val) => boolean` |

<a name="_nextTick"></a>

## \_nextTick
Browser implementation of `process.nextTick`

**Kind**: global constant

| Param | Type                  |
| ----- | --------------------- |
| fn    | <code>function</code> |

Done in 0.23s.

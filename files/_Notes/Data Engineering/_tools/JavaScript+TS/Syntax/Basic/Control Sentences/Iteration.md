
Tag: #control-sentence 

### `while`

```js
let i = 0;
while (i < 4) {
    i++;
}
```

### `do-while`

```js
let i = 0;
do {
    i++;
} while (i < 2);
```

### `for`

```js
for (i = 2; i < 4; i++) {
    console.log(i);
}
/* output
	2
	3
*/
```

### `for-of`: para Array, Set, Map, String

```js
let animals = ["dog","cat"]
for (let animal of animals) {
    console.log(animal) // object
}
/* output
	dog
	cat
*/
```

### `for-in`

```js
let animals = ["dog","cat"]
for (let animal in animals) {
    console.log(animal) // index
}
/* output
	0
	1
*/
```
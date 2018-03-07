# collatz-fun


The [Collatz conjecture] is neat.  This is an unoptomized way to explore it.


## Install

```bash
yarn add collatz-fun
```


## API

### next(num)

Returns the number after `num` in the sequence or `null` if terminated.

```js
import collatz from 'collatz-fun'

collatz.next(6) // 3
collatz.next(3) // 10
collatz.next(1) // null
```


### sequence(num[, max = 100])

Returns the sequence starting with `num` up to `max` iterations.

```js
import collatz from 'collatz-fun'

collatz.sequence(7)
// [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, null]

collatz.sequence(7, 5)
// [7, 22, 11, 34, 17 ]
```


### info(num[, max = 100])

Returns summary info about the sequence starting with `num`.


```js
import collatz from 'collatz-fun'

collatz.info(27, 150)

// returns
{
  finished: true, // sequence terminated
  steps: 111, // count of steps
  max: 9232,  // max
  odds: 42,  // count of odds
  evens: 71,  // count of evens
  sequence: [27, 82, ... 2, 1, null],  // sequence up to max steps
}

```












---
kickstarted by [npm-boom][npm-boom]

[npm-boom]: https://github.com/reergymerej/npm-boom
[Collatz conjecture]: https://en.wikipedia.org/wiki/Collatz_conjecture

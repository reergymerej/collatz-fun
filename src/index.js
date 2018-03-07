const isEven = num => (num % 2) === 0

const next = (num) => {
  if (num === 1) {
    return null
  }
  return isEven(num)
    ? (num / 2)
    : (num * 3) + 1
}

const sequence = (current, max = 100) => {
  let nums = [current]
  let nextNum
  while (nextNum !== null && nums.length < max) {
    nextNum = next(current)
    nums.push(nextNum)
    current = nextNum
  }

  return nums
}

const info = (num, max) => {
  const seq = sequence(num, max)
  const finished = seq[seq.length - 1] === null
  let odds = 0
  let evens = 0
  seq.forEach(num => {
    if (isEven(num)) {
      evens += 1
    } else {
      odds += 1
    }
  })
  return {
    steps: seq.length - 2,
    finished,
    max: Math.max(...seq),
    min: finished ? 1 : Math.min(...seq),
    odds,
    evens,
    sequence: seq,
  }
}

export default {
  next,
  sequence,
  info,
}

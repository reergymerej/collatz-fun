import collatz from './index'

describe('next', () => {
  it('should /2 if even', () => {
    expect(collatz.next(6)).toBe(3)
  })

  it('should *3 + 1 if odd', () => {
    expect(collatz.next(3)).toBe(10)
  })

  it('should return null for 1', () => {
    expect(collatz.next(1)).toBe(null)
  })
})

describe('sequence', () => {
  it('should return fewer than max items', () => {
    const result = collatz.sequence(7, 5)
    expect(result).toEqual([
      7, 22, 11, 34, 17,
    ])
  })

  it('should list the sequence', () => {
    const result = collatz.sequence(7)
    expect(result).toEqual([
      7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, null
    ])
  })
})

describe('info', () => {
  it('should return as expected when finished', () => {
    expect(collatz.info(7)).toMatchObject({
      finished: true,
      steps: 16,
      max: 52,
      min: 1,
      odds: 6,
      evens: 12,
    })
  })

  it('should return as expected when not finished', () => {
    expect(collatz.info(7, 5)).toMatchObject({
      finished: false,
      steps: 3,
      max: 34,
      min: 7,
    })
  })

  it('should work really well', () => {
    expect(collatz.info(27, 150)).toMatchObject({
      finished: true,
      steps: 111,
      max: 9232,
      odds: 42,
      evens: 71,
    })
  })
})

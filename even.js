const isEven = (num) => {
    if (num % 2 == 0) {
          return true
    }
    else {
    return false
    }
  }
  console.log(isEven(73)) // => false
  console.log(isEven(0)) // => true
  console.log(isEven(16)) // => true

  test('test if the number even', () => {
      expect(isEven(73)).toBe(false);
    });

    test('test if the number even', () => {
      expect(isEven(0)).toBe(true);
    });

    test('test if the number even', () => {
      expect(isEven(16)).toBe(true);
    });
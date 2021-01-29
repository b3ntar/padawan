const add = (a) => {
    return (a - 32) / 1.8
    //℃ = (℉ - 32) / 1.8
}

const result = add(100.4) 
console.log(result)


test('test checking to celsius ', () => {
    expect(console.log).toBe(38);
  });

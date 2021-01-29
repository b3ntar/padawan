function Stairs(n) {
    for (let i = 1; i <= n; i++) {
      let empty = ' '.repeat(n - i);
      let stair = '#'.repeat(i * 2 - 1)
      console.log(stair + empty + empty) 
  }
  Stairs(4);
  console.log('Stairs to Hell JK MY MAN')

function factorialize(num) {
  let facto = 1;
  for(let i = 1; i<=num; i++){
      facto *= i 
  }
  return facto;
}

console.log(factorialize(10));

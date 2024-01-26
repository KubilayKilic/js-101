function calcFibo(n) {

  let fiboArr = [0,1];

  for (let i = 2; i <= n; i++) {
    
    let newElement = fiboArr[i-1] + fiboArr[i-2];
    
    fiboArr.push(newElement);
  }
  
  return fiboArr;
}

let result = calcFibo(10)
console.log(result);
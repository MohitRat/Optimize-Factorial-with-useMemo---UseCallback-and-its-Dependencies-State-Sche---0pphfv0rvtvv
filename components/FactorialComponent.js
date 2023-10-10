import { memo } from "react";


function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
 function FactorialComponent({factNum}) {
  const fact=factorial(factNum)


  return <div className='result'>The factorial of {factNum} is {fact}</div>;
}
export default memo(FactorialComponent)



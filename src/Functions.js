/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */

export function higherThan(num){

    function isBigEnough(value) {
    return value>num
    }
    return isBigEnough
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
  function isBigEnough(value) {
  return value.includes(substr)
  }
  return isBigEnough
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
 export function multiply(num) {
   function isBigEnough(value) {
   return num * value
   }
   return isBigEnough
 }

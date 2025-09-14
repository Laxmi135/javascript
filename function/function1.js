function mynme(){
    console.log("l");
    console.log("a");
    console.log("x");
    console.log("m");
    console.log("i");
    
}
// mynme()
// function add(num1,num2){
//     console.log(num1+num2);
    
// }
// add(3,5)
function add(num1,num2){
    // let result = num1 + num2;
    // return result
    return num1+num2
    
}
let result=add(3,5)
// console.log("result:",result);


 function loginusermessage(username){
  return `${username}  just logged in`
 }
// console.log(loginusermessage("laxmi"));


function calculatecartprice(num1){
    return num1
}
// console.log(calculatecartprice(2));

 const user ={

    username:"Laxmi",
    price:500
 }
	function handleobject(anyobject){
        console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
        
    }
    handleobject(user)
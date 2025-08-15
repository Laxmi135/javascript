// two type of memory 1)stack(primitive) 2)heap(non primitive)
let myname = "laxmi";
let anothername = myname;
 anothername = "riya";
console.log(anothername);
console.log(myname);

let userone = {
    email: "laxmi@123",
    upi:"user@1",
}

let usertwo = userone
usertwo.email = "pm@123"
console.log(userone.email);
console.log(usertwo.email);





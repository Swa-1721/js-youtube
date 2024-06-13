 // Data Types  1.Primitive  2.non-Primitive
 
 



//  memory alocation 

// 1.stack (Primitive data type)
// 2.Heap (Non-Primitive data type)


// stack memory allocation  primitive data types aloocatoed in stack memory 
let myYoutubeName="swa";
let anotherName=myYoutubeName;

anotherName="swap"; 

console.log(anotherName);   // here its not going to chnage orignal value of myYoutubeName as its just gating copy of that variable 

console.log(myYoutubeName);  



// heap memory allocation  non-primitive data type such as  objest are alocated in heap 
let userOne={

    email:"swap@google.com",
    upi:"swap@ybl"
}

let userTwo = userOne;

userTwo.email="swa@google.com" // here its changes ther orriginal vlaue here its getting same reference 

console.log(userOne.email);
console.log(userTwo.email);

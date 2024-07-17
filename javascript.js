// // promise
// const promise = new Promise((res, rej) => {
//     document.getElementById("myBtn").addEventListener("click", ()=>{
//         res("good");
//     })
//     document.getElementById("myBtn1").addEventListener("click", ()=>{
//         rej("called");
//     })
    
// })

// promise.then(res => console.log(res))
// .catch(err => console.log(err));

// // promise without new promise
// async function fun(name){
//      await promise
//      return name
   
// }

// const res =await fun("rifna");
// console.log(res);

// // Object literal
// let person = {
//     name: "Happy",
//     hobbies : ["eating", "Coding", "sleeping"],
//     greet: function(){
//         console.log("hello"+ this.name);
//     }
// }

// // Object contructor
// let person1 = new Object();
// person1.name="yasar"

// // shallow copy
// const  person2 = {...person}

// // Reverse a Str


// var v = false;
// v= true
// if(v){
//     function foo(){
//         console.log('hi A');
//     }
// }else{
//     function foo(){
//         console.log('hi B');
//     }
// }
// v= false;
// foo();

// event propogation
// document.getElementById('parent').addEventListener("click", ()=>alert("Parent clicked"), true);
// document.getElementById('child').addEventListener("click", ()=> alert("child clicked"));
// document.getElementById('grandchild').addEventListener("click", ()=> alert("grandchild clicked"));

/* capture Phase: The true parameter in addEventListener sets the event listener for the capturing phase. If you click on the grandchild element, the console will log "Parent clicked" first due to capturing.

Bubbling Phase: If you click on the grandchild element, after the capturing phase, the console will log "Grandchild clicked" (target phase) and then "Child clicked" and "Parent clicked" due to bubbling. */

// document.getElementById('parent').addEventListener("click", (e)=>{
//     alert(e.target.id);
// });

// event bubbling
document.getElementById('parent').addEventListener("click", ()=>alert("Parent clicked"));
document.getElementById('child').addEventListener("click", ()=> alert("child clicked"));
document.getElementById('grandchild').addEventListener("click", ()=>{
    alert("grandchild clicked")
    event.stopPropagation()
});
// event.stopPropagation(); - to manage event bubbling

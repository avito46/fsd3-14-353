/*const f1=()=>{
    console.log(f1)
}
const f2=()=>{
    console.log(f2)
}
const f3=()=>{
    console.log(f3)
}
function main(){
    console.log("main")
    f1()
    f2()
    f3()
    console.log("end main")
}
main()*/



//function by stack where f3 enters at last that is why it is called first
//javascript is single and synchronous threaded (single threaded-> ek baar mei ek hi kaam kar sakta hai)
//in asynchronous we use we use event loop to manage the call stack
/* types of asynchronous calls 
    1)set time-out 2)set immediate 3)process.next Tick 4) set internal*/
const f1 = () => {
  console.log("f1 starts");
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 starts");
  f3();
  console.log("f2 running");
  console.log("f2 ends");
};
const f3 = () => {
  console.log("f3 starts");
  console.log("f3 running");
  console.log("f3 end");
};
function main() {
  console.log("main");
  f1();
  console.log("end main");
}
main();

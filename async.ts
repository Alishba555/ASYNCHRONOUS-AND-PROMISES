//       Q#1               //
//Write a simple asynchronous TypeScript function fetchGreeting that returns a
//greeting message after a 2-second delay using setTimeout.
function fetchGreeting(){
    setTimeout(() =>{
        console.log("Hello Viwers");
    }, 20000);
}
fetchGreeting();
//       Q#2              //
//write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task complete". use setTimeout for the delay.
function simulateTask() {
    console.log("Task started");
    setTimeout(()=>{
        console.log("Task complete");
    }, 1000)
}
simulateTask();
//       Q#3            //
//Write a function febtchData that returns a promisw which resolve with the string
//"Data fetched successfully" aftera delay of 1 second.
function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("Data fetched successly");
        }, 1000);
    });
}
fetchData().then ((result)=>{
    console.log(result);
});
//         Q#4          //
//Write a function fetchWithError that returns a promise.It should randmoly either 
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a 
// delay of 1 second . Handle the rejection using . catch
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!"), 1000;
        });
        reject("Data fetch failed!");
    } );  
}
        fetchWithError() 
        .then((result) =>{
            console.log(result);
        })
        .catch((error)=> {
            console.log(error);
});
//          Q#5        //
//write a function executeSequentially that executes two functions fetchData and 
//processData sequentially using promises, and logs the results in the oder they are 
// called.
function fetchData1(){
    return new Promise((resolve ,reject) => {
     resolve("Assignment completed!");
    });    
}
function processData(){
    return new Promise((resolve, reject) => {
        reject("Assignment not completed");
    });
}
function executeSequentially(){
    fetchData1().then((result) => {
        console.log(result);
        processData().catch((error) =>{
            console.log(error);
        });
});   
}
executeSequentially();
        





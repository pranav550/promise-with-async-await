// let promise = new Promise((resolve, reject)=>{
//     resolve('Data Received')
// })



// async function getData(){
//     let response = await promise;
//     console.log(response)
// }

// getData()

let dell = {
    brand:'Dell',
    hardisk:'2 TB',
    color:'black '
}

let buylaptop= new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(dell)
    },3000)
})

let buylaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())

let result1 =   document.getElementById('result1');
let result2 =   document.getElementById('result2');
let result3 =   document.getElementById('result3');
  // ex 01  promise
function fetch1(){
    console.log("fet")
    result1.innerText = 'Fetching Data....';

    buylaptop.then(res=>{
        console.log(res)
        result1.innerText = JSON.stringify(res)
    })
}

 // ex 02 async/await

 async function fetch2(){
    console.log("fet")
    result2.innerText = 'Fetching Data....';

    let data = await buylaptop
    console.log(data)
    result2.innerText = JSON.stringify(data)
}

// fetch api with promise and async await


// promise
 function fetch3(){
    console.log("fet")
    result3.innerText = 'Fetching Data....';
   buylaptop2.then((res)=>{
       console.log(res)
       result3.innerText = JSON.stringify(res)
   })
}
// async awit
 async function fetch3(){
    console.log("fet")
    result3.innerText = 'Fetching Data....';
  let result = await buylaptop2 
  console.log(result)
  result3.innerText = JSON.stringify(result)
}
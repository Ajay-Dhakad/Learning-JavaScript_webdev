let a = new Promise((resolve,reject) =>{

setTimeout(() => {

    resolve('resolved')

    


},4000)

})


let newp = a.then(resoved => {

    console.log(resoved)

    //  let b new Promise((resolve, reject) => {
    //     setTimeout(()=>{
    //         resolve('resolved 2')
    // },2000)
    
      

}).then(()=>{

    setTimeout(()=>{

        console.log('hello')
    },2000)

})
let a = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello World!"), 2000);
})
let b = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello World!2"), 1000);
})

let c = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello World!3"), 3000);
})  


let main = async () => {

   console.time('run')
    let arr = await Promise.all([a,b,c])

    console.log(arr)
    console.timeEnd('run')



}

main()
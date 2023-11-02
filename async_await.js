async function weather(){


let a = new Promise((resolve, reject) => {

        setTimeout(()=>{

resolve('the wether is 21')
            
        },1000)})


        let b = new Promise((resolve, reject) => {

            setTimeout(()=>{
    
    resolve('the wether is 28')
                
            },2000)

    
           
    


    
})

console.log('fetching data..')
const delhiW= await a
console.log('delhis weather is '+delhiW)
console.log('fetching data..')

const banglore= await b
console.log('banglore weather is '+banglore)



return [delhiW,banglore]




}


let main = async () => {

        console.log('hello i am a side func')



}


console.log('fetching weather....')


let func = async () => {                        //stopping the main from executing early all in que (await)
let a= await weather()
let b= await main()
}

func()

// weath.then(data => {

//         console.log(data)
// })

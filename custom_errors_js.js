
let a = 11

try{

    if (a!==10){

        throw ReferenceError ('please enter values below 10')
    }
}

catch(error){

    // console.log(error)
    console.log(error.name)  //returns errors name like reference error
    console.log(error.message) //return error message

    console.log(error.stack) //gives full decription of error

}
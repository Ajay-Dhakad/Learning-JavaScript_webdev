// // console.log(Math.floor(Math.random()*10))

// let arr= [{joke:'hey i am joke 1'},{
//     joke:'hey i am joke 2'
// },

// {
//     joke: 'hey i am joke 3' }]


//     let indx=Math.floor(Math.random()*arr.length-1)

//     // console.log(arr[indx].joke)




let a =new Promise((resolve, reject) => {

    resolve("resolved promise")
    
})


a.then(value => {
    setTimeout(() => {
        console.log('timeout')
    }, 2000);
})

a.then(value =>{

    console
})
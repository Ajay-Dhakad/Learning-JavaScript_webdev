let a= new Promise((resolve, reject) => {

    arr = ['ajay','dhakad']

    if (arr[0]=='ajay'){

        resolve('resolved')

    }

    reject('rejected')
    
})          //PROMISES ARE USED WHEN WE sWANT ANY TASK TO BE COMPLETED AFTER ONE COMPLETES AND CATCHING ERRORS USING CATCH

a.then(msg => {

    console.log(msg)

}).catch(mgs => {
    console.log(msg)
})
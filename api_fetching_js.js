
    // let a = fetch('https://api.weatherapi.com/v1/current.json?key=23d182faeb3844f593b161013230311&q=delhi&aqi=no')

    // a.then(value => {

      
    //     return value.json()
    // }).then(value => {

    //     console.log(value)

    // })



    let weather =async () => {

        // let loc = location
        // console.log(location)

        let fetch1 = await fetch(`https://api.weatherapi.com/v1/current.json?key=23d182faeb3844f593b161013230311&q=mandsaur&aqi=yes`)
        
        let arr = await fetch1.json()

        let array = []

      array.push(arr);

   console.log(array[0].location)
    

        

    }

 
    
 weather()
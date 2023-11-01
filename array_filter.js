const arr = [

    {item:'bag',price:90},
    {item:'pen',price:10}

]


let filtered = arr.filter(elem => {

return elem.item=='bag'

})      //used to filter arrrays based on the content 

console.log(filtered)
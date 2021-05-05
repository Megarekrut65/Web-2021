function one()
{
    let numbers1 = [4,8,1,-3,3,12,8,7]
    let numbers2 = [4,10,1,-4,3,43,8,51]
    alert(numbers1)
    alert(numbers2)
    let contact = numbers1.concat(numbers2)
    let union = new Set(contact)
    let res = []
    for(let item of union)
        res.push(item)
    alert(res)
    res.sort()
    alert(res)
}
function two()
{
    let numbers = [-3,9,8,-7,6,1,-4,2,19,0,-4,5,6,-10,5,3,2]
    alert(numbers)
    let odd = numbers.filter(number=> number > 0 && number%2 == 0)
    alert(odd)
}
function three()
{
    let numbers1 = [-3,9,8,-7,6,1,-4,2,19,0,-4,5,6,-10,5,3,2]
    alert(numbers1)
    if(numbers1.some(number=>number == 0)) alert("Zero")
    let numbers2 = [-3,9,8,-7,6,1,-4,2,19,8,-4,5,6,-10,5,3,2]
    alert(numbers2)
    if(numbers2.some(number=>number == 0)) alert("Zero")
}
function four(item = 5)
{
    let numbers = [-3,9,8,5,6,1,-4,2,19,0,-4,5,6,-10,5,3,2]
    alert(numbers)
    alert(numbers.indexOf(item))
}
function five()
{
    let numbers = [1,2,3,4,5]
    alert(numbers)
    let res = numbers.reduce((prev,current)=> {return prev*current})
    alert(res)
}
function six()
{
    let numbers = [-3,9,8,5,6,1,-4,2,19,0,-4,5,6,-10,5,3,2]
    alert(numbers)
    numbers.sort()
    alert(numbers)
    numbers.sort(function(a, b) {
        let first = Math.abs(a)
        let second = Math.abs(b)
        if (first < second) 
            return -1
        if (first > second) 
            return 1
        return 0})
    alert(numbers)
}
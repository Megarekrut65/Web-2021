function fizzbuzz1(size)
{
    for(i=1;i <= size;i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            alert('fizzbuzz')
        }
        else if(i%3==0)
        {
            alert('fizz')
        }
        else if(i%5==0)
        {
            alert('buzz')
        }
        else
        {
            alert(i)
        }
    }
}
let fizzbuzz2 = function(size)
{
    for(i=1;i <= size;i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            alert('fizzbuzz')
        }
        else if(i%3==0)
        {
            alert('fizz')
        }
        else if(i%5==0)
        {
            alert('buzz')
        }
        else
        {
            alert(i)
        }
    }
}
let fizzbuzz3 = (size)=>{
    for(i=1;i <= size;i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            alert('fizzbuzz')
        }
        else if(i%3==0)
        {
            alert('fizz')
        }
        else if(i%5==0)
        {
            alert('buzz')
        }
        else
        {
            alert(i)
        }
    }
}
function create_text(number,one,two_four,more)
{
    if(number < 10 || number > 14)
    {
        if(number % 10 == 1) return number+' '+one+' '
        if(number % 10 == 2 ||number % 10 == 3||number % 10 == 4) return number+' '+two_four+' '
    }
    return number+' '+more+' '
}
function create_price(grn,coin)
{
    return create_text(grn,'гривня','гривні','гривень')+create_text(coin,'копійка','копійки','копійок')
}
function cost1(grn = 0,coin = 0)
{
    alert('Вартість замовлення: '+create_price(grn,coin))
}
let cost2 = (grn = 0,coin=0)=>alert('Вартість замовлення: '+create_price(grn,coin))
let cost3 = function(grn = 0,coin = 0)
{
    alert('Вартість замовлення: '+create_price(grn,coin))
}
function square(number)
{
    return number*number
}
function find_place(x,y)
{
    if(x == 0)
    {
        if(y == 0) return 'O'
        return 'Oy'
    } 
    if(y == 0) return 'Ox'
    if(x > 0) 
    {
        if(y > 0) return 'I'
        return 'IV'
    }
    if(x < 0 && y > 0) return 'II'
    return 'III'
}
function make_point(point,x,y)
{
    return point+'('+x+', '+y+')'
}
function points1(x1=0,y1=0,x2=0,y2=0)
{
    if(x1*x2 > 0 && y1*y2>0)
    {
        distance = Math.sqrt(square(x2-x1) + square(y2-y1))
        alert('Відстань між точками '+make_point('A',x1,y1) + ' та '+make_point('B',x2,y2))
    }
    else
    {
        alert(make_point('A',x1,y1)+' -> '+find_place(x1,y1)+'\n'+make_point('B',x2,y2)+' -> '+find_place(x2,y2)+' ')
    }
}
let points2 = function(x1=0,y1=0,x2=0,y2=0)
{
    if(x1*x2 > 0 && y1*y2>0)
    {
        distance = Math.sqrt(square(x2-x1) + square(y2-y1))
        alert('Відстань між точками '+make_point('A',x1,y1) + ' та '+make_point('B',x2,y2)+' = '+distance)
    }
    else
    {
        alert(make_point('A',x1,y1)+' -> '+find_place(x1,y1)+'\n'+make_point('B',x2,y2)+' -> '+find_place(x2,y2)+' ')
    }
}
let points3 = (x1=0,y1=0,x2=0,y2=0)=>{
    if(x1*x2 > 0 && y1*y2>0)
    {
        distance = Math.sqrt(square(x2-x1) + square(y2-y1))
        alert('Відстань між точками '+make_point('A',x1,y1) + ' та '+make_point('B',x2,y2)+' = '+distance)
    }
    else
    {
        alert(make_point('A',x1,y1)+' -> '+find_place(x1,y1)+'\n'+make_point('B',x2,y2)+' -> '+find_place(x2,y2)+' ')
    }
}
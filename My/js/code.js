function num(n)
{
    for(i = 1; i<=n;i++)
    {
        alert("Number "+i)
    }
}
function say(message)
{
    alert(message)
    alert("What do you want?")
}
function ques(message, number)
{
    let ans = prompt(message,'')
    if(ans != number)
    {
        alert("You are stupid")
    }
    else
    {
        alert("oh,Yes!")
    }
}
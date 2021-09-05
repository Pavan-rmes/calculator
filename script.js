
var prev = "";
function fun(val)
{
    var value = prev+val
    var disp = document.getElementById("display")
    disp.value = value
    prev = value
}
function reset(){
    var disp = document.getElementById("display")
    disp.value = ""
    prev =""
    localStorage.result = 0
}



function cal(){
    var output = document.getElementById("display")
    disp = output.value
    var a =""
    for(i =0;i<disp.length;i++)
    {
        if(disp[i] === "+")
        {
            var b = disp.slice(i+1,disp.length+1)
            a.trim()
            b.trim()
            a = +a + +b
            prev = a
            output.value = a
        }

        else if(disp[i] === "-")
        {
            var b = disp.slice(i+1,disp.length+1)
            a.trim()
            b.trim()
            a = +a - +b
            prev = a
            output.value = a
        }

        else if(disp[i] === "*")
        {
            var b = disp.slice(i+1,disp.length+1)
            a.trim()
            b.trim()
            a = +a * +b
            prev = a
            output.value = a
        }
        else if(disp[i] === "/")
        {
            var b = disp.slice(i+1,disp.length+1)
            a.trim()
            b.trim()
            a = +a / +b
            output.value = a
        }

        else{
            a =a+disp[i]
        }
    }
}

//using the keypad for the calculation
num = ""
function calculate()
{
    
    //0 ascii --> is 47
    //9 ascii --> is 57
    var x = event.key
    x_ascii = x.charCodeAt(0)
    if (x_ascii>=48 && x_ascii <=57)
    {
        num = num+x
    }
    //enter ascii code ---> 69
    else if(x_ascii ==69)
    {
        cal()
        
    }
    //backspace ascii code is-->66
    else if(x_ascii ==66 || (x_ascii>=42 && x_ascii<=47))
    {
        //donothing
    }
    else
    {
        console.log(x)
        console.log(x_ascii)
        alert("Only numbers")
    }
}


//memory
function mem_store()
{

    localStorage.result = document.getElementById("display").value
}

function mem_add()
{
    var display = document.getElementById("display")
    display.value = (+display.value) + (+localStorage.result)

}
function mem_clear()
{
    localStorage.result = 0
}



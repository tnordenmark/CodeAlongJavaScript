function fizzBuzz()
{
    var loop = document.getElementById("loop").value;
    var fizz = document.getElementById("fizz").value;
    var buzz = document.getElementById("buzz").value;
    var result = [];

    for (var i = 0; i < loop; i++)
    {
        if (i == 0)
            result.push(0);
        else if (i % fizz == 0 && i % buzz == 0)
            result.push("FizzBzz");
        else if (i % fizz == 0)
            result.push("Fizz");
        else if (i % buzz == 0)
            result.push("Buzz");
        else
            result.push(i);
    }

    return result;
}

function printResult(result)
{
    var printArray = "";

    for (var i = 0; i < result.length; i++)
        printArray += "<br>" + result[i];

    document.getElementById("result").innerHTML = printArray;
}

document.getElementById("submitBtn").onclick =
    function ()
    {
        printResult(fizzBuzz());
    }
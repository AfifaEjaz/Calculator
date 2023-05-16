function getNum(num)
{
    document.getElementById('result').value += num;
}

function getResult()
{
 document.getElementById('result').value = eval(document.getElementById('result').value);
}

function removeNum()
{
    var res = document.getElementById('result').value;
    res = document.getElementById('result').value = res = document.getElementById('result').value.slice(0, res.length - 1);
    
}

function  clearResult()
{
    document.getElementById('result').value = '';
}

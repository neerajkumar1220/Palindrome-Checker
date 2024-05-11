function ispalindrown(str)
{
    const cleanstr=str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanstr);
    const reversedstr=cleanstr.split('').reverse().join('');
    console.log(reversedstr);
    return cleanstr == reversedstr;
}

function palindrownchecker()
{
const inputtext=document.getElementById('Textinput');
const result=document.getElementById('result');
if( ispalindrown(inputtext.value) )
{
    result.textContent = `"${inputtext.value}" is a palindrome `;
}
else {
    result.textContent  = `"${inputtext.value}" is not a palindrome `;
}

inputtext.value='';
}


document.getElementById('checkbutton').addEventListener('click',palindrownchecker);


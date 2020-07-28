//Reveal msg from a string using \w
const str = "**^&$Regular#$%Expressions$%$$%^**";
var one = /\w/g;
var two = str.match(one);
var result = two.join('')
console.log(result)


// and Reveal only letters.
function lettersOnly(str) {
    var one = /\w/g;
    var arr = str.match(one).join('')
    var two = /\D/g;
    var result = arr.match(two).join('')
    var result1 = result.replace(/_/g,"") 
    console.log(result1)
}
lettersOnly("B_@&%,a-}09t3_4m!25_a45*&^n")

//Return true whether input is matchig with the specifid word otherwise return false.
function asterisk(str) {
    var one = /bomb/i;
    var result =one.test(str);
    if(result)
    {
        console.log("Duck!!!")
    }
    else{
        console.log("There is no bomb")
    }

}
asterisk("there is a Bomb")
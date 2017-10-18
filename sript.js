//hi
function tester(){

    document.getElementById("output1").innerHTML = firstLast6();
    document.getElementById("output2").innerHTML = has23();
    document.getElementById("output3").innerHTML = fix23();
    document.getElementById("output4").innerHTML = countYZ();
    document.getElementById("output5").innerHTML = starout();
    document.getElementById("output6").innerHTML = endOther();
    document.getElementById("output7").innerHTML = getSandwich();
    document.getElementById("output8").innerHTML = canBalance();
    document.getElementById("output9").innerHTML = countClumps();
    document.getElementById("output10").innerHTML = evenlySpaced();
}



function firstLast6(array){
    if(array[0]==6 || array[array.length -1]==6){
        return true;
    }else{
        return false;
    }
}

function has23(array){
    if(array[0] == 2 || array[1] == 3 || array[0] == 3 || array[1] == 2){
        return true;
    }else{
        return false;
    }
}

function fix23(array){
    if(array[0] == 2 && array[1] == 3){
        array[1] = 0;
    }else if(array[1] == 2 && array[2] == 3){
        array[2] = 0
    }
    return array;
}

function countYZ(string){
    var i = 0;
    var x = 0;
    string = string.toLowerCase();
    var last = string.length - 1;
    if(string[last] == "y" || string[last] == "z") {
        i++;
    }
    while(x < string.length){
        if(string[x] == " "){
            if(string[x-1] == "y" || string[x-1] == "z"){
                i++
            }
        }
        x++
    }

    return i;
}

function endOther(string,string2){
    string = string.toLowerCase();
    string2 = string2.toLowerCase();
    if(string.length == 1){
        if(string[string.length - 1] == string2[string2.length - 1]){
            return true;
        }
    }
    if(string[string.length - 1] == string2[string2.length - 1] && string[string.length - 2] == string2[string2.length - 2]){
        return true;
    }else{
        return false;
    }

}

function starout(string){
    var i =0;
    var x= "";
    while(i < string.length){
        if(string[i] != "*" && string[i+1] != "*" && string[i-1] != "*"){
            x += string[i];
        }
        i++;
    }
    return x;
}



function getSandwich(string){
    var x = string.indexOf("bread") + 4;
    var y = string.lastIndexOf("bread");
    var z = "";
    var i = x+1;
    while(i > x && i < y){
        z += string[i];
        i++;
    }
    return z;
}

function canBalance(array){
    var sum1 = 0;
    var sum2 = 0;
    var l = 0;
    for(var i =0; i < array.length; i++){
        sum1 += array[i];
        for(var j = i+1; j < array.length; j++){
            sum2 += array[j];
        }
        if(sum1 == sum2){
            l += 1;
        }
        sum2 = 0;
    }if(l == 0){
        return false;
    }else{
        return true;
    }

}

//better method than the 2 for loops
function countClumps(array){
    var numClumps = 0;
    for(var i = 0; i < array.length; i++){
        var j = i+1;

        if(array[i] == array[j]){
            numClumps += 1;
            while(array[i]==array[j]){
                i++;
                j++;
            }
        }
    }
    return numClumps;
}

//i brute forced it ;)

function evenlySpaced(a,b,c){
    if(c-b == b-a){
        return true;
    }
    if(b-c == c-a){
        return true;
    }
    if(b-a == a-c){
        return true;
    }
    return false;
}



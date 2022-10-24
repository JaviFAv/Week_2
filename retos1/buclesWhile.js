function hasEven(myNums) {
    var i = 0;
    var par = false;
    while (i < myNums.length) {
        if (myNums[i] % 2 == 0) {
            par = true;
        }
        i++;
    }
    return par;
}
//console.log(hasEven([2, 5]));
function startWithM(myNames) {
    var i = 0;
    var haveM = true;
    while (i < myNames.length && haveM == true) {
        if (myNames[i][0] != "M") {
            haveM = false;
        }
        i++;
    }
    if (haveM == true) {
        return true;
    }
    else {
        return false;
    }
}
console.log(startWithM(["Manuel", "Manolo", "Mecarena"]));

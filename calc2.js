var num1 = " "
var ans = " "
// console.log("boo")
function more(num) {
    num1 += num
    document.getElementById("1").innerHTML = num1
    return num1
}

function take() {
    num1 = num1.slice(0, num1.length-1)
//    console.log(num1)
    document.getElementById("1").innerHTML = num1
    return num1
}
function complete() {
    if(num1.includes(" ! ")) {
        let s = num1.split(" ! ")
        let r = s[0]
        let m = r
        while(m > 1) {
            m -= 1
            r = m * r
//            console.log(r, "oi")
        }
        num1 = r + s[1]
//        console.log(num1)
    }
    if (num1.includes("^")) {
        let s = num1.split("^")
        let r = s[0] //3
        let m = s[1] //4
        let o = r
        for(i = 1; i < m; i++) {
            r = r * o
//            console.log(r, "ey")
        }
        num1 = r
//        console.log(num1)   
    }
    else { 
        num1 = eval(num1)
//        console.log("my")
    }
    ans = num1
    document.getElementById("yesAns").innerHTML = ans
    num1 = " "
    document.getElementById("1").innerHTML = num1 
//    console.log(ans)
    return ans
}

const nodeList = document.querySelectorAll("#color");
function green() {
    for (i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "rgba(31, 196, 55, 0.1)";
        nodeList[i].style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0), rgba(21, 0, 0, 0))"
}}
function blue() {
    for (i = 0; i < nodeList.length; i++) {
      nodeList[i].style.backgroundColor = "rgba(20, 77, 198, 0.1)";
      nodeList[i].style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0), rgba(21, 0, 0, 0))"
}}
function rainbow() {
    for (i = 0; i < nodeList.length; i++) {
      nodeList[i].style.backgroundImage = "linear-gradient(rgba(255, 0, 0, 0.2), rgba(255, 140, 0, 0.2), rgba(255, 255, 0, 0.2), rgba(0, 255, 255, 0.2), rgba(0, 0, 255, 0.2), rgba(255, 0, 255, 0.2)";
}}

var isStop = true;
var s = 0;
var min = 0;
var hr = 0;
function Start()
{
    console.log("Starting")
 if(isStop==true)
 {
    isStop = false;
    timer();
 }
}

function timer()
{
    if(isStop == false){
        s = parseInt(s);
        min = parseInt(min);
        hr = parseInt(hr);
        s++;
        if (s==60)
        { 
            s = 0;
            min++;
        }
        if(min == 60){
            min = 0
            hr++;
        }

        if(min<10){
            min = "0" + min;
        }
        if(hr<10){
            hr = "0" + hr;
        }
       
       
        Stopwatch.innerHTML = hr +" : " + min + ":" + s;
         setTimeout("timer()",1000);
    }

}function Stop(){
    isStop = true;
}

function Reset(){
    isStop = true;
    s = 0;
    min = 0;
    hr = 0;

    Stopwatch.innerHTML = "00 : 00 : 00";
}
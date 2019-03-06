
//WILL RUN WHEN PAGE LOADED
window.onload = function(){
    $('#lap').on('click', recordLap);
    $('#stop').on('click', stop);
    $('#reset').on('click', reset);
    $('#start').on('click', start);
};

var intevalId;


var clockRunning = false;
var time = 0;
var lap = 1;


function reset(){
    time = 0;
    lap = 1;


    //CHANGE 'DISPLAY' DIV TO '00:00'
    $('#display').text("00:00");
    //EMPY "laps" DIV
    $('#laps').text("");
}

function start(){
    if (!clockRunning){
        intevalId = setInterval(count, 1000);
        clockRunning = true;
    }
}

function stop(){
    clearInterval(intevalId);
    clockRunning = false;
}

function recordLap(){
    //Get the current time, pass that into the timeConverter
    //  function, and save the result in a variable.
    var converted = timeConverter(time);
    //Add the current lap and time to the "laps" div.
    $('#laps').append('<p>Lap' + lap + ':' + converted + '</p>');

    lap++;
}

function count(){
    //Increment time by 1
    time++;
    // Get the current time, pass that into the timeConverter function,
    //    and save the result in a variable
    var converted = timeConverter(time);
    console.log(converted);
    // Use the variable we just created to show the converted time the "display" div
    $('#display').text(converted);

}


    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
      
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
      
        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
      
        return minutes + ":" + seconds;
      }
      

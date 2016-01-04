// Antoine Toubhans FrontEnd js for dummy website

var count_sec = 0

var dumb_printer = function(){
    // write something every 10 secondes
    count_sec += 5;
    x = document.createElement("div");
    x.innerText = "Page loaded for "+count_sec+" sec...";
    document.body.appendChild( x );
    setTimeout("dumb_printer()", 5000);    
}


onload=function(){ dumb_printer() }

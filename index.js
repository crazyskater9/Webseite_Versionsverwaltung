function current_time()
{
    var s;
    var m;
    var h;
    var d = new Date();
    var x;
    
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    x = h + ":" + m + ":" + s;
    
    document.getElementById("time").innerHTML = x;
}
window.onload = current_time;
setInterval(current_time, 1000);



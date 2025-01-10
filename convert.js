function temperature() {
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celcius").value;
    var f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f;
}
function weight(){
    //To convert kg to pounds
    //kg x 2.205
    var kg = document.getElementById("kg").value;
    var lbs = kg * 2.205;
    document.getElementById("lbs").value = Math.floor(lbs);
}
function distance(){
    //To convert KM to Miles
    //km * 0.62137
    var km = document.getElementById("km").value;
    var miles = km * 0.62137;
    document.getElementById("ml").value = Math.floor(miles);
}
function tracker(){
    var side1 = parseInt(document.getElementById("slide1").value);
    var side2 = parseInt(document.getElementById("slide2").value);
    var side3 = parseInt(document.getElementById("slide3").value);
    var display = document.getElementById("display");
    
    if (side1 == side2 && side2 == side3 && side1 == side3){
       display.innerHTML = "Equilateral Triangle All sides Equal";
    } else
    if (side1 == side2 && side2 !== side3 && side1 !== side3){
       display.innerHTML = "Isoceles Triangle Exactly two sides equal";
    } else
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2){
        display.innerHTML = "Not a triangle";
    } else 
    {
        display.innerHTML = "scalene";
    }
}
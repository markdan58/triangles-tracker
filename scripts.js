var side1 = parseInt(prompt("Enter side 1"));
var side2 = parseInt(prompt("Enter side 2"));
var side3 = parseInt(prompt("Enter side 3"));
if (side1 == side2 && side2 == side3 && side1 == side3) {
    alert("Equilateral Triangle All sides Equal");
} else
    if (side1 == side2 && side2 !== side3 && side1 !== side3) {
        alert("Isoceles Triangle Exactly two sides equal");
    }
    else
        if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
            alert("Not a triangle");
        }
        else
        {
            alert("scalene");
        }    
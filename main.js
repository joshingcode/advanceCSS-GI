// Create a functions that finds the maximum number in an array of numbers
// Solution 1:



function findMax(ar)
{

    //assign first element of array 
    var max = ar[0];

    //to access all the elements of the array
    for(var i = 0; i < ar.length; i++)
    {
        //compare all the elements with max
        if (ar[i] > max)
        {
            // assigning the maxium value to max
            max = ar[i];
        }
    }

    return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);
































// Create a functions that finds the maximum number in an array of numbers
// Solution 1:



function findMax(ar)
{

  
    var max = ar[0];

    
    for(var i = 0; i < ar.length; i++)
    {
       
        if (ar[i] > max)
        {
            
            max = ar[i];
        }
    }
    
    return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);
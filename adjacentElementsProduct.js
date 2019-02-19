//Given an array of integers, find the pair of adjacent elements that has 
//the largest product and return that product.

function adjacentElementsProduct(inputArray) {
    var posNum1=0, posNum2=1, largestProd=inputArray[0]*inputArray[1];
    do{
        if(inputArray[posNum1]*inputArray[posNum2]>largestProd){
           largestProd=inputArray[posNum1]*inputArray[posNum2];
        }
        posNum1++;
        posNum2++;
    } while(posNum2<=inputArray.length-1);
    return largestProd;
}
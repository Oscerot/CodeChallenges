//Given a sequence of integers as an array, 
//determine whether it is possible to obtain a strictly increasing sequence 
//by removing no more than one element from the array.

//Note: sequence a0, a1, ..., an is considered to be a strictly 
//increasing if a0 < a1 < ... < an. Sequence containing only one element is also 
//considered to be strictly increasing.

//Example

//For sequence = [1, 3, 2, 1], the output should be
//almostIncreasingSequence(sequence) = false.

//There is no one element in this array that can be removed in order to get a 
//strictly increasing sequence.

//For sequence = [1, 3, 2], the output should be
//almostIncreasingSequence(sequence) = true.

//You can remove 3 from the array to get the strictly increasing sequence [1, 2]. 
//Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].


function almostIncreasingSequence(sequence) {
    if(sequence.length<=2)
        return true;
    var i=0;
    var removed=false;
    do{
        if(sequence[i+1]<=sequence[i]){
            if(removed)
                return false;
            if(i===0){
               sequence.splice(0,1);
                removed=true;
                i--;
           }    
            else if (sequence[i-1]<sequence[i+1] && i!==0){
                sequence.splice(i,1);
                removed=true;  
                i--;
             }
            else{
                sequence.splice(i+1,1);
                removed=true;
                i--;
            }
        }
        i++;
    } while(i<sequence.length-1);
    return true;
}
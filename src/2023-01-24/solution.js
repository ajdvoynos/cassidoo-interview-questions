export function missingBits(arr){
    //Assumes:
    //non empty 
    //ordered asc
    //only numbers
    for (let i = arr.length - 2; i >= 0; i--) {
        let element = arr[i];
        let next = arr[i + 1];
        let diff = next - element;
        if(diff === 2){
            arr.splice(i+1, 0, element+1)
        } else if(diff > 2){
            arr.splice(i+1, 0, '...');
        }
    }
    return '[' + arr.join(',') + ']';
}
function processData(input) {
    const num = input.split("\n").slice(1).map(n => parseInt(n))
    let answer;
    
    for(i = 0; i < num.length; i++) {
        if(num[i] === 1) {
            console.log("Not prime")
            continue;
        }
        let squareRoot = Math.sqrt(num[i])
        for(j = 2; j < squareRoot + 1; j++) {
            const number = num[i];
            if(number === 2) {
                answer = "Prime"; 
                break;   
            } else if(number % j === 0) {
                answer = "Not prime"; 
                break;   
            } else {
            answer = "Prime";
            }
        }
        console.log(answer)
    }
} 
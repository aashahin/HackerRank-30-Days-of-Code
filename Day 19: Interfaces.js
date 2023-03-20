function main() {
    let n = parseInt(readLine()), sum = 0
    for(let i = 1; i <= n; i++)
        if(n % i === 0) sum += i
    console.log("I implemented: AdvancedArithmetic")
    console.log(sum)
}
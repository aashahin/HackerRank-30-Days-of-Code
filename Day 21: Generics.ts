function main() {
    function printArray<T>(items: T[]) {
        let index = 0;
        for (const item of items) {
            if (index == 0) {
                index = Number(item);
            } else {
                index -= 1;
                console.log(item);
            } 
        }
    }
    printArray(inputLines);
}
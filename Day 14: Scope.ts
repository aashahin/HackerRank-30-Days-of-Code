class Difference {
    elements: number[];
    maxDifference: number;

    constructor(arr: number[] = []) {
        this.elements = arr;
    }

    computeDiff() {
        const sorted = this.elements.sort((a, b) => a - b);
        const diff = sorted[0] - sorted[sorted.length - 1];
        this.maxDifference = Math.abs(diff);
    }
}

function main() {
    const elements = inputLines[1].split(" ").map(number => parseInt(number, 10));
    const difference = new Difference(elements);
    difference.computeDiff();
    console.log(difference.maxDifference);
}
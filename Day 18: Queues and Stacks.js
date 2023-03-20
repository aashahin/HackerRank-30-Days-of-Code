function Solution(){
    this.stack = [];
    this.queue = [];
    this.pushCharacter = (char) => {
        this.stack.push(char);
    }
    this.enqueueCharacter = (char) => {
        this.queue.push(char);
    }
    this.popCharacter = () => {
        return this.stack.pop();
    }
    this.dequeueCharacter = () => {
        return this.queue.shift();
    }
}

let queue = [root];
    let result = [];
    while (queue.length) {
        let node = queue.shift();
        result.push(node.data);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    console.log(result.join(" "));
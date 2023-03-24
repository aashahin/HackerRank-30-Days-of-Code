       if(!root)return 0;
       let heightLeft = root.left ? 1 + this.getHeight(root.left) : 0;
       let heightRight = root.right ? 1 + this.getHeight(root.right) : 0;
       return Math.max(heightLeft, heightRight);
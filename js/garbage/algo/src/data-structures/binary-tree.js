class BinaryTreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value)
      } else {
        this.left = new BinaryTreeNode(value)
      }
    } else {
      if (this.right) {
        this.right.insert(value)
      } else {
        this.right = new BinaryTreeNode(value)
      }
    }
  }

  find(value) {
    if (value === this.value) {
      return this
    }

    if (value < this.value && this.left) {
      return this.left.find(value)
    } else if (value > this.value && this.right) {
      return this.right.find(value)
    }
    return null
  }

  printInOrder() {
    if (this.left) {
      this.left.printInOrder()
    }
    console.log(this.value)
    if (this.right) {
      this.right.printInOrder()
    }
  }

  toString() {
    return JSON.stringify(this, null, 2)
  }
}

function run() {
  const tree = new BinaryTreeNode(10)
  tree.insert(5)
  tree.insert(15)
  tree.insert(20)
  tree.insert(8)

  const node = tree.find(10)

  console.log(node.toString())
  console.log(tree.toString())
  console.log(tree.printInOrder())
}

run()

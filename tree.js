/*Tree
_root points to the root node of a tree.
traverseDF(callback) traverses nodes of a tree with DFS.
traverseBF(callback) traverses nodes of a tree with BFS.
contains(data, traversal) searches for a node in a tree.
add(data, toData, traverse) adds a node to a tree.
remove(child, parent) removes a node in a tree
*/

class TreeNode {
    constructor(data) {
        this.data = data;
        this.parent = null;
        this.children = []
    }
}

class Tree {
    constructor(data) {
        let node = new TreeNode(data);
        this._root = node;
    }

    traverseDFS(callback) {
        dfs(this._root, callback);
    }

    traverseBFS(callback) {
        bfs(this._root, callback);
    }

    contain(callback, searchType) {
        searchType.call(this, callback);
    }

    add(data, toData, searchType) {
        let child = new TreeNode(data);
        let parent = null;
        let callback = (node) => {
            if (node.data == toData) {
                parent = node;
            }
        }

        this.contain(callback, searchType);

        if (parent) {
            parent.children.push(child);
            child.parent = parent;
        } else {
            throw new Error('Cannot add node to a non-existent parent.');
        }
    }

    remove(data, fromData, traversal) {
        let parent = null;
        let index;
        let childToRemove = null;
        let callback = (node) => {
            if (node.data == fromData) {
                parent = node;
            }
        }

        this.contain(callback, traversal);

        if (parent) {
            if (parent.children.indexof(data) > -1) {
                index = parent.children.indexof(data);

                childToRemove = parent.children.splice(index, 1);
            } else {
                throw new Error('Node to remove does not exist!!!');
            }
        } else {
            throw new Error('Parent does not exist!!!');
        }
    }
}


const bfs = (currentNode, callback) => {
    let queue = [currentNode];
    let node = queue.shift();

    while (node) {
        for (let index = 0; index < node.children.length; index++) {
            queue.push(node.children[index]);
        }
        callback(node);
        node = queue.shift();
    }
}

const dfs = (currentNode, callback) => {
    //step 2
    for (let index = 0; index < currentNode.children.length; index++) {
        //step 3
        dfs(currentNode.children[index], callback);
    }
    //step 4
    callback(currentNode);
};
class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
        this.numberOfEdges = 0;
    }

    size() {
        return this.vertices.length;
    }

    relation() {
        return this.numberOfEdges;
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        let length = this.edges.length;
        this.edges[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);

        this.numberOfEdges++;
    }

    removeVertex(vertex) {
        let index = this.vertices.indexOf(vertex);

        if (index > -1) {

            this.vertices.splice(index, 1);

            while (this.edges[vertex].length) {
                let adjusentVertex = this.edges[vertex].pop();
                this.removeEdge(adjusentVertex, vertex);
            }
        } else {
            console.log(`no such vertex found!!!`);
        }
    }

    removeEdge(vertex1, vertex2) {
        let index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
        let index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;

        if (index1 > -1) {
            this.edges[vertex1].splice(index1, 1);
            this.numberOfEdges--;
        }

        if (index2 > -1) {
            this.edges[vertex2].splice(index2, 1);
        }

    }

    traverseDFS(vertex, callback) {
        let index = this.vertices.indexOf(vertex);
        if (index > -1) {
            let visited = [];
            this._traverseDFS(vertex, visited, callback);
        } else {
            console.log('Vertex not found!!!');
        }
    }

    _traverseDFS(vertex, visited, callback) {
        visited[vertex] = true;

        for (let index = 0; index < this.edges[vertex].length; index++) {
            if (!visited[this.edges[vertex][index]]) {
                this._traverseDFS(this.edges[vertex][index], visited, callback);
            }
        }

        if (this.edges[vertex] != 'undefined') {
            callback(vertex);
        }

    }

    print() {
        console.log(this.vertices.map((item) => {
            return (item + '->' + this.edges[item].join(', ')).trim();
        }, this).join(' | '));
    }
}
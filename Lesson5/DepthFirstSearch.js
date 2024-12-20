function dfsRec(adj, visited, s) {
    visited[s] = true;

    process.stdout.write(s + " ");


    for (let i of adj[s]) {
        if (!visited[i]) {
            dfsRec(adj, visited, i);
        }
    }
}

function dfs(adj, s) {
    const visited = new Array(adj.length).fill(false);

    dfsRec(adj, visited, s);
}

function addEdge(adj, s, t) {
    adj[s].push(t);
    adj[t].push(s);
}


const V = 5;

const adj = Array.from({ length: V }, () => []);

const edges = [[1, 2], [1, 0], [2, 0], [2, 3], [2, 4]];

for (let e of edges) {
    addEdge(adj, e[0], e[1]);
}

const source = 1;
console.log("DFS from source: " + source);
dfs(adj, source);
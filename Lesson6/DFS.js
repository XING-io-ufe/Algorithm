function dfsRec(adj, visited, s) {
    // Mark the current vertex as visited
    visited[s] = true;

    // Print the current vertex
    process.stdout.write(s + " ");

    // Recursively visit all adjacent vertices that are not
    // visited yet
    for (let i of adj[s]) {
        if (!visited[i]) {
            dfsRec(adj, visited, i);
        }
    }
}

function dfs(adj, s) {
    const visited = new Array(adj.length).fill(false);

    // Call the recursive DFS function
    dfsRec(adj, visited, s);
}

function addEdge(adj, s, t) {
    // Add edge from vertex s to t
    adj[s].push(t);
    // Due to undirected Graph
    adj[t].push(s);
}


const V = 5; // Number of vertices in the graph

// Create an adjacency list for the graph
const adj = Array.from({ length: V }, () => []);

// Define the edges of the graph
const edges =
    [[1, 2], [1, 0], [2, 0], [2, 3], [2, 4]];

// Populate the adjacency list with edges
for (let e of edges) {
    addEdge(adj, e[0], e[1]);
}

const source = 1;
console.log("DFS from source: " + source);
dfs(adj, source);
# Node.js Server Hang with Keep-Alive and Long-Running Task

This repository demonstrates a scenario where a Node.js server hangs when a keep-alive connection is processing a long-running task.  The server becomes unresponsive to new requests while the long task executes.

## Bug

The `server.js` file contains a simple HTTP server that keeps the connection alive.  A long-running loop simulates a time-consuming process.  While this loop is executing, the server will not respond to new requests, effectively hanging.

## Solution

The `serverSolution.js` file demonstrates a solution using streams to handle long-running operations without blocking the event loop and keep the server responsive.
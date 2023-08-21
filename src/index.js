import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

// Create an Express app
const app = express();
const serverPort = 5000;

// Get the directory path of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Define a route to handle incoming requests
app.get("/:id", (req, res) => {
  // Parse the input data from the request parameter
  const inputs = req.params.id;
  console.log("Input Data:", inputs);

  // Send the "index.html" file as the response
  res.sendFile(join(__dirname, "index.html"));
});

// Start the server and listen on the specified port
app.listen(serverPort, () => {
  console.log(`Server running on http://localhost:${serverPort}`);
  console.log("WARNING: This server collects and logs data from forms. Use with caution.");
  console.log("DISCLAIMER: This code is for educational purposes only. The author is not responsible for misuse.");
});

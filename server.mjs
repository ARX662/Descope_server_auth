// server.mjs
import express from "express";
import cors from "cors";
import DescopeClient from '@descope/node-sdk';

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);
app.use(express.json());

/**
 * This function is used to verify a social account
 */
app.post("/Register", async (req, res) => {
  try {
    const descopeClient = DescopeClient({ projectId: 'P2Vq6X2n5q0wyAwgN0QhKoo1E2vN' });
    // Fetch session token from HTTP Authorization Header
    const sessionToken = "xxxx";
    const authInfo = await descopeClient.validateSession(sessionToken);
    console.log("Successfully validated user session:");
    console.log(authInfo);
    res.sendStatus(200); // Send a success response
  } catch (error) {
    console.log("Could not validate user session " + error);
    res.status(500).send("Internal Server Error"); // Handle errors
  }
});

app.post("/login", async (req, res) => {
  try {
    const descopeClient = DescopeClient({ projectId: 'P2Vq6X2n5q0wyAwgN0QhKoo1E2vN' });
    // Fetch session token from HTTP Authorization Header
    const sessionToken = "xxxx";
    const authInfo = await descopeClient.validateSession(sessionToken);
    console.log("Successfully validated user session:");
    console.log(authInfo);
    res.sendStatus(200); // Send a success response
  } catch (error) {
    console.log("Could not validate user session " + error);
    res.status(500).send("Internal Server Error"); // Handle errors
  }
});

app.listen(9000, () => console.log("Server running on port 9000"));

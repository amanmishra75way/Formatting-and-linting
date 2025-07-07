// app.js
import express from "express";
import logger from "./logger.js";

const app = express();

app.use(express.json());

// Example route that throws an error
app.get("/", (req, res) => {
  throw new Error("Simulated crash");
});

// Error logging middleware
app.use((err, req, res, next) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.originalUrl,
  });

  res.status(500).json({ error: "Internal Server Error" });
});

export default app;

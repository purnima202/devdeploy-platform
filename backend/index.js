const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const app = express();
app.use(cors());
const PORT = 3000;

const pool = new Pool({
    host: "database",
    port: 5432,
    user: "devuser",
    password: "devpassword",
    database: "devdeploy"
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.get("/api/status", (req, res) => {
    res.json({
        application: "DevDeploy Platform",
        status: "running",
        environment: "development"
    });
});

app.get("/api/projects", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM projects");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching projects:", error.message);
        res.status(500).json({
            error: "Failed to fetch projects"
        });
    }
});

pool.query("SELECT NOW()", (err, result) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Database connected successfully");
    }
});

app.listen(PORT, () => {
    console.log(`DevDeploy backend running on port ${PORT}`);
});
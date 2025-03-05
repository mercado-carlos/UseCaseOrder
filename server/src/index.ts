import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

// Servir el archivo estático de React en producción
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hello from Express + TypeScript!");
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

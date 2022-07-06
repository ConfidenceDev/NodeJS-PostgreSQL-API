const express = require("express");
const app = express();
const mainRoute = require("./routes/main");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mainRoute);

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

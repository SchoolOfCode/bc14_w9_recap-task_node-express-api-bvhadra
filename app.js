import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", (req, res) => {
  res.json({
    status: true,
    payload: "This route works!",
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Get all users
app.get("/api/users", async (req, res) => {
  const users = await getUsers();
  res.json({
    success: true,
    payload: users,
  });
});


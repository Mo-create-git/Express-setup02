import express from "express";

const app = express();

app.use(express.json())

const port = 5006;

app.get('/status', (req,res) => {
    try{
        res.status(200).json ({msg: "Hello"});
    } catch {error} {
        console.log(error);
        res.status (500).json ({msg:error});
    };
});

app.get('/global', (req,res) => {
    try{
        res.status(200).json ({msg: "HELLO GLOBAL SERVER"});
    } catch {error} {
        console.log(error);
        res.status (500).json ({msg:error});
    }
    res.send("Hello Global Server");
});

app.post('/register', (req,res) => {
    let userData = req.body;
   console.log(userData)
   res.json({ message: "User registered successfully"});
});

app.post("/students/:rollno", (req,res) => {
    let id = req.params.rollno;
    console.log("📥 Incoming /students/rollno payload:", id);
    res.json(id)
});

app.put('/user/:id', (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    // Update logic goes here (e.g., update the user in the database)
    res.status(5006).json({ message: "user updated successfully" });
  });
  


app.listen (port, () => {
  console.log(`server is running on http://localhost:$(port)`);
});


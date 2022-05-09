import express from 'express';
import db from './init_lowdb.js';
import cors from 'cors';
import { appendFile } from 'fs';

const app = express();
app.use(cors());
app.use(express.json()); // It parses incoming JSON requests and puts the parsed data in req.

const PORT = process.env.PORT || 4000;

// error handling
app.get("/notfound", (req, res, next) => {
  try {
    const myErr = new Error("not-found");
    myErr.type = "not-found";
    next(err);
  } catch (err) {
    console.log("hier im Err");
    next(err);
  }
});

app.get("/404", (req, res) => {
  res.status(404).send("server not found")
})

// comments in die DB schreiben - insomnia checked.
app.post("/", async (req, res) => {
  console.log("comment received");
  console.log("request body", req.body);
  db.data["comments"].push(req.body);
  await db.write();
  res.send(req.body)
  res.end();
})

app.get("/", (req, res) => {   
  console.log("app get")  // nach f5 browser
  res.send(db.data.comments)

})

app.put("/", (req, res) => {
  const id = req.body.id;
  const message = req.body.message;

  db.data["comments"].forEach((comment) =>
    comment.id === id ? (comment.message = message) : null  // wenn es diese Id ist, wird message geändert.
  );

  db.write();
  res.end();
});


app.delete("/", (req, res) => {
  const id = req.body.id;
  db.data["comments" ] = db.data["comments"].filter((comment) => comment.id !== id)

  db.write();
  res.end();
  
});

// server test
// app.use((req, res, next) => {
//   // For example, a GET request to `/test` will print "GET /test"
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

app.get('/test', (req, res, next) => {
  res.send('ok');
});


app.listen(PORT, () => console.log("listening on port 4000"))
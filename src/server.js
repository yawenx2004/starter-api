import express from 'express';

// initialise app
const app = express();

// default route
app.get('/', (req, res) => {
  res.send('hello! this is my api. :)')
});

//////////////////
// start server //
//////////////////
async function startServer() {
  try {
    const port = process.env.PORT || 9090;
    app.listen(port);

    console.log(`listening on port ${port}`);
  } catch (error) {
    console.error(error);
  }
}

startServer();

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export const server = app.listen(PORT,()=>{
  console.log(`Server is listening at ${PORT} port.`)
});

server.on("error", console.error);


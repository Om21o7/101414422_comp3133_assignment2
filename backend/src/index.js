const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '..', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });


app.post('/upload', upload.single('profilePic'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');

  const protocol = req.protocol;
  const host = req.get('host'); 
  const fileUrl = `${protocol}://${host}/uploads/${req.file.filename}`;
  
  res.json({ url: fileUrl });
});


async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  app.get('/', (req, res) => {
    res.redirect('/graphql');
  });
  

  await server.start();
  server.applyMiddleware({ app });

  await mongoose.connect(
    'mongodb+srv://ommakwana1825:RQEoabuSC9IndGiK@cluster0.ef2mn.mongodb.net/Assign02?retryWrites=true&w=majority&appName=Cluster0'
  );

  console.log('✅ Connected to MongoDB');
  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();

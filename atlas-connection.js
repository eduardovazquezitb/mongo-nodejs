
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://school:school@cluster0.yb6xs.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function findAll() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      const myDB = client.db("itb");
      const books = myDB.collection("books");
      const cursor = await books.find();
      console.log("your books are: ");
      for await (const doc of cursor) {
        console.dir(doc);
      }
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  export async function findById(id) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const myDB = client.db("itb");
        const books = myDB.collection("books");
        const cursor = await books.find({_id:id});
        console.log("your books are: ");
        for await (const doc of cursor) {
        console.dir(doc);
        }
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
    }

export async function findByAuthor(author) {
try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const myDB = client.db("itb");
    const books = myDB.collection("books");
    const cursor = await books.find({ authors: [author] });
    console.log("your books are: ");
    for await (const doc of cursor) {
        console.dir(doc);
    }
} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
}
}


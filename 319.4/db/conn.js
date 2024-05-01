import {MongoClient} from 'mongodb'

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient('mongodb+srv://cataquarleri:nWgqzWYJtfl91Rra@mongopractice.qvkpgkr.mongodb.net/?retryWrites=true&w=majority&appName=MongoPractice')

let conn;

try {
   conn = await client.connect()
   console.log('Connected to MongoDB')
}catch (err){
    consolerr.log(err)
}

let db = conn.db('sample_training')

export default db
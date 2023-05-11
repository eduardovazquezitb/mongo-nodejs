import express from 'express'
import { findAll, findByAuthor, findById, run } from './atlas-connection.js'

const PORT = process.env.PORT || 3030

const app = express()

app.listen(PORT, () => {
    console.log('yellow')
    //run().catch(console.dir);
    //findAll().catch(console.dir);
    findById(252).catch(console.dir);
    //findByAuthor("Timothy Binkley-Jones").catch(console.dir)
})
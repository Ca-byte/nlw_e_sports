import express  from "express";

const app = express()

app.get('/eu', (req, res)=> {
    return res.json([
        {id: 1, name: 'Doc 1'},
        {id: 2, name: 'Doc 2'},
        {id: 3, name: 'Doc 3'},
        {id: 3, name: 'Doc 4'}
    ])
})

app.listen(3333)
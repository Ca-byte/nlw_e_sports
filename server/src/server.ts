import express, { response }  from "express";

const app = express()

app.get('/games', (request, response)=> {
    return response.json([])
})

app.post('/ads', (request, response)=> {
    return response.status(201).json([])
})

app.get('/games/:id/ads', (req, res)=> {
    //const gameId = req.params.id;
    return res.json([
        {id: 1, name: 'Doc 1'},
        {id: 2, name: 'Doc 2'},
        {id: 3, name: 'Doc 3'},
        {id: 3, name: 'Doc 4'}
    ])
})

app.get('/ads/:id/discord', (req, res)=> {
    //const adId = req.params.id;
    return res.json([])
})

app.listen(3333)
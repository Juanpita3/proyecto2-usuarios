const express = require('express')
const app = express()

app.use(express.json())

const usersDB = [
    {
        "id": 1,
        "firstName": "Juan",
        "lastName": "Rincon",
        "email": "p.rincon.1234565@gmail.com",
        "password": "MAri12@@*",
        "age": 20
    },
    {
        "id": 2,
        "firstName": "Santiago",
        "lastName": "Gomez",
        "email": "santix377Qgmail.com",
        "password": "LaMoRzA321%",
        "age": 20
    }
]
let  baseId = 3

app.get('/', (req, res) => {
    res.status(200).json({
        menssage: 'server ok!'
    })
})

app.get('/users', (req, res) => {
    res.json(usersDB)
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)

    const data = usersDB.find((item) => id === item.id)

    if (data) {

        res.json(data)
    }else{
        res.status(404).json({
            menssage: 'invalid id'
        })
    }

})

app.post('/users', (req,res) =>{
        const data = req.body
        const newUser={
            id: baseId++,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            age: data.age
        }
        usersDB.push(newUser)
        res.status(201).json(newUser)
})



app.listen(7000, () => {
    console.log('server started at: http://localhost:7000')
})


module.exports = app

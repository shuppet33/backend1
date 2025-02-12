import express from 'express'
import mysql from 'mysql2'

const PORT = 5000

const app = express()

const connection = mysql.createConnection({
   host: 'localhost', 
   user: 'root',  
   password: 'Ltgj1990+',
   database: 'mydatabase' 
});

app.use(express.json())

app.post('/', (req, res) => {
   console.log(req.body)
   res.status(200).json('Сервер работает!!')
})

app.listen(PORT, () => console.log('SERVER STARTES ON PORT ' + PORT))
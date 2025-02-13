import express from 'express'
import mysql from 'mysql2'
import { createPost , deletePostById } from './functionPost.js';
import router from './router.js'

const PORT = 5001

const app = express()

const connection = mysql.createConnection({
   host: 'localhost', 
   user: 'root',  
   password: 'Ltgj1990+',
   database: 'mydatabase' 
});


// let query = "SELECT * FROM  mydatabase";
// connection.query(query, (err, result, field) => {
//    console.log(err)
//    console.log(result[0]['email'])
//    // console.log(field)
// });

// connection.end(err => {
//    if (err) {
//       console.error('Ошибка подключения:', err.stack);
//       return err;
//    }
//    console.log('database ---- close');
// });

app.use(express.json())

app.use('/api', router)

async function startApp() {
   try {
      connection.connect((err) => {
         if (err) {
            console.error('Ошибка подключения:', err.stack);
            return;
         }
         console.log('Подключено к базе данных с идентификатором', connection.threadId);
         });
      app.listen(PORT, () => console.log('SERVER STARTES ON PORT ' + PORT))
   } catch (err) {
      console.log(err)
   }
}

startApp()
import mysql from 'mysql2';
const connection = mysql.createConnection({
   host: 'localhost', 
   user: 'root',  
   password: 'Ltgj1990+',
   database: 'mydatabase' 
});


// const Post = {
//    author: {type: String, required: true},
//    title: {type: String, required: true},
//    content: {type: String, required: true},
//    picture: {type: String}
// }

export function createPost (author, title, content, callback) {
   const query = `INSERT INTO posts (author, title, content) VALUES ('${author}', '${title}', '${content}')`
   connection.query(query, (err, result, field) => {
      if (err) {
         callback(err, null);
         return;
      }
      console.log('Пост создан с ID:', result.insertId);
      const newPost = {
         id: result.insertId,
         author: author,
         title: title,
         content: content
      };
      callback(null, newPost);

      //  const postId = result.insertId;
      //  console.log('Id поста', postId)

      //  const selectQuery = `SELECT * FROM posts WHERE id = ${postId}`;
      //  connection.query(selectQuery, [postId], (err, results) => {
      //    if (err) {
      //      console.error('Ошибка при получении поста:', err);
      //      callback(err, null);
      //      return;
      //    }
      //    callback(null, results);
      //  });
   });
}

export function deletePostById(postId) {
   const query = `DELETE FROM posts WHERE id = ${postId}`;
   connection.query(query, (err, result) => {
     if (err) {
       console.error('Ошибка при удалении поста:', err);
       return;
     }
     console.log('Пост с ID', postId, 'удалён');
   });
}
 
export function getAllPosts (callback) {
   const query = 'SELECT * FROM posts';
   connection.query(query, (err, results) => {
      if (err) {
         console.error('Ошибка при получении постов:', err);
         callback(err, null);
         return;
      }
      callback(null, results)
   })
 }

 export function getOnePosts (params, callback) {
   const query = `SELECT * FROM posts WHERE id = ${params}`;
   connection.query(query, (err, results) => {
      if (err) {
         console.error('Ошибка при получении поста:', err);
         callback(err, null);
         return;
      }
      callback(null, results)
   })
 }

export function putPost (id, author, title, content, callback) {
   const query = `UPDATE posts SET author = '${author}', title = '${title}', content = '${content}' WHERE id = ${id}`;
   connection.query(query, (err, results) => {
      if (err) {
         console.error('Ошибка при обновлении поста:', err);
         callback(err, null);
         return;
      }
      console.log('Пост обновлен с ID:', id);
      const newPost = {
         id: id,
         author: author,
         title: title,
         content: content
      };
      callback(null, newPost)
   })
 }




import { createPost , deletePostById, getAllPosts, getOnePosts, putPost } from './functionPost.js';

class PostController {
   async create(req, res) {
      try {
         const a = req.body;
         createPost(a.author, a.title, a.content, (err, post) => {
            if (err) {
               console.error('Ошибка:', err);
               return;
            } else {
               res.json(post)
            }
         })
      } catch (e) {
         res.status(500).json(e)
      }
   } 
   async getAll(req, res) {
      try {
         getAllPosts((err, posts) => {
            if (err) {
               console.log('Ошибка: ', err)
               return;
            }

            res.json(posts)

         })
      } catch (e) {
         res.status(500).json(e)
      }
   }

   async getOne(req, res) {
      try {
         const id = req.params.id
         getOnePosts(id, (err, post) => {
            if (err) {
               console.log('Ошибка: ', err)
               return;
            }
            res.json(post)
         })
         if (!id) {
            res.status(400),json({message: 'Id не указан'})
         }
      } catch (e) {
         res.status(500).json(e)
      }
   }

   async update(req, res) {
      try {
         const post = req.body
         if (!post.id) {
            res.status(400),json({message: 'Id не указан'})
         }
         putPost(post.id, post.author, post.title, post.content, (err, post) => {
            if (err) {
               console.log('Ошибка: ', err)
               return;
            }
            res.json(post)
         })
      } catch (e) {
         res.status(500).json(e)
      }
   }

   async delete(req, res) {
      try {

      } catch (e) {
         res.status(500).json(e)
      }
   }
}

export default new PostController()
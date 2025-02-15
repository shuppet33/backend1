document.addEventListener('DOMContentLoaded', () => {
   function fetchPosts() {
      try {
         fetch('http://localhost:5001/api/posts')
         .then(res => res.json())
         .then(posts => displayPosts(posts))
         .catch(err => console.log(err))
      } catch (err) {
         console.log('Ошибка при получении поста', err)
      }
   }

   function displayPosts(posts){
      const postsContainer = document.getElementById('posts')
      posts.forEach(post => {
         const postElement = document.createElement('div')
         postElement.innerHTML = `
            <h4>${post.id}</h4>
            <p>${post.title}</p>
            <p><b>${post.author}</b></p>
            <p>${post.content}</p>
         `;
         postsContainer.appendChild(postElement)
      });
   }

   fetchPosts()
}) 

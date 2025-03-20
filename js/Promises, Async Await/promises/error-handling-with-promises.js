fetch('https://no-such-server.blabla')
.then(response=> response.json())
.catch(error=> console.log(error))

fetch('https://api.github.com/users/pratiksoni1402')
.then(response=> response.json())
.then(gitHubUser=> new Promise((resolve, reject)=>{
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  setTimeout(() => {
    img.remove();
    resolve(githubUser);
  }, 3000);
}))
  .catch(error => console.log(error.message));
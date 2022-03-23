const form = document.querySelector("form");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const {
        title,
        postText
    } = event.target;
    // console.log(title.value);
    // console.log(postText.value);
    const newPost = {
        title: title.value,
        body: postText.value,
        userId: 1,
        };
      console.log(newPost);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) =>response.json())
      .then(createPost => {
          const newDiv = document.createElement("div");
          newDiv.classList.add("card");
          newDiv.innerHTML = `
            <h1>post</h1>
            <p class="p1">${title.value}</p> 
            <p class="p2">${postText.value}</p>`
            document.body.append(newDiv);
            
      })
    })
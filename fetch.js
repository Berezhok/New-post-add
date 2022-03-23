// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((value) => value.json())
    .then((result) =>{
        
        result.forEach(element => { 
        let div =  document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
            <h1>${element.id} post</h1>
            <p class="p1">${element.body}</p> 
            <p class="p2">${element.title}</p>`
        document.body.append(div)
        })
    })

    .catch(error => alert(error.name))

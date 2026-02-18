let characters = [];

 fetch("https://hp-api.onrender.com/api/characters"/*, {method : 'POST', body : JSON.stringify({name : 'Sylvain'})}*/)
   .then((httpResponse) => httpResponse.json())
   .then((data) => {
     console.log(data);

     characters = data;
     console.log(characters);
     for(const character of data){

       const p = document.createElement('p')
       p.innerText = character.name

       const img = document.createElement('img')
       img.src = character.image

       document.body.append(p)
       document.body.append(img)
     }
 })

console.log(characters);

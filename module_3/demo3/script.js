let characters = [];

async function getHarryPotterData() {

  let httpResponse = await fetch('https://hp-api.onrender.com/api/characters');

  if (httpResponse.status === 200 && httpResponse.ok) {
    return httpResponse.json();
  } else {
    //la gestion des erreurs
  }
}

async function displayHarryPotterData() {
  let data = await getHarryPotterData();
  for (const character of data) {

    const p = document.createElement('p');
    p.innerText = character.name;

    const img = document.createElement('img');
    img.src = character.image;

    document.body.append(p);
    document.body.append(img);
  }

}

displayHarryPotterData();


async function getUser() {
  return 'Michel';
}

//   .then((httpResponse) => httpResponse.json())
//   .then((data) => {
//     console.log(data);
//
//     characters = data;
//     console.log(characters);
//     for(const character of data){
//
//       const p = document.createElement('p')
//       p.innerText = character.name
//
//       const img = document.createElement('img')
//       img.src = character.image
//
//       document.body.append(p)
//       document.body.append(img)
//     }
// })


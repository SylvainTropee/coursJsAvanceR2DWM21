let clothes = ['dress', 'short', 't-shirt', 'bob'];

//récupérer le select
let selectClothe = document.getElementById('clothes')

for (const clothe of clothes) {

  //création d'un élément de type option
  const option = document.createElement('option')
  option.value = clothe;
  option.innerText = clothe.toUpperCase()
  //ajout dans le dom comme enfant du select
  selectClothe.append(option)
}

//quand je sélectionne une option, elle s'affiche dans une balise p dans le dom
selectClothe.addEventListener('change', function(){
  const p = document.createElement('p')
  p.innerText = this.value
  console.log(this);
  document.body.append(p)
})
















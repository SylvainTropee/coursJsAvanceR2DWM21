const BASE_URL = 'https://geo.api.gouv.fr';

async function callApi(url) {
  const response = await fetch(url);
  if (response.ok) {
    //renvoie la partie json de la réponse
    return response.json();
  }
}

async function getDepartements() {

  const deps = await callApi(`${BASE_URL}/departements`);
  console.log(deps);
  deps.forEach(function(val) {
    const option = document.createElement('option')
    option.innerText = `${val.code} - ${val.nom}`;
    option.value = val.code

    document.getElementById('dep').append(option)
  });

}


async function getCitiesByDep() {
  //const codeDep = document.getElementById('dep').value
  console.log(this.value);
  const cities = await callApi(`${BASE_URL}/departements/${this.value}/communes?fields=nom,code`)
  console.log(cities);

  document.getElementById('cities').innerHTML = '<option value="" selected disabled>- Communes -</option>';

  cities.forEach(function(val){
    const option = document.createElement('option')
    option.innerText = val.nom
    option.value = val.code
    document.getElementById('cities').append(option)
  })
}

async function getCityByCode() {
  const city = await callApi(`${BASE_URL}/communes/${this.value}`)
  console.log(city);

  let p = document.createElement('p')
  p.innerText = `Nom : ${city.nom}, Population : ${city.population}, CP : ${city.codesPostaux.join('-')}`
  document.body.append(p)
}


function init(){
  getDepartements();
  document.getElementById('dep').addEventListener('change', getCitiesByDep)
  document.getElementById('cities').addEventListener('change', getCityByCode)
}

window.onload = init



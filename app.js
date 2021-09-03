const container = document.getElementById('container')
const simpsons = [
  {
    name:'bart',
    url:'images/bart.webp',
  },
  {
    name:'homer',
    url:'images/homer.webp',
  },
  {
    name:'dog',
    url:'images/dog.webp',
  },
  {
    name:'lisa',
    url:'images/lisa.webp',
  },
]

function addImages (){
  let images = '<img src="images/background.jpeg" id="background" alt="background image">'
  simpsons.forEach(({name, url}) => {
    images += `<img src=${url} id=${name} width="100" height="100" class="simpson" alt=${name}>`
  })
  container.innerHTML = images
}

export {addImages}
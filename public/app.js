//Inicializador del elemento Slider

document.querySelector('#buscar').addEventListener('click', traerDatos)

function traerDatos(){

  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'data.json', true)

  xhttp.send()

  xhttp.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){

      let datos = JSON.parse(this.responseText);

      let buscar = document.querySelector('#lista');

      buscar.innerHTML = ''

      for(let item of datos) {

        buscar.innerHTML +=`
          <tr>
            <td>${item.Id}</td>
            <td>${item.Direccion}</td>
            <td>${item.Ciudad}</td>
            <td>${item.Telefono}</td>
            <td>${item.Codigo_Postal}</td>
            <td>${item.Tipo}</td>
            <td>${item.Precio}</td>
          </tr>
        `
      }
    }
  }
}

$("#rangoPrecio").ionRangeSlider({
  type: "double",
  grid: false,
  min: 0,
  max: 100000,
  from: 1000,
  to: 20000,
  prefix: "$"
})

function setSearch() {
  let busqueda = $('#checkPersonalizada')
  busqueda.on('change', (e) => {
    if (this.customSearch == false) {
      this.customSearch = true
    }
    else {
      this.customSearch = false
    }
    $('#personalizada').toggleClass('invisible')
  })
}

$('select').material_select();

setSearch()

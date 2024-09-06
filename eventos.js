document.addEventListener("DOMContentLoaded", function () {
    
    let div = document.getElementById("container");

    div.addEventListener("click", function () {
    alert('Hola! Soy el div');  
    });

});

function saludar(event) {
    alert('Hola!');
    event.stopPropagation();
  }
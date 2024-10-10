function redirectToPage(currentUrl, targetUrl, delay) {
  // Verifica si la página actual contiene el fragmento de URL especificado
  if (window.location.href.includes(currentUrl)) {
    console.log(window.location.href)
    // Espera el tiempo ind icado antes de redirigir
    setTimeout(() => {
      window.location.assign(targetUrl);
    }, delay);
  }
}

function counter(){
  let counter = document.getElementById('counter');
  console.log(counter);
  let count = 6;
  let timer = setInterval(() => {
    count--;
    counter.innerHTML = count;
  }, 1000);

  // Limpia el contador y detiene el timer al finalizar
  setTimeout(() => {
    clearInterval(timer);
    counter.textContent = 0;
  }, 5000);
}

counter()
// Uso de la función:
// partialUrl: parte de la URL actual que deseas verificar (puede ser la ruta o una parte del dominio)
// targetUrl: la URL a la que deseas redirigir
// delay: tiempo de espera en milisegundos (ej. 3000ms = 3 segundos)
redirectToPage('thanks', 'https://tuliobast-portfolio.netlify.app/', 5000);



let amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (!nombre) {
    alert('Por favor, ingresa un nombre válido');
    return;
  }

  amigos.push(nombre);

  input.value = '';

  mostrarLista();
}

function mostrarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Clear any existing items

  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos en la lista para sortear.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[randomIndex];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  const li = document.createElement('li');
  li.textContent = `El amigo secreto es: ${amigoSorteado}`;
  resultado.appendChild(li);
}

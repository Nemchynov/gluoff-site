const modal = document.querySelector('#details');

const copies = {
  'Cookies': 'A proposta doce para acompanhar o café, uma conversa ou um intervalo no teu dia.',
  'Cheese Bread': 'A proposta salgada do universo gluoff. Descobre uma alternativa para variar a tua pausa.',
  'Petit Glúten': 'Mais uma proposta doce para explorar no universo da marca.'
};

document.querySelectorAll('[data-product]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#detailTitle').textContent = button.dataset.product;
    document.querySelector('#detailCopy').textContent = copies[button.dataset.product];
    modal.showModal();
  });
});

document.querySelectorAll('.close, #done').forEach(button => {
  button.addEventListener('click', () => modal.close());
});

// Fecha o diálogo ao clicar fora dele
modal.addEventListener('click', e => {
  if (e.target !== modal) return;
  const r = modal.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
    modal.close();
  }
});

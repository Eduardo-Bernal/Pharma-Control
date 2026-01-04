    const btnPlanos = document.querySelector('.btn-planos');
    const modal = document.getElementById('modalPlanos');
    const fechar = document.getElementById('fecharModal');

    btnPlanos.addEventListener('click', () => {
        modal.classList.add('ativo');
    });

    fechar.addEventListener('click', () => {
        modal.classList.remove('ativo');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('ativo');
        }
    });
export default function initModal() {
    const abrirBtn = document.querySelector('[data-modal="abrir"]');
    const fecharBtn = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    if (abrirBtn && fecharBtn && containerModal) {
        function toggleModal(event) {
            event.preventDefault();
            containerModal.classList.toggle('ativo');
        }

        function cliqueForaModal(event) {
            if (event.target === this) {
                toggleModal(event);
            }
        }

        abrirBtn.addEventListener('click', toggleModal);
        fecharBtn.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}
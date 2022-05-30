const openPopup = document.querySelector('.header-account__mobile');
const closePopup = document.querySelector('.close-popup');
const accountBlock = document.querySelector('.header-account');

openPopup.addEventListener('click', () => {
    accountBlock.style.display = 'flex';
    closePopup.style.display = 'block';

    closePopup.addEventListener('click', () => {
        accountBlock.style.display = 'none';
    closePopup.style.display = 'none';
    })
})
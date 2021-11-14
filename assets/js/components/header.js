console.log('header.js');

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', () => {
    document.getElementById('header-content').classList.toggle('hidden');
    document.getElementById('header-bar').classList.toggle('hidden-bg');
    }
);
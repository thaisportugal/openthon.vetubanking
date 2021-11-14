console.log('header.js');

const menuButton = document.getElementById('menu-button');
const menuButtonList = document.getElementById('menu-button-list');
menuButton.addEventListener('click', () => {
    document.getElementById('header-content').classList.toggle('hidden');
    document.getElementById('header-bar').classList.toggle('hidden-bg');
    }
);
menuButtonList.addEventListener('click', () => {
    document.getElementById('header-content').classList.toggle('hidden');
    document.getElementById('header-bar').classList.toggle('hidden-bg');
    }
);
const acordeons = [
    { button: 'skills', acordeon: 'acordeonSkills' },
    { button: 'idiomas', acordeon: 'acordeonIdiomas' },
    { button: 'educacao', acordeon: 'acordeonEducacao' },
    { button: 'portfolio', acordeon: 'acordeonPortfolio' },
    { button: 'xp', acordeon: 'acordeonXp' }
];

acordeons.forEach(item => {
    const button = document.getElementById(item.button);
    const acordeon = document.getElementById(item.acordeon);
    button.addEventListener('click', function() {
        acordeon.classList.toggle('ativo'); 
    });
});

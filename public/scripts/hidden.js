var hiddenNav = document.querySelector('.hiddenNav');
var allNav = document.querySelector('.allNav');

// Если кликнули скрыть навигацию
hiddenNav.addEventListener('click', () => {
    
    let test = allNav.getAttribute('style');
    if(test == 'left: -380px;') {
        allNav.setAttribute('style', 'left: 50px;');
        hiddenNav.setAttribute('style', 'transform: rotate(0deg); left: 60px;');
    } else {        
        allNav.setAttribute('style', 'left: -380px;');
        hiddenNav.setAttribute('style', 'transform: rotate(90deg); left: 350px;');
    }
});




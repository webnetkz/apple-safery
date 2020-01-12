let services = document.querySelector('#services');
        let trenings = document.querySelector('#trenings');
        let arrow = document.querySelectorAll('.arrow');

        // Отображение списка услуг
        services.addEventListener('click', () => {
            let servicesUl = document.querySelector('#servicesUl');
            if(servicesUl.style.display == "block") {
                servicesUl.style.display = "none";
                arrow[0].setAttribute('style', 'transform: rotate(0deg);');
            } else {
                arrow[0].setAttribute('style', 'transform: rotate(90deg);');
                servicesUl.style.display = "block";
            }
        });

        // Отображение списка тренингов
        trenings.addEventListener('click', () => {
            let treningsUl = document.querySelector('#treningsUl');
            if(treningsUl.style.display == "block") {
                treningsUl.style.display = "none";
                arrow[2].setAttribute('style', 'transform: rotate(0deg);');
            } else {
                arrow[2].setAttribute('style', 'transform: rotate(90deg);');
                treningsUl.style.display = "block";
            }
        });

        ///////////////////////////////////////////////////////
        // Подсписок Услуг
        let atestat = document.querySelector('#atestat');
        let kursi = document.querySelector('#kursi');
        let rk = document.querySelector('#rk');
        let spec = document.querySelector('#spec');

        // Услуги атестация
        var atestatUl = document.querySelector('#atestatUl');
        atestat.addEventListener('mouseover', () => {
            atestatUl.style.display = "block";
            arrow[1].setAttribute('style', 'transform: rotate(90deg);');
        });
        atestatUl.addEventListener('mouseover', () => {
            atestatUl.style.display = "block";
            arrow[1].setAttribute('style', 'transform: rotate(90deg);');
        });
        atestat.addEventListener('mouseout', () => {
            atestatUl.style.display = "none";
                arrow[1].setAttribute('style', 'transform: rotate(0deg);');
        });
        atestatUl.addEventListener('mouseout', () => {
            atestatUl.style.display = "none";
                arrow[1].setAttribute('style', 'transform: rotate(0deg);');
        });

        // Тренинги курсы
        var kursiUl = document.querySelector('#kursiUl');
        kursi.addEventListener('mouseover', () => {
            kursiUl.style.display = "block";
            arrow[3].setAttribute('style', 'transform: rotate(90deg);');
        });
        kursiUl.addEventListener('mouseover', () => {
            kursiUl.style.display = "block";
            arrow[3].setAttribute('style', 'transform: rotate(90deg);');
        });
        kursi.addEventListener('mouseout', () => {
            kursiUl.style.display = "none";
                arrow[3].setAttribute('style', 'transform: rotate(0deg);');
        });
        kursiUl.addEventListener('mouseout', () => {
            kursiUl.style.display = "none";
            arrow[3].setAttribute('style', 'transform: rotate(0deg);');
        });

        // Тренинги РК
        var rkUl = document.querySelector('#rkUl');
        rk.addEventListener('mouseover', () => {
            rkUl.style.display = "block";
            arrow[4].setAttribute('style', 'transform: rotate(90deg);');
        });
        rkUl.addEventListener('mouseover', () => {
            rkUl.style.display = "block";
            arrow[4].setAttribute('style', 'transform: rotate(90deg);');
        });
        rk.addEventListener('mouseout', () => {
            rkUl.style.display = "none";
                arrow[4].setAttribute('style', 'transform: rotate(0deg);');
        });
        rkUl.addEventListener('mouseout', () => {
            rkUl.style.display = "none";
            arrow[4].setAttribute('style', 'transform: rotate(0deg);');
        });

        // Тренинги spec
        var specUl = document.querySelector('#specUl');
        spec.addEventListener('mouseover', () => {
            specUl.style.display = "block";
            arrow[5].setAttribute('style', 'transform: rotate(90deg);');
        });
        specUl.addEventListener('mouseover', () => {
            specUl.style.display = "block";
            arrow[5].setAttribute('style', 'transform: rotate(90deg);');
        });
        spec.addEventListener('mouseout', () => {
            specUl.style.display = "none";
                arrow[5].setAttribute('style', 'transform: rotate(0deg);');
        });
        specUl.addEventListener('mouseout', () => {
            specUl.style.display = "none";
            arrow[5].setAttribute('style', 'transform: rotate(0deg);');
        });
class Zadanie {
    constructor(tytul, szczegoly) {
        this.tytul = tytul;
        this.szczegoly = szczegoly;
    }

    wyswietl() {
        return `<div class="task"><h3>${this.tytul}</h3><p>${this.szczegoly}</p></div>`;
    }
}

class ZadanieDomowe extends Zadanie {
    constructor(tytul, szczegoly) {
        super(tytul, szczegoly);
    }
}

class Praca extends Zadanie {
    constructor(tytul, szczegoly) {
        super(tytul, szczegoly);
    }
}

class Hobby extends Zadanie {
    constructor(tytul, szczegoly) {
        super(tytul, szczegoly);
    }
}

const form = document.getElementById('taskForm');
const tasksList = document.getElementById('tasksList');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const tytul = document.getElementById('taskTitle').value;
    const type = document.getElementById('taskType').value;
    const szczegoly = document.getElementById('taskDetails').value;

    let zadanie;

    switch (type) {
        case 'ZadanieDomowe':
            zadanie = new ZadanieDomowe(tytul, szczegoly);
            break;
        case 'Praca':
            zadanie = new Praca(tytul, szczegoly);
            break;
        case 'Hobby':
            zadanie = new Hobby(tytul, szczegoly);
            break;
        default:
            return;
    }

    tasksList.innerHTML += zadanie.wyswietl();
});

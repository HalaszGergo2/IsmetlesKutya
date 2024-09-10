export default class Kartya {
  //egyetlen kutya adatainak megjelenítése egy adott helyen
  //adattagok
  #kutyaAdat = {}; // objektum
  #szuloELEM; // html dom elem
  //constructor
  constructor(adat, szuloElem) {
    this.#kutyaAdat = adat;
    this.#szuloELEM = szuloElem;
    this.KutyaKiir();
    

    this.gombElem = $(".kiv:last");
    this.gombKattint();
  }
  //tagfüggvény
  KutyaKiir() {
    this.#szuloELEM.append(`
            <div class="card col-lg-4 col-md-6">
                <div class="card-body">
                    <h5 class="card-title">${this.#kutyaAdat.nev}</h5>
                    <p class="card-text">${this.#kutyaAdat.kor}</p>
                    <p>${this.#kutyaAdat.nem}</p>
                    <button class="kiv btn btn-success">Kiválaszt</button>
            </div>
        
            </div>`);
  }
  gombKattint() {
    this.gombElem.on("click", () => {
      console.log(this);
      // saját esemény létrehozása, hogy az adott objektum át tudjon adni magáról információkat
      const e = new CustomEvent("kivalaszt", { detail: this.#kutyaAdat });
      window.dispatchEvent(e);
    });
  }
}

//nyilfüggvény és a function névtelen függvény között a különbség a this használatában van.
// function esetén a this azt az elemet jelenti amelyik az eseményt kiváltotta.
// nyilfüggvény esetén a nyilfüggvényt körülölelő osztály példányára fog mutatni.

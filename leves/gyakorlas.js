import { kutyaKiir } from "./fuggveny.js";
import { kutyaLISTA } from "./adat.js";
import Kartya from "./Kartya.js";

let cim = "Minden, amit a kutyákról tudni kell"; //globális, blokkszintű{}
cim = "Minden ami kutya";
const nev = "Artúr"; //globális, blokkszintű{}
//nev="asd"

// var globális, függvény szintű

//írjuk ki a cím alá a cim változó tartalmát
const cimELEM = $("header");
cimELEM.append(`<p>${cim}</p>`);

//kutya adatait szeretném tárolni, név, kor, nem
const kutya1 = {
  nev: "Artúr",
  kor: 8,
  nem: "kan",
};

kutya1.nev = "Artúrka";



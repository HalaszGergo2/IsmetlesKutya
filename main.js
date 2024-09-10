import { kutyaLISTA } from "./model/adat.js";
import Kartyak from "./view/Kartyak.js";
import Kartya from "./view/Kartya.js"
const kivKutyaLista=[]


const tartalomELEM = $(".tartalom");
const kivalasztottELEM = $(".kivalasztott")
new Kartyak(kutyaLISTA, tartalomELEM)

$(window).on("kivalaszt",(event)=>{
    console.log(event.detail)
    kivKutyaLista.push(event.detail)
    console.log(kivKutyaLista)
    new Kartya(event.detail, kivalasztottELEM)
})
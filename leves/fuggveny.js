export function kutyaKiir(kutya) {
  const tartalomELEM = $(".tartalom");
  tartalomELEM.append(`
    <div class="card col-lg-4 col-md-6">
         <div class="card-body">
            <h5 class="card-title">${kutya.nev}</h5>
            <p class="card-text">${kutya.kor}</p>
            <p>${kutya.nem}</p>
            <button class="kiv btn btn-success">Kiválaszt</button>
        </div>
        
    </div>`);
}

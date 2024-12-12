let parentDiv = document.getElementById("parent");
let cardsInfos = [
    {
        imgUrl: "",
    },
    {
        imgUrl: "",
    },
    {
        imgUrl: "",
    },
    {
        imgUrl:  "",
    },
    {
        imgUrl: "",
    },
    {
        imgUrl: "",
    },
    {
        imgUrl: "",
    },
    {
        imgUrl: "",
    },
];
let cards = "";
for (let i = 0;i < cardsInfos.length;i++){
    let card = `  <div class="card">
            <h2>${cardsInfos[i].title}</h2>
        <div class="card-body">
            <img src="${cardsInfos[i].imgUrl}" alt="">
        </div>
        <div class="card-footer"></div>
          </div>`
          cards= cards + card;
}
parentDiv.innerHTML = cards;

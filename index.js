


// создать коллекцию карточек товаров на основе переменной games (вставлять в dom не 4 элемента, а один)
// прочитать https://learn.javascript.ru/modifying-document#document-fragment


// вынести логику рендера html в отдельную функция, например gameCardRender(params) - где params объект со свойствами id,image,name,price

const games = JSON.parse(goods).goods;
const container = document.querySelector('.container');

function getData(gamesData){
    let getDataContent = [];
    let context = document.createElement('div');
        context.classList.add("row", "row-cols-2", "row-cols-md-4", "test");
    gamesData.forEach(function(item){
        context.insertAdjacentHTML('afterbegin',`
        <div class="col-xs-4">
    <div id="${item.id}" class="card h-100 ml-2">
        <img src="${item.image}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title" id="battlefield3Title">${item.name}</h5>
            </div>
        <div class="card-footer">
            <small id="battlefield3Price" class="text-muted">${item.price} RUB </small>
        </div>
    </div>
    </div>`);
    getDataContent.push(context);
}
);
    return getDataContent;
};

container.append(...getData(games));
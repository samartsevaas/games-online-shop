
const games = JSON.parse(goods).goods;
const container = document.querySelector('.container');
const searchForm = document.querySelector('#searchForm');

function gameCardRender(params){
    const { name, id, image, price } = params;
    return (`
    <div class="col-xs-4">
    <div id="${id}" class="card h-100 ml-2">
        <img src="${image}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title" id="battlefield3Title">${name}</h5>
            </div>
        <div class="card-footer">
            <small id="battlefield3Price" class="text-muted">${price} RUB </small>
        </div>
    </div>
    </div>`);
}

function getData(gamesData){
    let getDataContent = [];
    let context = document.createElement('div');
        context.classList.add("row", "row-cols-2", "row-cols-md-4", "test");
    gamesData.forEach(function(params){
        context.insertAdjacentHTML('afterbegin',gameCardRender(params));
    getDataContent.push(context);
}
);
    return getDataContent;
};

container.append(...getData(games));


function searchingGames(event){
    let introduceGame = event.target.value.toLowerCase().trim();
    const resultSearch = games.filter((item)=>{
        return item.name.toLowerCase().trim().indexOf(introduceGame) > -1;
    })
    container.innerHTML = '';
    return container.append(...getData(resultSearch));
}

searchForm.addEventListener('input', searchingGames);
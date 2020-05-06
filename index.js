
const games = JSON.parse(goods).goods;
const container = document.querySelector('.container');
const searchForm = document.querySelector('#searchForm');
const sortByPrice = document.querySelector('#price');
const sortByDateRelease = document.querySelector('#release_date');


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

function getData(gamesData = []){
    let getDataContent = [];
    let context = document.createElement('div');
        context.classList.add("row", "row-cols-2", "row-cols-md-4");
    gamesData.forEach(function(params){
        context.insertAdjacentHTML('afterbegin',gameCardRender(params));
            getDataContent.push(context);
}
);
    return getDataContent;
};

container.append(...getData(games));

function initResult(results){
    container.innerHTML = '';
    return container.append(...getData(results));
}

function gamesNotFound (){
    container.innerHTML ='';
    const gamesNotFound = document.createElement('div');
    gamesNotFound.innerHTML = 'Games not found';
    return container.append(gamesNotFound);
}

function searchingGames(event){
    let introduceGame = event.target.value.toLowerCase().trim();
    const resultSearch = games.filter((item)=>{
        return item.name.toLowerCase().trim().indexOf(introduceGame) > -1;
    });
    if(resultSearch.length != 0){
        initResult(resultSearch);
    }else {
    gamesNotFound();
    }
}


function sortingBy (event, sortField ='price', games){
    event.preventDefault();
    const resultSortBy = games.sort((a,b)=>{
        if (a[sortField] > b[sortField]){
            return -1;
        }
        if (a[sortField] < b[sortField]){
            return 1;
        }
        return 0;
    })
    initResult(resultSortBy);
}

searchForm.addEventListener('input', searchingGames);
sortByPrice.addEventListener('click', () => sortingBy(event,'price', games));
sortByDateRelease.addEventListener('click',() => sortingBy(event,'date',games));


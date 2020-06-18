import '../styles/index.scss';
import '../js/pagination';
import data from '../goods.json';
import { container, searchForm, sortByPriceIncrease, sortByPriceDecrease, sortByDateRelease, pagination } from './consts';
export const games = data.goods;
import {addPagination, goPagination, activePage, highlight} from './pagination';
import {initResult , gameCardRender, getData} from './utils';

container.append(...getData(games));


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
    if(resultSearch.length){
        initResult(resultSearch, container);
    }else {
    gamesNotFound();
    }
}


function sortingByIncrease (event, sortField ='price', games){
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
    initResult(resultSortBy, container);
}
function sortingByDecrease (event, sortField ='price', games){
    event.preventDefault();
    const resultSortBy = games.sort((a,b)=>{
        if (a[sortField] < b[sortField]){
            return -1;
        }
        if (a[sortField] > b[sortField]){
            return 1;
        }
        return 0;
    })
    initResult(resultSortBy, container);
}




searchForm.addEventListener('input', searchingGames);
sortByPriceIncrease.addEventListener('click', () => sortingByIncrease(event,'price', games));
sortByPriceDecrease.addEventListener('click', () => sortingByDecrease(event,'price', games));
sortByDateRelease.addEventListener('click',() => sortingByIncrease(event,'date',games));
pagination.addEventListener('click', () => {
    activePage(event,games);
    goPagination(event, games);
});


pagination.innerHTML = addPagination(games);

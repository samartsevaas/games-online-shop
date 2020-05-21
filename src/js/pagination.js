import {initResult} from './utils';
import { container } from './consts';


export function addPagination(games){
    let numbersOfPage = Math.ceil((games.length/8));
    let addPagesLi = '';
    for(let i = 1; i <= numbersOfPage; i++){
        addPagesLi += (`<li class="page-item">
        <a class="page-link" href="#" data-page='${i}'>${i}</a>
        </li>
        `);
    }
    return addPagesLi;
}


export function goPagination(event, games){
    event.preventDefault();
    let target = event.target;
    const currentPage = target.dataset.page;
    const gamesTotalCount = 8;
    const setRange = currentPage * gamesTotalCount;
    const spliceGamesFirst = games.slice(setRange - gamesTotalCount,setRange);
    initResult(spliceGamesFirst, container);
}

export function activePage (event) {
    let target = event.target; 
    if (target.tagName != 'A') return;
    highlight(target); 
  }
  
let selectedPage;
export function highlight(test) {
    if (selectedPage) { 
          selectedPage.classList.remove('active');
    }
    selectedPage = test;
    test.classList.add('active');
  }

  
  
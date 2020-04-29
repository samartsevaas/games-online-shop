const container = document.querySelector('.container');
container.insertAdjacentHTML('afterbegin', `
<div class="row row-cols-2 row-cols-md-4">
        <div class=" col-xs-4">
          <div class="card h-100 ml-2">
            <img src="${games['goods'][1]['image']}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${games['goods'][1]['name']}</h5>
            </div>
            <div class="card-footer">
                <small class="text-muted">${games['goods'][1]['price']} RUB</small>
            </div>
          </div>
        </div>
        <div class=" col-xs-4">
          <div class="card h-100 ml-2">
            <img src="${games['goods'][0]['image']}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${games['goods'][0]['name']}</h5>
            </div>
            <div class="card-footer">
                <small class="text-muted">${games['goods'][0]['price']} RUB</small>
            </div>
          </div>
        </div>
        <div class=" col-xs-4">
          <div class="card h-100 ml-2">
            <img src="${games['goods'][2]['image']}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${games['goods'][2]['name']}</h5>
            </div>
            <div class="card-footer">
                <small class="text-muted">${games['goods'][2]['price']} RUB</small>
            </div>
          </div>
        </div>
        <div class=" col-xs-4">
          <div class="card h-100 ml-2">
            <img src="${games['goods'][3]['image']}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${games['goods'][3]['name']}</h5>
            </div>
            <div class="card-footer">
                <small class="text-muted">${games['goods'][3]['price']} RUB</small>
            </div>
          </div>
        </div>
        </div>`);


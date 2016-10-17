
// item image, name, price, and storefront
function renderSpace (searchList) {
    for (count = 0; count < searchList.results.length; count++) {
    var newHtml = `<div class="resultbox">
              <img src="${searchlist.results[count].Images[0].url_fullxfull}" alt="itemimage"/>
              <p>${searchlist.results[count].title}</p>
              <div class="shopnameprice">
                <span class="shopname">${searchlist.results[count].Shop.shop_name}</span>
                <span class="price">$${searchlist.results[count].price}</span>
              </div>
            </div>`
    };
    return newHtml;
};

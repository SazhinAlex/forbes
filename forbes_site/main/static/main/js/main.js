var store_items = document.getElementsByClassName("update-cart");

for (let el of store_items) {
    el.addEventListener("click", onOrder);
}

function onOrder(event) {
    event.target.disable = true;
    let order_btn = event.target;
    let product_id = order_btn.dataset.product;
    sendAddInfo(product_id)
    order_btn.disable = false;
}

function sendAddInfo(product_id) {
    let url = 'cart/add/';
    req_data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrf_token
        },
        body: JSON.stringify({'product_id': product_id})
    };
    fetch(url, req_data).then(
        ( responce ) => { return responce.json(); }
    ).then(
        ( data ) => {
            location.reload()
        }
    );
}
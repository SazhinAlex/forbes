var store_items = document.getElementsByClassName("update-cart");

for (let el of store_items) {
    el.addEventListener("click", onOrder);
}

function onOrder(event) {
    event.target.disable = true;
    let order_btn = event.target;
    let product_id = order_btn.dataset.product_id;
    let action = order_btn.dataset.action
    sendAddInfo(product_id, action)
    order_btn.disable = false;
}

function sendAddInfo(product_id, action) {
    let url = 'cart/update_cart/';
    req_data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrf_token
        },
        body: JSON.stringify({'product_id': product_id, 'action': action})
    };
    fetch(url, req_data)
    .then(responce => { return responce.json(); })
    .then(data => { on_responce(data) });
}

function on_responce(data) {
    location.reload();
}
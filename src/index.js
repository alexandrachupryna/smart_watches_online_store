let listOfGoods = [];

getListOfGoods();

function getListOfGoods() {
    try {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://5dc13cd095f4b90014ddcf52.mockapi.io/goods');

        xhr.responseType = 'json';

        xhr.send();

        xhr.onload = function() {   
            listOfGoods = xhr.response;
            createAdminPage(document.getElementById('app'), listOfGoods);
            const adminButton = document.getElementById('adminButton');
            adminButton.addEventListener('click', showAdminPage);
            const clientButton = document.getElementById('clientButton');
            clientButton.addEventListener('click', showClientPage);
            createClientPage(document.getElementById('app'), listOfGoods);
            const goodsItemForm = document.getElementById('goodsItemForm');
            goodsItemForm.addEventListener('submit', submitCreateForm);
            const changeItemButtons = document.querySelectorAll('.changeItem');
            for(const button of changeItemButtons) {
                button.addEventListener('click', openFormChange);
            }
            const changeItemForm = document.getElementById('changeItemForm');
            changeItemForm.addEventListener('submit', submitChangeForm);
            const deleteItemButtons = document.querySelectorAll('.deleteItem');
            for(const button of deleteItemButtons) {
                button.addEventListener('click', deleteItem);
            }
            const addItemButtons = document.querySelectorAll('.addItem');
            for(const button of addItemButtons) {
                button.addEventListener('click', addItemToCart);
            }
        };
    } catch(err) {
      alert(err);
    }
}

function createAdminPage(element, goods = []) {
    element.innerHTML = `<div id="admin">
        <button id="addButton" type="button" class="btn btn-outline-secondary mb-5 float-right" data-toggle="modal" data-target="#goodsItemFormModal">Add new</button>
        <table class="table table-hover mb-5">
            <tr>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Available</th>
                <th scope="col">Image</th>
                <th scope="col">Actions</th>
                </tr>
        </table>
    </div>`;

    for(const item of goods) {
        let newItem = document.createElement("tr");
        newItem.innerHTML = `<td class="col_id">${item.id}</td>
        <td class="col_name">${item.name}</td>
        <td class="col_desc">${item.desc}</td>
        <td class="col_price">$${item.price}</td>
        <td class="col_available text-center">${item.available ? '+': '-'}</td>
        <td class="col_img"><img src=${item.img} width="100"></td>
        <td class="d-flex justify-content-between">
        <button class="changeItem btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#changeItemFormModal"><i class="fas fa-edit"></i></button>
        <button class="deleteItem btn btn-outline-secondary" type="button"><i class="fas fa-times"></i></button></td>`;
        $('tbody').append(newItem);
    }
}

function submitCreateForm(e) {
    e.preventDefault();
    const id = ++listOfGoods.length;
    const name = document.querySelector('input#name').value;
    const desc = document.querySelector('textarea#desc').value;
    const price = document.querySelector('input#price').value;
    const available = document.querySelector('input#available').checked;
    const img = document.querySelector('input#image').value;

    let xhr = new XMLHttpRequest();

    let json = JSON.stringify({
        'id': id,
        'name': name,
        'desc': desc,
        'img': img,
        'available': available,
        'price': price
    });

    xhr.open("POST", 'https://5dc13cd095f4b90014ddcf52.mockapi.io/goods')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = () => getListOfGoods(); 
}

function openFormChange() {
    const item = $(this).closest('tr');
    $('#changeItemForm').find('#changeName').val($(item).find(".col_name").text());
    $('#changeItemForm').find('#changePrice').val($(item).find(".col_price").text().substring(1));
    const radiobuttons = $('#changeItemForm').find('input[name="changeAvailable"]');
    const isAvailable = ($(item).find(".col_available").text() === '+') ? "yes" : "no";
    for(const radio of radiobuttons) {
        if(radio.value == isAvailable) {
            $(radio).prop("checked", true);
        }
    }
    $('#changeItemForm').find('#changeImage').val($(item).find("img").attr('src'));
    $('#changeItemForm').find('#changeDesc').val($(item).find(".col_desc").html());
    const itemId = $(item).find(".col_id").text();
    $('#changeItemForm').data('id', +itemId);
}

function submitChangeForm(e) {
    e.preventDefault();
    const id = $('#changeItemForm').data('id');
    const name = document.querySelector('input#changeName').value;
    const desc = document.querySelector('textarea#changeDesc').value;
    const price = document.querySelector('input#changePrice').value;
    const available = document.querySelector('input#changeAvailable').checked;
    const img = document.querySelector('input#changeImage').value;

    let xhr = new XMLHttpRequest();

    let json = JSON.stringify({
        'id': id,
        'name': name,
        'desc': desc,
        'img': img,
        'available': available,
        'price': price
    });

    xhr.open("PUT", `https://5dc13cd095f4b90014ddcf52.mockapi.io/goods/${id}`);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = () => getListOfGoods(); 
}

function deleteItem() {
    const id = $(this).closest('tr').find(".col_id").text();
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", `https://5dc13cd095f4b90014ddcf52.mockapi.io/goods/${id}`);
    xhr.send();
    xhr.onload = () => getListOfGoods(); 
}

function createClientPage(element, goods = []) {
    element.innerHTML += `<div id="client">
        <div class="clearfix">
        <button id="cart" type="button" class="btn btn-outline-secondary mb-5 float-right" data-toggle="modal" data-target="#shoppingCartModal">
            <i class="fas fa-shopping-basket"></i> <span id="totalPrice">$0</span>
        </button>
        </div>
    </div>`;

    for(const item of goods) {
        let newItem = document.createElement("div");
        $(newItem).addClass('goods row border border-secondary rounded mb-5 p-3');
        $(newItem).data('id', item.id);
        newItem.innerHTML = `<div class="goods_img col"><img src=${item.img} width="200"></div>
        <div class="goods_info col-8">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
        </div>
        <div class="goods_p col">
            <div class="goods_price text-center">$${item.price}</div>
            <div class="text-center">${item.available ? 'available': 'not available'}</div>
        </div>`;
        if(item.available) {
            $(newItem).find('.goods_p').append('<button class="addItem btn btn-outline-secondary mx-auto d-block" type="button"><i class="fas fa-shopping-basket"></i></button>');
        }
        $('#client').append(newItem);
    }
}

function addItemToCart() {
    const price = +$(this).closest('.goods').find('.goods_price').text().substr(1);
    const totalPrice = +$('#totalPrice').text().substr(1) + price;
    $('#totalPrice').text(`$${totalPrice.toFixed(2)}`);
    const name = $(this).closest('.goods').find('h3').text();
    if($('#shoppingCart').children('.empty')) {
        $('.empty').remove();
    }
    let id = $(this).closest('.goods').data('id');
    
    if($('#shoppingCart').find(`.addedItem${id}`).length > 0) {
        let amount = +$('#shoppingCart').find(`.addedItem${id}`).find('.addedAmount').text();
        $('#shoppingCart').find(`.addedItem${id}`).find('.addedAmount').text(++amount);
    } else {
        const newAddedItem = document.createElement("div");
        newAddedItem.innerHTML = `<p class="row"><span class="col-sm-10">${name}</span><span class="addedAmount col-sm-2">1</span></p>`;
        $(newAddedItem).addClass(`addedItem${id}`);
        $('#shoppingCart').append(newAddedItem);
    }
}

function showAdminPage() {
    $("#admin").css('display', 'block');
    $("#client").css('display', 'none');
}

function showClientPage() {
    $("#admin").css('display', 'none');
    $("#client").css('display', 'block');
}

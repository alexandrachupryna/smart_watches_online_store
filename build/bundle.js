/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var listOfGoods = [];
getListOfGoods();

function getListOfGoods() {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://5dc13cd095f4b90014ddcf52.mockapi.io/goods');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function () {
      listOfGoods = xhr.response;
      createAdminPage(document.getElementById('app'), listOfGoods);
      var adminButton = document.getElementById('adminButton');
      adminButton.addEventListener('click', showAdminPage);
      var clientButton = document.getElementById('clientButton');
      clientButton.addEventListener('click', showClientPage);
      createClientPage(document.getElementById('app'), listOfGoods);
      var goodsItemForm = document.getElementById('goodsItemForm');
      goodsItemForm.addEventListener('submit', submitCreateForm);
      var changeItemButtons = document.querySelectorAll('.changeItem');
      console.log(changeItemButtons);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = changeItemButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var button = _step.value;
          button.addEventListener('click', openFormChange);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var changeItemForm = document.getElementById('changeItemForm');
      changeItemForm.addEventListener('submit', submitChangeForm);
      var deleteItemButtons = document.querySelectorAll('.deleteItem');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = deleteItemButtons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _button = _step2.value;

          _button.addEventListener('click', deleteItem);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var addItemButtons = document.querySelectorAll('.addItem');
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = addItemButtons[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _button2 = _step3.value;

          _button2.addEventListener('click', addItemToCart);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    };
  } catch (err) {
    alert(err);
  }
}

function createAdminPage(element) {
  var goods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  element.innerHTML = "<div id=\"admin\">\n        <button id=\"addButton\" type=\"button\" class=\"btn btn-outline-secondary mb-5 float-right\" data-toggle=\"modal\" data-target=\"#goodsItemFormModal\">Add new</button>\n        <table class=\"table table-hover mb-5\">\n            <tr>\n                <th scope=\"col\">Code</th>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">Description</th>\n                <th scope=\"col\">Price</th>\n                <th scope=\"col\">Available</th>\n                <th scope=\"col\">Image</th>\n                <th scope=\"col\">Actions</th>\n                </tr>\n        </table>\n    </div>";
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = goods[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var item = _step4.value;
      var newItem = document.createElement("tr");
      newItem.innerHTML = "<td class=\"col_id\">".concat(item.id, "</td>\n        <td class=\"col_name\">").concat(item.name, "</td>\n        <td class=\"col_desc\">").concat(item.desc, "</td>\n        <td class=\"col_price\">$").concat(item.price, "</td>\n        <td class=\"col_available text-center\">").concat(item.available ? '+' : '-', "</td>\n        <td class=\"col_img\"><img src=").concat(item.img, " width=\"100\"></td>\n        <td class=\"d-flex justify-content-between\">\n        <button class=\"changeItem btn btn-outline-secondary\" type=\"button\" data-toggle=\"modal\" data-target=\"#changeItemFormModal\"><i class=\"fas fa-edit\"></i></button>\n        <button class=\"deleteItem btn btn-outline-secondary\" type=\"button\"><i class=\"fas fa-times\"></i></button></td>");
      $('tbody').append(newItem);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
}

function submitCreateForm(e) {
  e.preventDefault();
  var id = ++listOfGoods.length;
  var name = document.querySelector('input#name').value;
  var desc = document.querySelector('textarea#desc').value;
  var price = document.querySelector('input#price').value;
  var available = document.querySelector('input#available').checked;
  var img = document.querySelector('input#image').value;
  var xhr = new XMLHttpRequest();
  var json = JSON.stringify({
    'id': id,
    'name': name,
    'desc': desc,
    'img': img,
    'available': available,
    'price': price
  });
  xhr.open("POST", 'http://5dc13cd095f4b90014ddcf52.mockapi.io/goods');
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(json);

  xhr.onload = function () {
    return getListOfGoods();
  };
}

function openFormChange() {
  var item = $(this).closest('tr');
  $('#changeItemForm').find('#changeName').val($(item).find(".col_name").text());
  $('#changeItemForm').find('#changePrice').val($(item).find(".col_price").text().substring(1));
  var radiobuttons = $('#changeItemForm').find('input[name="changeAvailable"]');
  var isAvailable = $(item).find(".col_available").text() === '+' ? "yes" : "no";
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = radiobuttons[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var radio = _step5.value;

      if (radio.value == isAvailable) {
        $(radio).prop("checked", true);
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  $('#changeItemForm').find('#changeImage').val($(item).find("img").attr('src'));
  $('#changeItemForm').find('#changeDesc').val($(item).find(".col_desc").html());
  var itemId = $(item).find(".col_id").text();
  $('#changeItemForm').data('id', +itemId);
}

function submitChangeForm(e) {
  e.preventDefault();
  var id = $('#changeItemForm').data('id');
  var name = document.querySelector('input#changeName').value;
  var desc = document.querySelector('textarea#changeDesc').value;
  var price = document.querySelector('input#changePrice').value;
  var available = document.querySelector('input#changeAvailable').checked;
  var img = document.querySelector('input#changeImage').value;
  var xhr = new XMLHttpRequest();
  var json = JSON.stringify({
    'id': id,
    'name': name,
    'desc': desc,
    'img': img,
    'available': available,
    'price': price
  });
  xhr.open("PUT", "http://5dc13cd095f4b90014ddcf52.mockapi.io/goods/".concat(id));
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(json);

  xhr.onload = function () {
    return getListOfGoods();
  };
}

function deleteItem() {
  var id = $(this).closest('tr').find(".col_id").text();
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", "http://5dc13cd095f4b90014ddcf52.mockapi.io/goods/".concat(id));
  xhr.send();

  xhr.onload = function () {
    return getListOfGoods();
  };
}

function createClientPage(element) {
  var goods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  element.innerHTML += "<div id=\"client\">\n        <div class=\"clearfix\">\n        <button id=\"cart\" type=\"button\" class=\"btn btn-outline-secondary mb-5 float-right\" data-toggle=\"modal\" data-target=\"#shoppingCartModal\">\n            <i class=\"fas fa-shopping-basket\"></i> <span id=\"totalPrice\">$0</span>\n        </button>\n        </div>\n    </div>";
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = goods[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var item = _step6.value;
      var newItem = document.createElement("div");
      $(newItem).addClass('goods row border border-secondary rounded mb-5 p-3');
      $(newItem).data('id', item.id);
      newItem.innerHTML = "<div class=\"goods_img col\"><img src=".concat(item.img, " width=\"200\"></div>\n        <div class=\"goods_info col-8\">\n            <h3>").concat(item.name, "</h3>\n            <p>").concat(item.desc, "</p>\n        </div>\n        <div class=\"goods_p col\">\n            <div class=\"goods_price text-center\">$").concat(item.price, "</div>\n            <div class=\"text-center\">").concat(item.available ? 'available' : 'not available', "</div>\n        </div>");

      if (item.available) {
        $(newItem).find('.goods_p').append('<button class="addItem btn btn-outline-secondary mx-auto d-block" type="button"><i class="fas fa-shopping-basket"></i></button>');
      }

      $('#client').append(newItem);
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
        _iterator6["return"]();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }
}

function addItemToCart() {
  var price = +$(this).closest('.goods').find('.goods_price').text().substr(1);
  var totalPrice = +$('#totalPrice').text().substr(1) + price;
  $('#totalPrice').text("$".concat(totalPrice.toFixed(2)));
  var name = $(this).closest('.goods').find('h3').text();

  if ($('#shoppingCart').children('.empty')) {
    $('.empty').remove();
  }

  var id = $(this).closest('.goods').data('id');

  if ($('#shoppingCart').find(".addedItem".concat(id)).length > 0) {
    var amount = +$('#shoppingCart').find(".addedItem".concat(id)).find('.addedAmount').text();
    $('#shoppingCart').find(".addedItem".concat(id)).find('.addedAmount').text(++amount);
  } else {
    var newAddedItem = document.createElement("div");
    newAddedItem.innerHTML = "<p class=\"row\"><span class=\"col-sm-10\">".concat(name, "</span><span class=\"addedAmount col-sm-2\">1</span></p>");
    $(newAddedItem).addClass("addedItem".concat(id));
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
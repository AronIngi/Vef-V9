import { formatNumber } from './helpers.js';

function removeCartLine(line)
{
	
}

function submitHandler(event)
{
	event.preventDefault();
}


export function createCartLine(product, quantity) {
  // TODO útfæra þannig að búin sé til lína í körfu á forminu:

  /*
  <tr data-cart-product-id="1">
    <td>HTML húfa</td>
    <td>1</td>
    <td><span class="price">5.000 kr.-</span></td>
    <td><span class="price">5.000 kr.-</span></td>
    <td>
      <form class="remove" method="post">
        <button>Eyða</button>
      </form>
    </td>
  </tr>
  */

  const cartLineElement = document.createElement('tr');
  const cartLineTitleElement = document.createElement('td');
  const cartLineQuantityElement = document.createElement('td');
  const cartLinePriceElement = document.createElement('td');
  const cartLineTotalElement = document.createElement('td');
  const spanPrice = document.createElement('span');
  const spanTotal = document.createElement('span');
  const cartLineRemoveElement = document.createElement('td');
  const removeForm = document.createElement('form');
  const removeButton = document.createElement('button');

  spanPrice.classList.add('price');
  spanTotal.classList.add('price');
  removeForm.classList.add('remove');
  removeForm.method = "post";
  
  cartLineTitleElement.textContent = product.title;
  cartLineQuantityElement.textContent = quantity;
  spanPrice.textContent = formatNumber(product.price);
  spanTotal.textContent = formatNumber(quantity*product.price);
  removeButton.textContent = 'Eyða!';
  
  cartLineElement.appendChild(cartLineTitleElement);
  cartLineElement.appendChild(cartLineQuantityElement);
  cartLineElement.appendChild(cartLinePriceElement);
  cartLinePriceElement.appendChild(spanPrice);
  cartLineElement.appendChild(cartLineTotalElement);
  cartLineTotalElement.appendChild(spanTotal);
  cartLineElement.appendChild(cartLineRemoveElement);
  cartLineRemoveElement.appendChild(removeForm);
  removeForm.appendChild(removeButton);

  // TODO hér þarf að búa til eventListener sem leyfir að eyða línu úr körfu
  removeForm.addEventListener('submit', submitHandler);

  return cartLineElement;
}

/**
 * Sýna efni körfu eða ekki.
 * @param {boolean} show Sýna körfu eða ekki
 */
export function showCartContent(show = true) {
  // Finnum element sem inniheldur körfuna
  const cartElement = document.querySelector('.cart');

  if (!cartElement) {
    console.warn('fann ekki .cart');
    return;
  }

  const emptyMessage = cartElement.querySelector('.empty-message');
  const cartContent = cartElement.querySelector('.cart-content');

  if (!emptyMessage || !cartContent) {
    console.warn('fann ekki element');
    return;
  }

  if (show) {
    emptyMessage.classList.add('hidden');
    cartContent.classList.remove('hidden');
  } else {
    emptyMessage.classList.remove('hidden');
    cartContent.classList.add('hidden');
  }
}

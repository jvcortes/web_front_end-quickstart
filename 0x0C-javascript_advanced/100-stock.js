let stock = {
  macbook: 2,
  iphone: 4
}

function processPayment (itemName) {
  stock[itemName]--;
  console.log('Payment is being processed for item ' + itemName)
}

function processError (itemName) {
  console.log('No more ' + itemName + ' in stock');
  console.log('Payment is not being processed');
}

function processOrder (itemName, callbackPayment, callbackError) {
  console.log('Verifyng the stock of ' + itemName);
  if (stock[itemName] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

while (true) {
  let names = {
    Macbook: 'macbook',
    iPhone: 'iphone'
  }
  let product = window.prompt('Please enter the item you would like to purchase (Macbook, iPhone)');

  if (product in names) {
    processOrder(names[product], processPayment, processError);
  } else {
    console.log('The requested item is not offered.')
  }
}


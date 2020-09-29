function createElement (data) {
  document.querySelector('body').innerHTML += `<p>${data}</p>`
}

function queryWikipedia(callback) {
  let r = new XMLHttpRequest();

  r.onreadystatechange = function () {
    if (r.readyState = XMLHttpRequest.DONE) {
      result = JSON.parse(r.responseText)
      callback(result.query.pages[21721040].extract)
    }
  }

  r.open(
    'GET',
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
  )
  r.send()

}

queryWikipedia(createElement);

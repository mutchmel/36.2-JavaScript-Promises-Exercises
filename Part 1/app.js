let favNumber = 3;
let url = "http://numbersapi.com";

$.getJSON(`${url}/${favNumber}?json`).then(data => {
  console.log(data);
});

let favNumbers = [42, 63, 10];
$.getJSON(`${url}/${favNumbers}?json`).then(data => {
  console.log(data);
});

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${url}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});

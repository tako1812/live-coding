'use strict'

const btnAdd = document.querySelector('.btn-add');
const btnToggle = document.querySelector(".btn-toggle");
const form = document.querySelector(".form");


btnAdd.addEventListener('click', function() {
    window.location.href="cards.html";
});

const renderIPaddress = async function () {
    const res = await fetch(
      "http://ip-api.com/json/24.48.0.1"
    );
    const datas = await res.json();
    console.log(datas);

    const html= `
    <label>${datas.country}</label>
    <input type="number" placeholder="${datas.query}"></input>
    `;
    form.innerHTML =" ";
    form.insertAdjacentHTML("afterbegin", html);
    
};
btnToggle.addEventListener('click', renderIPaddress);
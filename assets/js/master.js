const container = document.querySelector('article');
const btnTab = document.querySelectorAll('ul.tab li');
btnTab.forEach((btn, key) => {
  btn.onclick = function () {
    let tabContent = document.querySelector(btn.parentElement.dataset.target);
    let tabItem = tabContent.querySelectorAll('.tab-item');

    switch (parseInt(tabItem[key].id)) {
      case 1:
        if (tabItem[key].classList.contains('d-none')) {
          tabItem[key].classList.remove('d-none');
          tabItem[key].nextElementSibling.classList.add('d-none');
          tabItem[key].nextElementSibling.nextElementSibling.classList.add(
            'd-none'
          );
          tabItem[key].nextElementSibling.nextElementSibling.classList.add(
            'd-none'
          );
          tabItem[
            key
          ].nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
            'd-none'
          );
        }
        break;

      case 2:
        if (tabItem[key].classList.contains('d-none')) {
          tabItem[key].classList.remove('d-none');
          tabItem[key].previousElementSibling.classList.add('d-none');
          tabItem[key].nextElementSibling.classList.add('d-none');
          tabItem[key].nextElementSibling.nextElementSibling.classList.add(
            'd-none'
          );
        }
        break;

      case 3:
        if (tabItem[key].classList.contains('d-none')) {
          tabItem[key].classList.remove('d-none');
          tabItem[key].previousElementSibling.classList.add('d-none');
          tabItem[
            key
          ].previousElementSibling.previousElementSibling.classList.add(
            'd-none'
          );
          tabItem[key].nextElementSibling.classList.add('d-none');
        }
        break;

      case 4:
        if (tabItem[key].classList.contains('d-none')) {
          tabItem[key].classList.remove('d-none');
          tabItem[key].previousElementSibling.classList.add('d-none');
          tabItem[
            key
          ].previousElementSibling.previousElementSibling.classList.add(
            'd-none'
          );
          tabItem[
            key
          ].previousElementSibling.previousElementSibling.previousElementSibling.classList.add(
            'd-none'
          );
        }
        break;
    }
  };
});

// form buat artikel
const formArticle = document.querySelector('form.article'),
  btnFormArticle = formArticle.querySelector('button');

const { judul, isi, date, time } = formArticle;
let randId = [];
let no = 1;

while (no <= parseInt(localStorage.length)) {
  randId.push(no);
  no++;
}

btnFormArticle.onclick = function (e) {
  this.onsubmit = createArticle();
  e.preventDefault();
};

function createArticle() {
  let datetime, myform;

  if (judul.value == '' || judul.value == null) {
    alert('Silahkan masukan judul artikelnya');
  } else if (isi.value == '' || isi.value == null) {
    alert('Silahkan masukan isi artikelnya');
  } else if (date.value == '' || date.value == null) {
    alert('Silahkan masukan tanggal artikelnya');
  } else if (time.value == '' || time.value == null) {
    alert('Silahkan masukan waktu artikelnya');
  } else {
    let datex = date.value.split('-');
    let d = new Date();
    datetime = `${parseInt(datex[1])}/${datex[2]}/${datex[0]}, ${
      time.value
    }:${d.getSeconds()}`;

    myform = {
      judul: judul.value,
      isi: isi.value,
      datetime,
    };

    if (localStorage.length < 1) {
      localStorage.setItem(localStorage.length + 1, JSON.stringify(myform));
    } else {
      localStorage.setItem(localStorage.length + 1, JSON.stringify(myform));
    }

    location.reload();
  }
}

const articleContent = document.querySelector('.article-content');

randId.forEach((item) => {
  let parsed = JSON.parse(localStorage.getItem(item));

  if (parsed !== null) {
    articleContent.innerHTML += createNewArticle(parsed);
  }
});

// localStorage.clear();

function createNewArticle(content) {
  const { judul, isi, datetime } = content;

  return /*html*/ `
      <article class="bg-gray-50 border border-transparent shadow-md rounded-md p-2 w-full my-3">
        <div class="card-header">
          <h1 class="text-2xl">${judul}</h1>
          <sub><time datetime="${datetime}"></time></sub>
        </div>
        <div class="card-body">${isi}</div>
      </article>
    `;
}

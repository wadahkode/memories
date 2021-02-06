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
        }

      case 2:
        if (tabItem[key].classList.contains('d-none')) {
          tabItem[key].classList.remove('d-none');
          tabItem[key].previousElementSibling.classList.add('d-none');
          tabItem[key].nextElementSibling.classList.add('d-none');
        }

      case 3:
        if (tabItem[key].classList.contains('d-none')) {
          tabItem[key].classList.remove('d-none');
          tabItem[key].previousElementSibling.classList.add('d-none');
          tabItem[
            key
          ].previousElementSibling.previousElementSibling.classList.add(
            'd-none'
          );
        }
    }
  };
});

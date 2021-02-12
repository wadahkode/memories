/**
 * Dokumentasi
 *
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 1.1.81
 * @license MIT
 */
const container = document.querySelector('main');
let statusElement = false;

function main(e) {
  let el = document.querySelector(e.target.hash);

  if (el !== '') {
    elementForPrinted(el.id).then((response) => {
      if (response !== null) {
        statusElement = true;
        container.innerHTML = `
          <div class="bg-white dark:bg-transparent rounded shadow-2xl dark:shadow-md mt-6 col-start-1 col-span-2 p-4 md:dark:bg-transparent md:col-start-2 md:col-span-4 md:mt-2 md:px-6 md:pb-20 md:pt-6">
            ${response}
          </div>
        `;
      }
    });
  }
}

async function elementForPrinted(id) {
  switch (id) {
    case 'how-to-install':
      return await howToInstall(id);
  }
}

function howToInstall(id) {
  let el = document.getElementById(id);

  return el.innerHTML;
}

document.querySelectorAll('a').forEach((item) => {
  item.onclick = (e) => main(e);
});

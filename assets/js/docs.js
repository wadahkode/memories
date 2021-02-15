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
    const printed = elementForPrinted(el.id);

    printed.then((response) => {
      if (response !== null) {
        statusElement = true;
        container.innerHTML = `
          <div class="bg-white dark:bg-transparent rounded shadow-2xl dark:shadow-md mt-6 col-start-1 col-span-2 px-4 pt-4 pb-20 md:dark:bg-transparent md:col-start-2 md:col-span-4 md:mt-2 md:px-6 md:pb-20 md:pt-6 sm:col-start-1 sm:col-span-4">
            ${response}
          </div>
        `;
      }
    });
  }
}

async function elementForPrinted(id) {
  let content;

  switch (id) {
    case 'how-to-install':
      content = await howToInstall(id);
      break;

    case 'about-me':
      content = await aboutMe(id);
      break;

    case 'timeago':
      content = await timeAgo(id);
      break;
    case 'expired':
      content = await expired(id);
      break;
    case 'schedule':
      content = await schedule(id);
      break;
    case 'countdown':
      content = await countdown(id);
      break;
    case 'birthday':
      content = await birthday(id);
      break;
  }

  return content;
}

const aboutMe = async (id) => document.getElementById(id).innerHTML;

const howToInstall = async (id) => document.getElementById(id).innerHTML;

const timeAgo = async (id) => document.getElementById(id).innerHTML;
const expired = async (id) => document.getElementById(id).innerHTML;
const schedule = async (id) => document.getElementById(id).innerHTML;
const countdown = async (id) => document.getElementById(id).innerHTML;
const birthday = async (id) => document.getElementById(id).innerHTML;

document.querySelectorAll('a').forEach((item) => {
  item.onclick = (e) => {
    container.scroll({ top: 0, behavior: 'smooth' });
    main(e);
  };
});

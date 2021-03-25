const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

// search by song or artist

async function searchSongs(term) {
  await fetch(`${apiURL}/suggest/${term}`)
    .then((res) => res.json())
    .then((data) => console.log('data', data));
}

// event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();
  if (!searchTerm) {
    alert('Please type in a serach term');
  } else {
    searchSongs(searchTerm);
  }
});

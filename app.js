
async function getUsers() {
  try {
  let response = await fetch('https://randomuser.me/api/?results=2', {
    method: 'GET',
  });
  let jsonResponse = await response.json();
  return jsonResponse;
  }
  catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = '';
  Array.from(users.results).forEach(user => {
    let htmlRender =
    `<div class="user">
      <img src = "${user.picture.medium}">
      <h2>${user.name.first} ${user.name.last}</h2>
      <div class="email">
        <a href="email:${user.email}">${user.email}</a>
      </div>
    </div>`;
    html += htmlRender;
  });
  let container = document.querySelector('.container');
  container.innerHTML = html;
}
renderUsers()
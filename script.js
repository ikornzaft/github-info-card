const profileDiv = document.querySelector('.profile');

async function getProfile() {
  const url = 'https://api.github.com/users/ikornzaft';
  const response = await fetch(url);
  const result = await response.json();
  console.log(result.bio);
  document.getElementById('profile-pic').src = `${result.avatar_url}`;
  document.getElementById('name').textContent = `${result.name}`;
  document.getElementById('user').textContent = `${result.login}`;
  document.getElementById('repos').textContent = `${result.public_repos}`;
  document.getElementById('gists').textContent = `${result.public_gists}`;
  document.getElementById('followers').textContent = `${result.followers}`;

  //.appendChild(document.createElement('img').src=`${result.avatar_url}`);
  return result;
};

getProfile();
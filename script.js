const url = "https://api.github.com/users/";
const searchInputEl = document.getElementById("input");
const searchButtonEl = document.getElementById("button"); 
const proFile = document.getElementById("contProfile");

const fetchProfile = async() => {
    const userName = input.value;
    
    try{
        const response = await fetch (url + userName);
        const profile = await response.json();
        let card = `<div class="profile-box">
<div class="top-section">
  <div class="left">
    <div class="avatar">
      <img alt="avatar" src="${profile.avatar_url}" />
    </div>
    <div class="self">
      <h1>${profile.name}</h1>
      <h1>@${profile.login}</h1>
    </div>
  </div>
  <a href="${profile.html_url}" target="_black">
  <button class="btn1">Check Profile</button>
  </a>
</div>

<div class="about">
  <h2>About</h2>
  <p>
  ${profile.bio}
  </p>
</div>
<div class="status">
  <div class="status-item">
    <h3>Followers</h3>
    <p>${profile.followers}</p>
  </div>
  <div class="status-item">
    <h3>Followings</h3>
    <p>${profile.following}</p>
  </div>
  <div class="status-item">
    <h3>Repos</h3>
    <p>${profile.public_repos}</p>
  </div>
</div>
</div>`;
        // console.log(data);
        proFile.innerHTML = card;
    }catch(error){
        const card1 = `<div class="error"><h1>NO DATA FOUND</h1></div>`;
        proFile.innerHTML = card1;
        console.log("error to you");
    }

};

searchButtonEl.addEventListener("click", fetchProfile );

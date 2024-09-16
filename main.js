const api_url = "https://api.jikan.moe/v4";
const searchText = document.querySelector("#searchText");
const searchResults = document.querySelector("#searchResults");
searchText.addEventListener("keyup", function () {
  if (this.value.length > 3) {
    getAnimes(this.value);
  }
});
//search the animes by keywards
async function getAnimes(query) {
  const response = await fetch(`${api_url}/anime?q=${query}`);
  const animes = await response.json();
  console.log(animes.data);
  console.log(animes);

  if (animes.data.length > 0) {
    searchResults.style.display = "block";
    // Clear previous results
    searchResults.innerHTML = ``;
    // Append each anime title to the searchResults list
    animes.data.map((anime) => {
      searchResults.innerHTML += `

   <li class="singleAnimes" data-image="${anime.images.jpg.image_url}" >
   <a href="${anime.url}"target="_blank">${anime.title}</a>
   </li>

   `;
    });
    const singleAnimes = Array.from(document.querySelectorAll(".singleAnimes"));
    const displayImage = document.querySelector("#displayImage");
    singleAnimes.map((singleAnime) => {
      singleAnime.addEventListener("mouseenter", function () {
        displayImage.style.display = "block";
        displayImage.innerHTML = `<img src="${this.dataset.image}" />`;
      });
      singleAnime.addEventListener("mouseout", function () {
        displayImage.style.display = "none";
      });
      singleAnime.addEventListener("click", function () {
        displayImage.style.display = "none";
      });
    });
  }
}
// get top tv anime
const topTvAnime = document.querySelector("#topTvAnime");
async function getTopAnime() {
  const results = await fetch(`${api_url}/top/anime`);
  const topAnimes = await results.json();
  console.log(topAnimes.data);
  topAnimes.data.map((topAnime) => {
    topTvAnime.innerHTML += `
    
    
    <div class="col-lg-3 col-md-6">
            <div class="item">
              <div class="thumb">
                <a href="${topAnime.url}"target="_blank""</a>
                  ><img src="${topAnime.images.jpg.image_url}"
                /></a>
                <span class="price">${topAnime.score}</span>
              </div>
              <div class="down-content">
                <span class="category">${topAnime.source}</span>
                <h4>${topAnime.title}</h4>
              
            
              </div>
            </div>
          </div>
    
    
    
    
    
    
    
    `;
  });
}
getTopAnime();
//up Coming Series
const upcomingSeries = document.querySelector("#upcomingSeries");
async function getUpcomingSeries() {
  const results = await fetch(`${api_url}/seasons/now`);
  const upcomingSerieses = await results.json();
  upcomingSerieses.data.map((item) => {
    upcomingSeries.innerHTML += `
    
    
    <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="item">
              <div class="thumb">
                <a href="${item.url}"target="_blank""</a>
                  ><img src="${item.images.jpg.image_url}"
                /></a>
              </div>
              <div class="down-content">
                <span class="category">${item.source}</span>
                <h4>${item.title}</h4>
               
              </div>
            </div>
          </div>
    
    `;
  });
}
getUpcomingSeries();

//get Top Categories
const topCategory = document.querySelector("#topCategory");
async function getTopCategory() {
  const results = await fetch(`${api_url}/magazines`);
  const topCategories = await results.json();
  console.log(topCategories);
  topCategories.data.map((item) => {
    topCategory.innerHTML += `
    
    
  
    <div class="col-lg col-sm-6 col-xs-12">
            <div class="item">
              <h4>${item.name}</h4>
              <div class="thumb">
                 <a href="${item.url}"target="_blank"</a>
                  ><img src="assets/images/categories-01.jpg" alt=""
                /></a>
              </div>
            </div>
          </div>
    
    `;
  });
}
getTopCategory();
//----------------
const randomCharacter = document.querySelector("#randomCharacter");
async function getrandomCharacter() {
  const response = await fetch(`${api_url}/random/characters`);
  const RCD = await response.json();
  console.log(RCD);
  randomCharacter.innerHTML = `
  <img src="${RCD.data.images.jpg.image_url}"
   <span class="price">${RCD.data.favorites}</span>
              <span class="name">${RCD.data.name}</span>
  
  `;
}
getrandomCharacter();

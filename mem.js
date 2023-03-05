const loadMem = () => {
  const url = `https://meme-api.com/gimme/6`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.memes));
};

const displayData = (data) => {
  console.log(data);
  const section = document.getElementById("section");
  data.forEach((value) => {
    const div = document.createElement("div");
    div.innerHTML=`
    <div class="card card-compact w-full h-[60%] bg-base-100 shadow-xl">
  <figure><img src="${value.url}"></figure>
</div>
    `
section.appendChild(div)
  });
};

loadMem();






// div.innerHTML = `
// <img src="${value.url}" alt="" class=w-full>
// `;
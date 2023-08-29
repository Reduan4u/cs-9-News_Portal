const handleCategory = async () => {

    const response = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
    const data = await response.json();
    const tabContainer = document.getElementById('tab-container');
    const trimmedData = data.data.news_category.slice(0, 3);
    //console.log(trimmedData);

    trimmedData.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>
        `;
        tabContainer.appendChild(div);
    });
};

const handleLoadNews = async (categoryId) => {
    //console.log(categoryId);
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    data.data?.forEach((news) => {
        console.log(news);
        const div = document.createElement("div")

        div.innerHTML = `
<div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src=${news?.image_url} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        ${news.title.slice(0, 45)}
                        <div class="badge badge-secondary">View:${news.total_view}</div>
                    </h2>
                    <p>${news.details.slice(0, 120)}</p>
                    <p class="bg-sky-50 w-3/5 rounded-lg px-2">${news.author.published_date}</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">${news.rating.number}</div>
                        <div class="badge badge-outline">${news.rating.badge}</div>
                    </div>
                </div>
            </div>
`;
        cardContainer.appendChild(div);

    });
};


const handleModal = (data) => {
    const modal = document.getElementById("modal-container");
    const div = document.createElement("div");
    div.innerHTML = `
<!-- Open the modal using ID.showModal() method -->
<dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
`
    console.log(data)
}



handleCategory();
handleLoadNews("01")
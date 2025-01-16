const food = document.querySelector(".food");
let india = document.querySelector("#Indian");
let canada = document.querySelector("#Canadian");
let america = document.querySelector("#American");
let thai = document.querySelector("#Thai");
let british = document.querySelector("#British");
let russia = document.querySelector("#Russian");
let recipe;

const fetchData = async (area) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  const data = await response.json();
  recipe = data.meals;
  showData(recipe);
};

let showData = (recipe) => {
  food.innerHTML = recipe
    .map(
      (meal) => `
      <div class="pic">
      <div class="name">
      <img src=${meal.strMealThumb} " />
      <h5>${meal.strMeal}</h5>
      </div>
      </div>
      `
    )
    .join(" ");
};

fetchData("indian");

india.addEventListener("click", () => {
  fetchData("indian");
});
canada.addEventListener("click", () => {
  fetchData("canadian");
});
america.addEventListener("click", () => {
  fetchData("American");
});
thai.addEventListener("click", () => {
  fetchData("Thai");
});
british.addEventListener("click", () => {
  fetchData("British");
});
russia.addEventListener("click", () => {
  fetchData("Russian");
});

const searchData = () => {
  let search = document.querySelector("#srch");
  search.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let inputValue = search.value;
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
      );
      const data = await api.json();
      recipe = data.meals;
      showData(recipe);
    }
  });
};
searchData();

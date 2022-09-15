const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (e) => {
   e.preventDefault();
   window.location.href = `https://www.google.com/search?q=${searchForm.search.value}`;
});
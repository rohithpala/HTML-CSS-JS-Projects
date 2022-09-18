const smallNavbar = document.querySelector(".small-navbar");
smallNavbar.innerHTML = `
   <ul>
      <li class="list active">
         <a href="#">
            <span class="icon"><i class="fa-solid fa-house-chimney"></i></span>
            <span class="text">Home</span>
         </a>
      </li>
      <li class="list">
         <a href="#">
            <span class="icon"><i class="fa-solid fa-briefcase"></i></span>
            <span class="text">My Works</span>
         </a>
      </li>
      <li class="list">
         <a href="#">
            <span class="icon"><i class="fa-solid fa-file"></i></span>
            <span class="text">Resume</span>
         </a>
      </li>

      <div class="indicator"></div>
   </ul>
`;

const list = document.querySelectorAll(".list");
function activeLink() {
   list.forEach(item => {
      item.classList.remove("active");
   });
   this.classList.add("active");
}

list.forEach(item => {
   item.addEventListener("click", activeLink);
});

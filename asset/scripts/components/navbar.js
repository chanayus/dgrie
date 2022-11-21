class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="relative">
        <div class="flex bg-white justify-between items-center p-4 relative shadow z-30">
            <button onclick="toggleNavMenu()">
                <img src="./asset/icons/hamburger.svg" alt="menu-button" />
            </button>

            <a href="./index.html" class="absolute left-1/2 translate-x-[-50%]">
                <img src="./asset/images/logo.svg" alt="logo" width="90" />
            </a>

            <div class="flex md:gap-4 gap-3">
                <a href=""><img src="./asset/icons/user.svg" alt="user-icon" /></a>
                <a href=""><img src="./asset/icons/heart.svg" alt="heart-icon" /></a>
                <a href=""><img src="./asset/icons/bag.svg" alt="bag-icon" /></a>
            </div>
        
        </div>
        <div class="absolute translate-y-[-150%] shadow z-20 w-full p-4 bg-white flex flex-col gap-y-4 duration-200" id="nav-menu">
            <a href="">Home</a>
            <a href="">Categories</a>
            <a href="">About</a>
        </div>
    </nav>

    `;
  }
}

const toggleNavMenu = () => {
  const menu = document.querySelector("#nav-menu");
  const isEnable = menu.style.transform === "translateY(0%)";

  menu.style.transform = isEnable ? "translateY(-150%)" : "translateY(0%)";
};

customElements.define("main-nav", Navbar);

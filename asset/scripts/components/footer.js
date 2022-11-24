class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="flex text-[clamp(12px,1vw,16px)] justify-between items-center py-4 px-6 border-t lg:flex-row flex-col">
      <p class="lg:mb-0 mb-8">Terms & Conditions</p>
      <div class="flex items-center lg:flex-row flex-col">
        <p class="lg:mr-6">Phone : 0636394563</p>
        <p class="lg:mr-6">Email : contact@dgrie.com</p>
        <p class="lg:mr-6">Facebook : facebook/dgrie.com</p>
        <p >Line : @dgrie</p>
      </div>
    </footer>
      `;
  }
}

customElements.define("main-footer", Footer);

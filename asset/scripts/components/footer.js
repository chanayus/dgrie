class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="flex justify-between items-center py-4 px-6 border-t lg:flex-row flex-col">
      <p class="lg:mb-0 mb-8">Terms & Conditions</p>
      <div class="flex items-center gap-x-6 gap-y-2 lg:flex-row flex-col">
        <p>Phone : 0636394563</p>
        <p>Email : contact@dgrie.com</p>
        <p>Facebook : facebook/dgrie.com</p>
        <p>Line : @dgrie</p>
      </div>
    </footer>
      `;
  }
}

customElements.define("main-footer", Footer);

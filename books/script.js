const pages = [
  { 
    title: "Chapter 1: The Beginning",
    content: "hello i am dishu."
  }
  {
    title: "Chapter 2: The Journey",
    content: "She set out on a quest across the hills and rivers, guided by the stars above."
  }
  {
    title: "Chapter 3: The Trial",
    content: "In the darkest woods, she faced the beast of doubt and conquered it with courage."
  }
  {
    title: "Chapter 4: The Return",
    content: "She returned home stronger, wiser, and ready to inspire others with her story."
  }
];

class FlipBook {
  constructor() {
    this.currentPage = 0;
    this.pageElement = document.getElementById('page');
    this.pageNumberElement = document.getElementById('page-number');
    this.initFooter();
  }

  initFooter() {
    this.footerHTML = `
      <div class="footer">
        <button onclick="book.prev()">⬅️ Prev</button>
        <span id="page-number">1</span>
        <button onclick="book.next()">Next ➡️</button>
      </div>
    `;
  }

  render() {
    this.pageElement.classList.add('page-transition');
    
    setTimeout(() => {
      this.pageElement.innerHTML = `
        <div class="content" aria-live="polite">
          <h2>${pages[this.currentPage].title}</h2>
          <p>${pages[this.currentPage].content}</p>
        </div>
        ${this.footerHTML}
      `;
      
      this.pageNumberElement.textContent = this.currentPage + 1;
      this.pageElement.classList.remove('page-transition');
    }, 300);
  }

  next() {
    if (this.currentPage < pages.length - 1) {
      this.currentPage++;
      this.render();
    }
  }

  prev() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.render();
    }
  }
}

// Initialize book
const book = new FlipBook();
document.addEventListener('DOMContentLoaded', () => book.render());

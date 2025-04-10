// Corrected JavaScript
const pages = [
  { 
    title: "Chapter 1: The Beginning",
    content: "hello i am dishu."
  },
  {
    title: "Chapter 2: The Journey",
    content: "She set out on a quest across the hills and rivers, guided by the stars above."
  },
  {
    title: "Chapter 3: The Trial",
    content: "In the darkest woods, she faced the beast of doubt and conquered it with courage."
  },
  {
    title: "Chapter 4: The Return",
    content: "She returned home stronger, wiser, and ready to inspire others with her story."
  }
];

class FlipBook {
  constructor() {
    this.currentPage = 0; // Start at first page (index 0)
    this.titleElement = document.getElementById('chapter-title');
    this.contentElement = document.getElementById('page-text');
    this.pageNumberElement = document.getElementById('page-number');
  }

  render() {
    // Add transition class
    document.getElementById('page-container').classList.add('page-transition');
    
    // Update content after transition
    setTimeout(() => {
      this.titleElement.textContent = pages[this.currentPage].title;
      this.contentElement.textContent = pages[this.currentPage].content;
      this.pageNumberElement.textContent = this.currentPage + 1;
      
      // Remove transition class
      document.getElementById('page-container').classList.remove('page-transition');
    }, 300);
  }

  next() {
    if (this.currentPage < pages.length - 1) {
      this.currentPage++;
      this.render();
    }
  }

  prev() {
    if (this.currentPage > 0) { // Allow going back to first page
      this.currentPage--;
      this.render();
    }
  }
}

// Initialize book
const book = new FlipBook();
document.addEventListener('DOMContentLoaded', () => book.render());

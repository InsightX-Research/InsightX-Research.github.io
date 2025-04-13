// Updated JavaScript
const pages = [
  { 
    title: "Introduction",
    content: "As we explore the revolutionary technology of solar sails, we uncover their immense potential for deep space travel. By harnessing the power of sunlight, solar sails offer a sustainable propulsion method that could transform our ability to explore the solar system and beyond. Unlike conventional propulsion systems, solar sails rely on the momentum of photons emitted by the sun, enabling spacecraft to travel vast distances without the need for traditional fuel sources. This paper examines the principles of solar sail technology, its advantages over conventional methods, and its implications for future space missions."
  },
  {
    title: "The Science Behind Solar Sails",
    content: "Solar sails operate based on radiation pressure, the force exerted by light upon striking a surface. Although photons have no mass, they carry momentum, which is transferred to the sail upon collision. This process generates thrust, propelling the spacecraft forward.The efficiency of solar sails depends on their large surface area and lightweight construction. Advances in materials science continue to enhance the development of ultra-thin, highly reflective sails, maximizing the capture of sunlight. Through careful orientation, solar sails can alter their trajectory and speed, enabling precise navigation in space."
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
    this.currentPage = 0;
    this.pageContainer = document.getElementById('page-container');
    this.titleElement = document.getElementById('chapter-title');
    this.contentElement = document.getElementById('page-text');
    this.pageNumberElement = document.getElementById('page-number');
  }

  render() {
    // Start transition
    this.pageContainer.classList.add('page-transition');
    
    setTimeout(() => {
      // Update content
      this.titleElement.textContent = pages[this.currentPage].title;
      this.contentElement.textContent = pages[this.currentPage].content;
      this.pageNumberElement.textContent = this.currentPage + 1;
      
      // End transition
      this.pageContainer.classList.remove('page-transition');
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

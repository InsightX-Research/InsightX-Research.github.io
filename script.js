const pages = [
  {
    title: "Chapter 1: The Beginning",
    content: "hello i am dishu .",
  },
  {
    title: "Chapter 2: The Journey",
    content: "She set out on a quest across the hills and rivers, guided by the stars above.",
  },
  {
    title: "Chapter 3: The Trial",
    content: "In the darkest woods, she faced the beast of doubt and conquered it with courage.",
  },
  {
    title: "Chapter 4: The Return",
    content: "She returned home stronger, wiser, and ready to inspire others with her story.",
  }
];

let currentPage = 0;

function renderPage() {
  const page = pages[currentPage];
  document.getElementById("chapter-title").textContent = page.title;
  document.getElementById("page-content").textContent = page.content;
  document.getElementById("page-number").textContent = currentPage + 1;
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

renderPage(); // initial page

// Updated JavaScript
const pages = [
  { 
    title: "Introduction",
    content: `As we explore the revolutionary technology of solar sails, we uncover their immense potential for deep space travel. By harnessing the power of sunlight, solar sails offer a sustainable propulsion method that could transform our ability to explore the solar system and beyond. Unlike conventional propulsion systems, solar sails rely on the momentum of photons emitted by the sun, enabling spacecraft to travel vast distances without the need for traditional fuel sources. This paper examines the principles of solar sail technology, its advantages over conventional methods, and its implications for future space missions.`
  },
  {
    title: "The Science Behind Solar Sails",
    content: `Solar sails operate based on radiation pressure, the force exerted by light upon striking a surface. Although photons have no mass, they carry momentum, which is transferred to the sail upon collision. This process generates thrust, propelling the spacecraft forward.

The efficiency of solar sails depends on their large surface area and lightweight construction. Advances in materials science continue to enhance the development of ultra-thin, highly reflective sails, maximizing the capture of sunlight. Through careful orientation, solar sails can alter their trajectory and speed, enabling precise navigation in space.
`
  },
  {
    title: "Advantages of Solar Sails",
    content: `Solar sails present several significant advantages over traditional propulsion systems:

1. Fuel Independence – Unlike chemical rockets that rely on finite fuel reserves, solar sails function as long as sunlight is available. This allows for prolonged and uninterrupted missions.

2. Cost Efficiency – Traditional propulsion systems require extensive resources and budgets. Solar sails reduce launch costs and operational expenses, making space exploration more financially feasible.

3. Sustainability – By eliminating fuel consumption, solar sails offer an environmentally friendly alternative, reducing reliance on nonrenewable resources.`
  },
  {
    title: "Historical Context and Current Developments",
    content: `The concept of solar sails dates back to the early 17th century when Johannes Kepler first speculated about light-driven propulsion. However, practical developments in this technology did not occur until the late 20th century.

Key milestones include:

- JAXA's IKAROS Mission (2010) – The first successful demonstration of solar sail propulsion in space, proving the viability of the technology.
- The Planetary Society’s LightSail Missions – Ongoing efforts to refine and test solar sail technology for future applications.

Current research continues to focus on optimizing materials, deployment techniques, and navigation strategies to improve the efficiency of solar sails.`
  },
   {
    title: "Future Missions Utilizing Solar Sails",
    content: `Solar sails could play a crucial role in upcoming deep space missions. Potential applications include:

- Exploration of Outer Planets and Moons – Missions to Jupiter’s moon Europa, which may harbor a subsurface ocean, could benefit from solar sail technology, allowing for extended research without the burden of fuel limitations.
- Interstellar Travel – Concepts such as using Earth-based laser arrays to propel solar sail probes toward Alpha Centauri could bring interstellar exploration within reach.`
  },
   {
    title: "Challenges and Limitations",
    content: `Despite their promise, solar sails face several challenges:

- Deployment and Control – Developing reliable methods for deploying and maneuvering large sails in space remains a significant engineering hurdle.
- Speed and Maneuverability – While solar sails provide continuous acceleration, they may not achieve the high speeds required for certain missions. Hybrid propulsion systems or gravitational assists may be necessary.`
  },
   {
    title: "The Role of Solar Sails in Sustainable Space Exploration",
    content: `Solar sails offer a path toward more sustainable space exploration. By reducing dependence on fuel, they promote environmentally friendly space missions. Additionally, they could support resource utilization efforts, such as transporting materials from asteroids for future space colonies.`
  },
   {
    title: "Conclusion",
    content: `Solar sails represent a transformative advancement in space exploration. By leveraging sunlight for propulsion, they offer a cost-effective, sustainable, and efficient alternative to traditional fuel-based systems. As research and technological advancements continue, solar sails have the potential to enable groundbreaking missions, from exploring distant planets to reaching neighboring star systems. This innovation heralds a new era of discovery, expanding our understanding of the cosmos and our place within it.`
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

// DEMO DATA
const contacts = [
  {
    name: "Christina Wallace",
    company: "Company A",
    role: "Electrical Engineer",
    location: "California",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Passionate about safety and innovation. Love spending time outdoors and tackling new challenges.",
    posts: [
      "Successfully completed a major installation using SKANWEAR® gear.",
      "Participated in the weekly challenge! Loving the comfort of the Pro Series.",
      "Shared tips on PPE maintenance with colleagues."
    ],
    stats: { posts: 28, rank: 1, challenges: 4 }
  },
  {
    name: "Bobby Darret",
    company: "Company C",
    role: "Field Technician",
    location: "Texas",
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    bio: "Enjoying the journey in the electrical field. Avid runner. SKANWEAR® keeps me safe on the job.",
    posts: [
      "Documented a complex field fix last week.",
      "Shared photos from our team project day.",
    ],
    stats: { posts: 17, rank: 3, challenges: 2 }
  },
  {
    name: "Elina Smith",
    company: "Company A",
    role: "Project Manager",
    location: "London",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    bio: "Project manager driven by results. Coffee enthusiast. Always finding ways to improve safety.",
    posts: [
      "Organized a successful safety workshop.",
      "Posted about our recent client visit."
    ],
    stats: { posts: 34, rank: 2, challenges: 5 }
  },
  {
    name: "Derek Jaston",
    company: "Company B",
    role: "Safety Officer",
    location: "Utica",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    bio: "Safety first! I help teams stay protected and productive.",
    posts: [
      "Led a new PPE training session.",
      "Shared photos from a job site visit."
    ],
    stats: { posts: 12, rank: 5, challenges: 1 }
  },
  {
    name: "Christiana Bright",
    company: "Company B",
    role: "Operations Lead",
    location: "Santa Ana",
    photo: "https://randomuser.me/api/portraits/women/60.jpg",
    bio: "Focused on smooth operations and team morale. Always up for a challenge!",
    posts: [
      "Posted about our new safety campaign.",
      "Participated in the weekly challenge."
    ],
    stats: { posts: 20, rank: 4, challenges: 3 }
  },
  {
    name: "Alan Eijk",
    company: "Company C",
    role: "Engineer",
    location: "New Mexico",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Engineer by trade, explorer at heart. SKANWEAR® gear is my go-to for tough jobs.",
    posts: [
      "Shared my thoughts on the new Pro Series.",
      "Uploaded photos from last week's site visit."
    ],
    stats: { posts: 13, rank: 6, challenges: 1 }
  }
];

const companies = [
  {
    name: "Company A",
    address: "3517 W. Gray St. Utica, Pennsylvania 57867"
  },
  {
    name: "Company B",
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486"
  },
  {
    name: "Company C",
    address: "4140 Parker Rd. Allentown, New Mexico 31134"
  }
];

const demoFeedImages = [
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?fit=crop&w=800&q=80",
];

const feedPosts = [
  {
    userIdx: 0,
    img: demoFeedImages[0],
    caption: "Just completed a challenging project using SKANWEAR® gear on site! 🔥 #SafetyFirst",
    likes: 42,
    comments: 8,
    liked: false,
    time: "2h"
  },
  {
    userIdx: 1,
    img: demoFeedImages[1],
    caption: "Loving the comfort of the Pro Series. Great day out with the team 🚧",
    likes: 29,
    comments: 5,
    liked: false,
    time: "4h"
  },
  {
    userIdx: 2,
    img: demoFeedImages[2],
    caption: "Weekly challenge complete! SKANWEAR® never lets me down.",
    likes: 23,
    comments: 2,
    liked: false,
    time: "6h"
  },
  {
    userIdx: 3,
    img: demoFeedImages[3],
    caption: "Safety training at Company B. Proud of the whole crew.",
    likes: 13,
    comments: 1,
    liked: false,
    time: "8h"
  },
  {
    userIdx: 4,
    img: demoFeedImages[4],
    caption: "Operations running smooth in Santa Ana. #skanwear #community",
    likes: 19,
    comments: 3,
    liked: false,
    time: "1d"
  },
  {
    userIdx: 5,
    img: demoFeedImages[5],
    caption: "Exploring new sites with the best protection.",
    likes: 15,
    comments: 1,
    liked: false,
    time: "2d"
  }
];

// FEED
function renderFeed() {
  const feed = document.getElementById('feedPosts');
  feed.innerHTML = '';
  feedPosts.forEach((post, i) => {
    const user = contacts[post.userIdx];
    const el = document.createElement('div');
    el.className = 'insta-post';
    el.innerHTML = `
      <div class="insta-post-header">
        <img src="${user.photo}" alt="${user.name}">
        <div>
          <div class="insta-post-author">${user.name}</div>
          <div class="insta-post-info">${user.role} · ${user.company} · ${post.time} ago</div>
        </div>
      </div>
      <img class="insta-post-img" src="${post.img}" alt="Post image">
      <div class="insta-post-body">${post.caption}</div>
      <div class="insta-post-actions">
        <span class="like-btn${post.liked ? " liked" : ""}" data-idx="${i}">❤️ ${post.likes}</span>
        <span>💬 ${post.comments}</span>
        <span>🔗 Share</span>
      </div>
    `;
    el.querySelector('.insta-post-header img').onclick = () => showContactDetail(post.userIdx);
    el.querySelector('.insta-post-author').onclick = () => showContactDetail(post.userIdx);
    el.querySelector('.like-btn').onclick = function() {
      if (post.liked) {
        post.liked = false;
        post.likes--;
      } else {
        post.liked = true;
        post.likes++;
      }
      renderFeed();
    };
    feed.appendChild(el);
  });
}

// COMPANIES
function renderCompanies() {
  const list = document.querySelector('.companies-list');
  list.innerHTML = '';
  companies.forEach((comp, i) => {
    const el = document.createElement('div');
    el.className = 'company-card glass';
    el.innerHTML = `
      <div class="company-name">${comp.name}</div>
      <div class="company-address">${comp.address}</div>
    `;
    el.onclick = () => showCompanyEmployees(comp.name);
    list.appendChild(el);
  });
  document.getElementById('companyEmployees').innerHTML = "";
}

// COMPANY EMPLOYEES
function showCompanyEmployees(companyName) {
  const employees = contacts.filter(c => c.company === companyName);
  let html = `<h2 style="color:#D44A3D;">Contacts at ${companyName}</h2>`;
  if (employees.length === 0) {
    html += '<p>No contacts found for this company.</p>';
  } else {
    html += '<div class="contacts-grid">';
    employees.forEach((c, i) => {
      html += `
        <div class="contact-card glass" onclick="showContactDetail(${contacts.indexOf(c)})">
          <img class="contact-photo" src="${c.photo}" alt="${c.name}"/>
          <div class="contact-name">${c.name}</div>
          <div class="contact-company">${c.role}</div>
        </div>
      `;
    });
    html += '</div>';
  }
  html += `<button class="add-btn glass" style="margin-top:10px" onclick="renderCompanies()">← Back to Companies</button>`;
  document.getElementById('companyEmployees').innerHTML = html;
}

// CONTACTS
function renderContacts() {
  const grid = document.querySelector('.contacts-grid');
  grid.innerHTML = '';
  contacts.forEach((c, i) => {
    const el = document.createElement('div');
    el.className = 'contact-card glass';
    el.innerHTML = `
      <img class="contact-photo" src="${c.photo}" alt="${c.name}"/>
      <div class="contact-name">${c.name}</div>
      <div class="contact-company">${c.company}</div>
    `;
    el.onclick = () => showContactDetail(i);
    grid.appendChild(el);
  });
}

// CONTACT DETAIL PAGE
function showContactDetail(idx) {
  // Hide all pages, show contactDetailPage
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('contactDetailPage').classList.add('active');
  const c = contacts[idx];
  const container = document.getElementById('contactDetailContent');
  container.innerHTML = `
    <div class="contact-detail-card glass">
      <img src="${c.photo}" alt="${c.name}">
      <h2>${c.name}</h2>
      <div class="contact-detail-meta">${c.role} &nbsp;|&nbsp; ${c.company} &nbsp;|&nbsp; ${c.location}</div>
      <div class="contact-detail-bio">${c.bio}</div>
      <div class="contact-detail-stats">
        <span>${c.stats.posts} Posts</span>
        <span>Rank ${c.stats.rank}</span>
        <span>${c.stats.challenges} Challenges</span>
      </div>
    </div>
    <div class="contact-detail-posts">
      <h3>Recent Posts</h3>
      <ul>
        ${(c.posts || []).map(post => `<li>${post}</li>`).join("")}
      </ul>
    </div>
  `;
}

// BACK TO CONTACTS
document.getElementById('backToContacts').onclick = function() {
  document.getElementById('contactDetailPage').classList.remove('active');
  document.getElementById('contactsPage').classList.add('active');
};

// NAVIGATION
document.querySelectorAll('.sidebar nav ul li').forEach(el => {
  el.onclick = function() {
    document.querySelectorAll('.sidebar nav ul li').forEach(li => li.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(this.dataset.page).classList.add('active');
    // Reset company employees panel if companies chosen
    if (this.dataset.page === "companiesPage") renderCompanies();
    // Reset contacts if contacts chosen
    if (this.dataset.page === "contactsPage") renderContacts();
    // Reset feed if chosen
    if (this.dataset.page === "feedPage") renderFeed();
  };
});

// SIDEBAR TOGGLE
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const mainContent = document.getElementById('mainContent');
function toggleSidebar(forceOpen) {
  if(forceOpen === true) {
    sidebar.classList.add('open');
    mainContent.style.marginLeft = '';
    sidebarOverlay.style.display = 'none';
    return;
  }
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    sidebarOverlay.style.display = window.innerWidth <= 800 ? 'block' : 'none';
  } else {
    sidebar.classList.add('open');
    sidebarOverlay.style.display = 'none';
  }
}
sidebarToggle.onclick = () => toggleSidebar();
sidebarOverlay.onclick = () => toggleSidebar(true);
// Expand sidebar on desktop by default
if(window.innerWidth > 800) sidebar.classList.add('open');
// Collapse sidebar on mobile by default
if(window.innerWidth <= 800) sidebar.classList.remove('open');
window.addEventListener('resize', () => {
  if(window.innerWidth > 800) toggleSidebar(true);
  else sidebar.classList.remove('open');
});

// INITIAL RENDER
renderFeed();
renderCompanies();
renderContacts();

// Add Profile (Demo)
document.getElementById('addProfileBtn').onclick = () => {
  alert('Profile creation form coming soon!');
};
// Add Post (Demo)
document.getElementById('addPostBtn').onclick = () => {
  alert('Add post feature coming soon!');
};

// Expose for inline event
window.showContactDetail = showContactDetail;
window.renderCompanies = renderCompanies;

// Demo Data
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

const posts = [
  {
    author: "Sarah Johnson",
    role: "Safety Manager",
    location: "London",
    photo: "https://randomuser.me/api/portraits/women/69.jpg",
    body: "Just completed an installation with the new SKANWEAR® Pro series. The arc flash protection is incredible and the comfort level is unmatched!",
    likes: 42,
    comments: 8
  },
  {
    author: "Alan Eijk",
    role: "Engineer",
    location: "New Mexico",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    body: "Shared my experience on the latest safety challenge. Proud to be part of the SKANWEAR® community!",
    likes: 29,
    comments: 5
  }
];

// Populate Contacts
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
    el.onclick = () => showProfile(i);
    grid.appendChild(el);
  });
}

// Populate Companies
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
    el.onclick = () => showCompany(comp.name);
    list.appendChild(el);
  });
}

// Show Company Employees
function showCompany(companyName) {
  const employees = contacts.filter(c => c.company === companyName);
  let html = `<h2>Employees at ${companyName}</h2>`;
  html += '<div class="contacts-grid">';
  employees.forEach((c, i) => {
    html += `
      <div class="contact-card glass" onclick="showProfile(${contacts.indexOf(c)})">
        <img class="contact-photo" src="${c.photo}" alt="${c.name}"/>
        <div class="contact-name">${c.name}</div>
        <div class="contact-company">${c.role}</div>
      </div>
    `;
  });
  html += '</div>';
  document.getElementById('companiesPage').innerHTML = `
    <header>
      <h1>${companyName}</h1>
      <button class="add-btn glass" onclick="renderCompanies()">← Back to Companies</button>
    </header>
    ${html}
  `;
}

// Populate Feed Posts
function renderPosts() {
  const list = document.querySelector('.posts-list');
  list.innerHTML = '';
  posts.forEach(post => {
    const el = document.createElement('div');
    el.className = 'post-card glass';
    el.innerHTML = `
      <div class="post-header">
        <img src="${post.photo}" alt="${post.author}"/>
        <div class="post-details">
          <span class="post-author">${post.author}</span>
          <div class="post-role-location">${post.role} • ${post.location}</div>
        </div>
      </div>
      <div class="post-body">${post.body}</div>
      <div class="post-actions">
        <span>👍 ${post.likes}</span>
        <span>💬 ${post.comments}</span>
        <span>🔗 Share</span>
      </div>
    `;
    list.appendChild(el);
  });
}

// Show Profile Popup
function showProfile(idx) {
  const c = contacts[idx];
  document.getElementById('profileImg').src = c.photo;
  document.getElementById('profileName').textContent = c.name;
  document.getElementById('profileRole').textContent = c.role;
  document.getElementById('profileCompany').textContent = c.company;
  document.getElementById('profileLocation').textContent = c.location;
  document.getElementById('profileBio').textContent = c.bio;
  document.getElementById('profilePosts').textContent = c.stats.posts;
  document.getElementById('profileRank').textContent = c.stats.rank;
  document.getElementById('profileChallenges').textContent = c.stats.challenges;
  const postsList = document.getElementById('profilePostsList');
  postsList.innerHTML = '';
  c.posts.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p;
    postsList.appendChild(li);
  });
  document.getElementById('profilePopup').classList.remove('hidden');
}

// Close popup
document.getElementById('closeProfile').onclick = () => {
  document.getElementById('profilePopup').classList.add('hidden');
};

// Navigation
document.querySelectorAll('.sidebar nav ul li').forEach(el => {
  el.onclick = function() {
    document.querySelectorAll('.sidebar nav ul li').forEach(li => li.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(this.dataset.page + 'Page').classList.add('active');
  };
});

// Initial render
renderContacts();
renderCompanies();
renderPosts();

// Search filters
document.getElementById('searchContacts').oninput = function() {
  const q = this.value.toLowerCase();
  const grid = document.querySelector('.contacts-grid');
  grid.innerHTML = '';
  contacts.filter(c => c.name.toLowerCase().includes(q) || c.company.toLowerCase().includes(q))
    .forEach((c, i) => {
      const el = document.createElement('div');
      el.className = 'contact-card glass';
      el.innerHTML = `
        <img class="contact-photo" src="${c.photo}" alt="${c.name}"/>
        <div class="contact-name">${c.name}</div>
        <div class="contact-company">${c.company}</div>
      `;
      el.onclick = () => showProfile(i);
      grid.appendChild(el);
    });
};

document.getElementById('searchCompanies').oninput = function() {
  const q = this.value.toLowerCase();
  const list = document.querySelector('.companies-list');
  list.innerHTML = '';
  companies.filter(c => c.name.toLowerCase().includes(q) || c.address.toLowerCase().includes(q))
    .forEach((comp, i) => {
      const el = document.createElement('div');
      el.className = 'company-card glass';
      el.innerHTML = `
        <div class="company-name">${comp.name}</div>
        <div class="company-address">${comp.address}</div>
      `;
      el.onclick = () => showCompany(comp.name);
      list.appendChild(el);
    });
};

// Add Profile (Demo)
document.getElementById('addProfileBtn').onclick = () => {
  alert('Profile creation form coming soon!');
};
// Add Contact/Company (Demo)
document.getElementById('addContactBtn').onclick = () => {
  alert('Add contact feature coming soon!');
};
document.getElementById('addCompanyBtn').onclick = () => {
  alert('Add company feature coming soon!');
};

// Expose showProfile for inline onclick
window.showProfile = showProfile;
window.showCompany = showCompany;

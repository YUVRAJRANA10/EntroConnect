// Mentor data
const mentors = [
    {
        id: 1,
        name: "Dr. Rajesh Kumar",
        title: "Tech Innovation Expert",
        domain: "tech",
        expertise: ["Startup Technology", "Digital Transformation", "AI/ML"],
        experience: "20+ years",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
        description: "Former CTO of multiple successful startups with expertise in scaling technology solutions.",
        achievements: [
            "Led digital transformation for 50+ enterprises",
            "Published author on AI in Business",
            "Tech advisor to 100+ startups"
        ],
        availability: "10 hours/week",
        rating: 4.9,
        reviews: 150,
        contact: {
            email: "rajesh.kumar@example.com",
            linkedin: "linkedin.com/in/rajeshkumar"
        }
    },
    {
        id: 2,
        name: "Priya Sharma",
        title: "Financial Strategy Consultant",
        domain: "finance",
        expertise: ["Investment Planning", "Financial Modeling", "Startup Funding"],
        experience: "15+ years",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
        description: "Investment banker turned startup advisor, specializing in early-stage funding and financial planning.",
        achievements: [
            "Facilitated funding of ₹500Cr+ for startups",
            "Financial advisor to unicorn startups",
            "Published financial planning guide"
        ],
        availability: "8 hours/week",
        rating: 4.8,
        reviews: 120,
        contact: {
            email: "priya.sharma@example.com",
            linkedin: "linkedin.com/in/priyasharma"
        }
    },
    {
        id: 3,
        name: "Arun Patel",
        title: "Marketing Strategist",
        domain: "marketing",
        expertise: ["Digital Marketing", "Brand Strategy", "Growth Hacking"],
        experience: "12+ years",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
        description: "Growth marketing expert with focus on sustainable customer acquisition strategies.",
        achievements: [
            "Scaled 3 D2C brands to ₹100Cr+ revenue",
            "Google Certified Marketing Expert",
            "Speaker at major marketing conferences"
        ],
        availability: "15 hours/week",
        rating: 4.7,
        reviews: 90,
        contact: {
            email: "arun.patel@example.com",
            linkedin: "linkedin.com/in/arunpatel"
        }
    },
    {
        id: 4,
        name: "Adv. Meera Reddy",
        title: "Legal Counsel",
        domain: "legal",
        expertise: ["Business Law", "IP Rights", "Startup Compliance"],
        experience: "18+ years",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
        description: "Specialized in startup law and intellectual property rights protection.",
        achievements: [
            "Handled 500+ startup legal cases",
            "Expert in international business law",
            "Published author on startup compliance"
        ],
        availability: "12 hours/week",
        rating: 4.9,
        reviews: 110,
        contact: {
            email: "meera.reddy@example.com",
            linkedin: "linkedin.com/in/meerareddy"
        }
    },
    {
        id: 5,
        name: "Vikram Singh",
        title: "Tech Architecture Specialist",
        domain: "tech",
        expertise: ["Cloud Architecture", "Scalable Systems", "Tech Strategy"],
        experience: "16+ years",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
        description: "Cloud architecture expert specializing in scalable startup solutions.",
        achievements: [
            "Architected systems handling 1M+ users",
            "AWS Certified Solutions Architect",
            "Tech mentor to 50+ startups"
        ],
        availability: "10 hours/week",
        rating: 4.8,
        reviews: 95,
        contact: {
            email: "vikram.singh@example.com",
            linkedin: "linkedin.com/in/vikramsingh"
        }
    },
    {
        id: 6,
        name: "Neha Kapoor",
        title: "Investment Advisor",
        domain: "finance",
        expertise: ["Venture Capital", "Risk Management", "Business Valuation"],
        experience: "14+ years",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
        description: "Former VC and investment advisor specializing in startup valuations and funding.",
        achievements: [
            "Managed ₹1000Cr+ investment portfolio",
            "Advisor to 3 unicorn startups",
            "Regular speaker at finance forums"
        ],
        availability: "8 hours/week",
        rating: 4.7,
        reviews: 85,
        contact: {
            email: "neha.kapoor@example.com",
            linkedin: "linkedin.com/in/nehakapoor"
        }
    }
];

// Function to create mentor card HTML
function createMentorCard(mentor) {
    return `
        <div class="bg-white rounded-lg shadow-lg dark:bg-gray-800 p-6" data-domain="${mentor.domain}">
            <div class="flex items-center mb-4">
                <img class="w-16 h-16 rounded-full mr-4" src="${mentor.image}" alt="${mentor.name}">
                <div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">${mentor.name}</h3>
                    <p class="text-gray-500 dark:text-gray-400">${mentor.title}</p>
                </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4">${mentor.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${mentor.expertise.map(exp => `
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        ${exp}
                    </span>
                `).join('')}
            </div>
            <div class="flex items-center mb-4">
                <div class="flex items-center">
                    ${Array(Math.floor(mentor.rating)).fill().map(() => `
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    `).join('')}
                    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">${mentor.rating}</p>
                    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">(${mentor.reviews} reviews)</p>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-400">Available: ${mentor.availability}</span>
                <button type="button" 
                        class="view-profile text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        data-mentor-id="${mentor.id}"
                        data-modal-target="mentor-modal"
                        data-modal-toggle="mentor-modal">
                    View Profile
                </button>
            </div>
        </div>
    `;
}

// Function to populate mentor modal
function populateMentorModal(mentor) {
    const modalContent = document.getElementById('mentor-modal-content');
    modalContent.innerHTML = `
        <div class="flex items-center mb-6">
            <img class="w-20 h-20 rounded-full mr-4" src="${mentor.image}" alt="${mentor.name}">
            <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${mentor.name}</h3>
                <p class="text-gray-500 dark:text-gray-400">${mentor.title}</p>
            </div>
        </div>
        <div class="space-y-4">
            <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Expertise</h4>
                <div class="flex flex-wrap gap-2">
                    ${mentor.expertise.map(exp => `
                        <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            ${exp}
                        </span>
                    `).join('')}
                </div>
            </div>
            <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Achievements</h4>
                <ul class="list-disc list-inside text-gray-600 dark:text-gray-400">
                    ${mentor.achievements.map(achievement => `
                        <li>${achievement}</li>
                    `).join('')}
                </ul>
            </div>
            <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Information</h4>
                <p class="text-gray-600 dark:text-gray-400">Email: ${mentor.contact.email}</p>
                <p class="text-gray-600 dark:text-gray-400">LinkedIn: ${mentor.contact.linkedin}</p>
            </div>
        </div>
    `;
}

// Function to filter mentors by domain
function filterMentors(domain) {
    const mentorCards = document.querySelectorAll('#mentors-grid > div');
    mentorCards.forEach(card => {
        if (domain === 'all' || card.dataset.domain === domain) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to filter mentors by search term
function searchMentors(searchTerm) {
    const mentorCards = document.querySelectorAll('#mentors-grid > div');
    searchTerm = searchTerm.toLowerCase();
    
    mentorCards.forEach(card => {
        const mentorData = card.textContent.toLowerCase();
        if (mentorData.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Populate mentor cards
    const mentorsGrid = document.getElementById('mentors-grid');
    mentors.forEach(mentor => {
        mentorsGrid.innerHTML += createMentorCard(mentor);
    });

    // Add event listeners for domain filters
    document.querySelectorAll('.domain-filter').forEach(button => {
        button.addEventListener('click', (e) => {
            const domain = e.target.dataset.domain;
            filterMentors(domain);
        });
    });

    // Add event listener for search
    document.getElementById('mentor-search').addEventListener('input', (e) => {
        searchMentors(e.target.value);
    });

    // Add event listeners for view profile buttons
    document.querySelectorAll('.view-profile').forEach(button => {
        button.addEventListener('click', () => {
            const mentorId = parseInt(button.dataset.mentorId);
            const mentor = mentors.find(m => m.id === mentorId);
            if (mentor) {
                populateMentorModal(mentor);
            }
        });
    });
}); 
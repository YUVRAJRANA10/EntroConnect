// Sample data for business connections
const businessConnections = [
    {
        name: "Sarah Chen",
        business: "TechStart Solutions",
        industry: "Software Development",
        description: "B2B SaaS solutions for startups",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
        linkedin: "https://linkedin.com/in/sarahchen",
        twitter: "https://twitter.com/sarahchen",
        tags: ["SaaS", "B2B", "Technology"]
    },
    {
        name: "Marcus Johnson",
        business: "EcoVentures",
        industry: "Sustainable Energy",
        description: "Renewable energy solutions for businesses",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
        linkedin: "https://linkedin.com/in/marcusjohnson",
        twitter: "https://twitter.com/marcusjohnson",
        tags: ["CleanTech", "Sustainability", "Energy"]
    },
    {
        name: "Priya Patel",
        business: "FinTech Innovations",
        industry: "Financial Technology",
        description: "Digital payment solutions for SMEs",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
        linkedin: "https://linkedin.com/in/priyapatel",
        twitter: "https://twitter.com/priyapatel",
        tags: ["FinTech", "Payments", "Banking"]
    }
];

// Sample data for industry experts
const industryExperts = [
    {
        name: "Dr. James Wilson",
        expertise: "AI & Machine Learning",
        email: "james.wilson@techexperts.com",
        phone: "+1 (555) 123-4567",
        linkedin: "https://linkedin.com/in/jameswilson",
        twitter: "https://twitter.com/drjameswilson"
    },
    {
        name: "Lisa Zhang",
        expertise: "Digital Marketing",
        email: "lisa.zhang@digitalstrategy.com",
        phone: "+1 (555) 234-5678",
        linkedin: "https://linkedin.com/in/lisazhang",
        twitter: "https://twitter.com/lisazhang"
    },
    {
        name: "Robert Martinez",
        expertise: "Business Finance",
        email: "robert.m@financeadvisors.com",
        phone: "+1 (555) 345-6789",
        linkedin: "https://linkedin.com/in/robertmartinez",
        twitter: "https://twitter.com/robertmfinance"
    }
];

// Function to create business connection cards
function createConnectionCard(connection) {
    return `
        <div class="bg-white rounded-lg shadow-lg dark:bg-gray-800 p-6">
            <div class="flex items-center mb-4">
                <img class="w-16 h-16 rounded-full mr-4" src="${connection.image}" alt="${connection.name}">
                <div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">${connection.name}</h3>
                    <span class="text-gray-500 dark:text-gray-400">${connection.business}</span>
                </div>
            </div>
            <p class="mb-4 text-gray-600 dark:text-gray-400">${connection.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${connection.tags.map(tag => `
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        ${tag}
                    </span>
                `).join('')}
            </div>
            <div class="flex space-x-4">
                <a href="${connection.linkedin}" target="_blank" class="text-blue-600 hover:underline flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                </a>
                <a href="${connection.twitter}" target="_blank" class="text-blue-400 hover:underline flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                </a>
            </div>
        </div>
    `;
}

// Function to create expert directory rows
function createExpertRow(expert) {
    return `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                ${expert.name}
            </td>
            <td class="px-6 py-4">
                ${expert.expertise}
            </td>
            <td class="px-6 py-4">
                <a href="mailto:${expert.email}" class="text-blue-600 hover:underline dark:text-blue-500">${expert.email}</a><br>
                <span class="text-gray-500">${expert.phone}</span>
            </td>
            <td class="px-6 py-4">
                <div class="flex space-x-4">
                    <a href="${expert.linkedin}" target="_blank" class="text-blue-600 hover:underline">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                    <a href="${expert.twitter}" target="_blank" class="text-blue-400 hover:underline">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                    </a>
                </div>
            </td>
        </tr>
    `;
}

// Function to initialize the page
function initializePage() {
    // Populate business connections
    const connectionsContainer = document.getElementById('business-connections');
    connectionsContainer.innerHTML = businessConnections.map(createConnectionCard).join('');

    // Populate expert directory
    const expertDirectory = document.getElementById('expert-directory');
    expertDirectory.innerHTML = industryExperts.map(createExpertRow).join('');

    // Initialize search functionality
    const searchInput = document.getElementById('network-search');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        // Filter business connections
        const filteredConnections = businessConnections.filter(connection => 
            connection.name.toLowerCase().includes(searchTerm) ||
            connection.business.toLowerCase().includes(searchTerm) ||
            connection.industry.toLowerCase().includes(searchTerm) ||
            connection.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        connectionsContainer.innerHTML = filteredConnections.map(createConnectionCard).join('');

        // Filter experts
        const filteredExperts = industryExperts.filter(expert =>
            expert.name.toLowerCase().includes(searchTerm) ||
            expert.expertise.toLowerCase().includes(searchTerm)
        );
        expertDirectory.innerHTML = filteredExperts.map(createExpertRow).join('');
    });
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage); 
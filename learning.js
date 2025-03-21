// Course data with YouTube video links
const courses = [
    {
        title: "Business Model Canvas",
        description: "Learn how to create and analyze your business model using the Business Model Canvas framework. Perfect for validating your business idea.",
        duration: "45 minutes",
        level: "Beginner",
        videoUrl: "https://www.youtube.com/watch?v=QoAOzMTLP5s",
        thumbnail: "https://img.youtube.com/vi/QoAOzMTLP5s/maxresdefault.jpg",
        tags: ["Business Planning", "Strategy", "Startup"]
    },
    {
        title: "Financial Management Basics",
        description: "Master the fundamentals of financial management, including budgeting, cash flow, and basic accounting principles for entrepreneurs.",
        duration: "60 minutes",
        level: "Beginner",
        videoUrl: "https://www.youtube.com/watch?v=1XKyeQB8v-o",
        thumbnail: "https://img.youtube.com/vi/1XKyeQB8v-o/maxresdefault.jpg",
        tags: ["Finance", "Accounting", "Money Management"]
    },
    {
        title: "Marketing Strategy 101",
        description: "Learn essential marketing strategies for startups and small businesses, including digital marketing and customer acquisition.",
        duration: "55 minutes",
        level: "Beginner",
        videoUrl: "https://www.youtube.com/watch?v=ZMJPVRxvqLY",
        thumbnail: "https://img.youtube.com/vi/ZMJPVRxvqLY/maxresdefault.jpg",
        tags: ["Marketing", "Digital", "Growth"]
    }
];

// Function to create a course card
function createCourseCard(course) {
    return `
        <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="${course.videoUrl}" target="_blank" class="block relative">
                <img class="rounded-t-lg w-full h-48 object-cover" src="${course.thumbnail}" alt="${course.title}">
                <div class="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                    ${course.duration}
                </div>
            </a>
            <div class="p-5">
                <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${course.title}</h3>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${course.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${course.tags.map(tag => `
                        <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500 dark:text-gray-400">${course.level}</span>
                    <a href="${course.videoUrl}" target="_blank" 
                       class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Watch Now
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Function to initialize the page
function initializePage() {
    const courseContainer = document.getElementById('course-container');
    const searchInput = document.getElementById('course-search');

    // Populate courses
    function displayCourses(coursesToShow) {
        courseContainer.innerHTML = coursesToShow.map(course => createCourseCard(course)).join('');
    }

    // Initial display
    displayCourses(courses);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCourses = courses.filter(course => 
            course.title.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm) ||
            course.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        displayCourses(filteredCourses);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage); 
// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');
const projectModal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const projectButtons = document.querySelectorAll('.project-btn');

// Project data for modal
const projectData = {
    ecommerce: {
        title: "E-Commerce Platform",
        details: `
            <div class="project-details">
                <h3>Technologies Used</h3>
                <div class="tech-tags">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>React.js</span>
                    <span>MySQL</span>
                    <span>REST API</span>
                    <span>Spring Security</span>
                    <span>Hibernate/JPA</span>
                </div>
                
                <h3>Key Features</h3>
                <ul>
                    <li>Scalable backend using Spring Boot and Spring Security</li>
                    <li>User authentication and authorization with JWT</li>
                    <li>RESTful APIs for seamless frontend-backend communication</li>
                    <li>Product catalog management with CRUD operations</li>
                    <li>Efficient data persistence with Hibernate/JPA</li>
                    <li>Caching strategies that improved data retrieval speeds by 40%</li>
                    <li>Deployed on Render with environment variables for secure configuration</li>
                </ul>
                
                <h3>Project Highlights</h3>
                <p>This full-stack e-commerce platform demonstrates expertise in building scalable applications with modern Java technologies. The backend implements robust security measures while the React.js frontend provides a responsive user experience.</p>
                
                <div class="project-links">
                    <a href="#" class="btn btn-primary">View on GitHub</a>
                    <a href="#" class="btn btn-secondary">Live Demo</a>
                </div>
            </div>
        `
    }
};

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
    });
});

// Contact form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For now, we'll just show an alert
    alert(`Thank you ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// Project modal functionality
projectButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Check if this button has a data-project attribute
        const projectId = this.getAttribute('data-project');
        
        if (projectId) {
            // Open modal with project details
            openProjectModal(projectId);
        }
        // If no data-project attribute, it's a link that will open in new tab
    });
});

function openProjectModal(projectId) {
    if (projectData[projectId]) {
        modalTitle.textContent = projectData[projectId].title;
        modalContent.innerHTML = projectData[projectId].details;
        projectModal.style.display = 'flex';
    }
}

// Close modal when clicking X
closeModal.addEventListener('click', () => {
    projectModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
    }
});

// Email obfuscation (basic)
document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.getElementById('emailText');
    if (emailElement) {
        // Simple obfuscation to prevent email harvesting
        const email = 'gurudastagiri3' + '@' + 'gmail.com';
        emailElement.textContent = email;
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    function highlightNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Add animation to skill tags on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        observer.observe(tag);
    });
    
    // Add animation to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .skill-tag, .project-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s, transform 0.5s;
    }
    
    .skill-tag.animate-in, .project-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-links a.active {
        color: #3498db !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.1 });

    features.forEach(feature => {
        observer.observe(feature);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = document.querySelectorAll('.blog-post');

    const handleScroll = () => {
        blogPosts.forEach((post) => {
            const rect = post.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                post.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

const hoverElement = document.getElementById('logo-img');


hoverElement.addEventListener('mouseover', () => {
    hoverElement.style.backgroundColor = 'lightgreen';
});


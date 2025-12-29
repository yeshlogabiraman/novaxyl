// Email Configuration for NOVAXYL Consulting
// This ensures the email is always displayed correctly without protection

(function() {
    // Email components (separated to avoid automated scraping)
    const emailUser = 'contact';
    const emailDomain = 'novaxyl.com';
    const emailAddress = emailUser + '@' + emailDomain;
    
    // Function to initialize email links
    function initializeEmailLinks() {
        // Find all elements with class 'email-link'
        const emailLinks = document.querySelectorAll('.email-link');
        
        emailLinks.forEach(function(link) {
            // Set the href attribute
            link.href = 'mailto:' + emailAddress;
            // Set the display text
            link.textContent = emailAddress;
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeEmailLinks);
    } else {
        initializeEmailLinks();
    }
})();

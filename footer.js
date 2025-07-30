// Footer Configuration
const FOOTER_CONFIG = {
    author: "BDK234",
    year: new Date().getFullYear(),
    customText: null // Set custom text if needed
};

// Generate Footer HTML
function generateFooterHTML() {
    const footerText = FOOTER_CONFIG.customText || `${FOOTER_CONFIG.author}/${FOOTER_CONFIG.year}`;
    
    return `
        <div class="footer-signature">
            ${footerText}
        </div>
    `;
}

// Initialize Footer
function initializeFooter() {
    // Find the main container or body to append footer
    const container = document.querySelector('.container') || document.body;
    
    // Inject footer HTML at the end
    container.insertAdjacentHTML('beforeend', generateFooterHTML());
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFooter();
});

// Export functions for manual use if needed
window.FooterManager = {
    initialize: initializeFooter,
    config: FOOTER_CONFIG,
    setCustomText: function(text) {
        FOOTER_CONFIG.customText = text;
        // Re-initialize if already loaded
        const existingFooter = document.querySelector('.footer-signature');
        if (existingFooter) {
            existingFooter.remove();
            initializeFooter();
        }
    }
};
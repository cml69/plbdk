// Menu Configuration
const MENU_CONFIG = {
    title: "Barcode Generator Suite",
    subtitle: "by BDK234",
    logo: "BDK",
    version: "1.0",
    year: "2024",
    items: [
        {
            id: "plu-generator",
            href: "index.html",
            icon: "home",
            title: "PLU Barcode Generator"
        },
        {
            id: "barcode-karton",
            href: "barcodekarton.html",
            icon: "box",
            title: "Barcode Karton"
        },
        {
            id: "custom-barcode",
            href: "#",
            icon: "barcode",
            title: "Custom Barcode",
            subtitle: "(COMING SOON)"
        }
    ]
};

// Menu Functions
function toggleMenu() {
    const menu = document.getElementById('slideMenu');
    const overlay = document.getElementById('menuOverlay');
    
    if (menu.classList.contains('open')) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    const menu = document.getElementById('slideMenu');
    const overlay = document.getElementById('menuOverlay');
    
    menu.classList.add('open');
    overlay.classList.add('open');
}

function closeMenu() {
    const menu = document.getElementById('slideMenu');
    const overlay = document.getElementById('menuOverlay');
    
    menu.classList.remove('open');
    overlay.classList.remove('open');
}

// Generate Menu HTML
function generateMenuHTML() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    return `
        <!-- Menu Toggle Button -->
        <button class="menu-toggle no-print" onclick="toggleMenu()">☰ Menu</button>

        <!-- Slide Menu -->
        <div class="slide-menu no-print" id="slideMenu">
            <div class="menu-header">
                <div class="menu-logo">${MENU_CONFIG.logo}</div>
                <h3 class="menu-title">${MENU_CONFIG.title}</h3>
                <p class="menu-subtitle">${MENU_CONFIG.subtitle}</p>
            </div>
            
            <nav class="menu-nav">
                ${MENU_CONFIG.items.map(item => `
                    <a href="${item.href}" class="menu-item ${currentPage === item.href ? 'active' : ''}">
                        <div class="menu-icon ${item.icon}"></div>
                        ${item.title}
                        ${item.subtitle ? `<br><small>${item.subtitle}</small>` : ''}
                    </a>
                `).join('')}
            </nav>
            
            <div class="menu-footer">
                © ${MENU_CONFIG.year} ${MENU_CONFIG.subtitle.replace('by ', '')}<br>
                Version ${MENU_CONFIG.version}
            </div>
        </div>

        <!-- Menu Overlay -->
        <div class="menu-overlay no-print" id="menuOverlay" onclick="closeMenu()"></div>
    `;
}

// Initialize Menu
function initializeMenu() {
    // Inject menu HTML at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', generateMenuHTML());
    
    // Add event listeners
    setupMenuEventListeners();
}

// Setup Event Listeners
function setupMenuEventListeners() {
    // Close menu when clicking on menu links
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // Don't close menu for current page link or disabled links
            if (!this.classList.contains('active') && this.getAttribute('href') !== '#') {
                closeMenu();
            }
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
});

// Export functions for manual use if needed
window.MenuManager = {
    toggle: toggleMenu,
    open: openMenu,
    close: closeMenu,
    initialize: initializeMenu,
    config: MENU_CONFIG
};
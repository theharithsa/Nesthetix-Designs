/**
 * Unified Header & Footer Include System
 * Uses jQuery for local file compatibility
 */

(function() {
    'use strict';

    // Detect if we're in a subfolder (services, etc.)
    function isInSubfolder() {
        const path = window.location.pathname;
        return path.includes('/services/') || path.split('/').length > 2;
    }

    // Get the base path for assets and links
    function getBasePath() {
        return isInSubfolder() ? '../' : '';
    }

    // Load HTML content via jQuery
    function loadInclude(url, elementId) {
        return new Promise((resolve) => {
            const element = $('#' + elementId);
            if (element.length) {
                element.load(url, function(response, status) {
                    if (status === "success") {
                        console.log('Successfully loaded:', url);
                        resolve(true);
                    } else {
                        console.error('Failed to load:', url, status);
                        resolve(false);
                    }
                });
            } else {
                console.error('Element not found:', elementId);
                resolve(false);
            }
        });
    }

    // Set all navigation links based on current page location
    function updateNavigationLinks() {
        const basePath = getBasePath();
        const currentPage = window.location.pathname.split('/').pop();
        
        // Wait a bit for DOM to be ready after loading includes
        setTimeout(() => {
            // Main navigation links
            const links = {
                'logo-link': basePath + 'index.html',
                'logo-img': basePath + 'assets/images/logo2.svg',
                'home-link': basePath + 'index.html',
                'about-link': basePath + 'about.html',
                'service-link': basePath + 'services/service.html',
                'contact-link': basePath + 'contact.html',
                'project-link': basePath + 'project.html',
                'project-main-link': basePath + 'project.html',
                'project-single-link': basePath + 'project-single.html',
                'pricing-link': basePath + 'pricing.html',
                
                // Service submenu links
                'all-services-link': isInSubfolder() ? 'service.html' : 'services/service.html',
                '3d-mood-link': isInSubfolder() ? '3d-mood.html' : 'services/3d-mood.html',
                'space-planning-link': isInSubfolder() ? 'apace-planning.html' : 'services/apace-planning.html',
                'color-consultation-link': isInSubfolder() ? 'color-consultation.html' : 'services/color-consultation.html',
                'furniture-selection-link': isInSubfolder() ? 'furniture-selection.html' : 'services/furniture-selection.html',
                'lighting-design-link': isInSubfolder() ? 'lighting-design.html' : 'services/lighting-design.html',
                'material-finish-link': isInSubfolder() ? 'material-finish.html' : 'services/material-finish.html',
                'project-management-link': isInSubfolder() ? 'project-management.html' : 'services/project-management.html',
                'styling-decor-link': isInSubfolder() ? 'styling-decor.html' : 'services/styling-decor.html',
                
                // Right menu images
                'right-menu-logo': basePath + 'assets/images/logo2.svg',
                'project-img1-link': basePath + 'project-single.html',
                'project-img1': basePath + 'assets/imagesMod/Projects/imgs21.jpg',
                'project-img2-link': basePath + 'project-single.html',
                'project-img2': basePath + 'assets/imagesMod/Projects/imgs22.jpg',
                'project-img3-link': basePath + 'project-single.html',
                'project-img3': basePath + 'assets/imagesMod/Projects/imgs23.jpg',
                'project-img4-link': basePath + 'project-single.html',
                'project-img4': basePath + 'assets/imagesMod/Projects/imgs24.jpg',
                'project-img5-link': basePath + 'project-single.html',
                'project-img5': basePath + 'assets/imagesMod/Projects/imgs25.jpg',
                'project-img6-link': basePath + 'project-single.html',
                'project-img6': basePath + 'assets/imagesMod/Projects/imgs26.jpg',
                
                // Footer links
                'footer-logo-link': basePath + 'index.html',
                'footer-logo': basePath + 'assets/images/logo2.svg',
                'footer-service1-link': basePath + 'services/apace-planning.html',
                'footer-service2-link': basePath + 'services/color-consultation.html',
                'footer-service3-link': basePath + 'services/furniture-selection.html',
                'footer-service4-link': basePath + 'services/lighting-design.html',
                'footer-service5-link': basePath + 'services/styling-decor.html',
                
                // Gallery images
                'gallery-img1-link': basePath + 'project-single.html',
                'gallery-img1': basePath + 'assets/imagesMod/gallery/gal7.jpg',
                'gallery-img2-link': basePath + 'project-single.html',
                'gallery-img2': basePath + 'assets/imagesMod/gallery/gal2.jpg',
                'gallery-img3-link': basePath + 'project-single.html',
                'gallery-img3': basePath + 'assets/imagesMod/gallery/gal3.jpg',
                'gallery-img4-link': basePath + 'project-single.html',
                'gallery-img4': basePath + 'assets/imagesMod/gallery/gal4.jpg',
                'gallery-img5-link': basePath + 'project-single.html',
                'gallery-img5': basePath + 'assets/imagesMod/gallery/gal5.jpg',
                'gallery-img6-link': basePath + 'project-single.html',
                'gallery-img6': basePath + 'assets/imagesMod/gallery/gal6.jpg'
            };

            // Apply all links
            Object.keys(links).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    if (element.tagName === 'IMG') {
                        element.src = links[id];
                    } else {
                        element.href = links[id];
                    }
                }
            });

            // Set active states
            setActiveStates(currentPage);
        }, 100);
    }

    // Set active classes based on current page
    function setActiveStates(currentPage) {
        // Remove existing active classes
        $('.active').removeClass('active');

        // Set active based on current page
        const servicePages = ['service.html', '3d-mood.html', 'apace-planning.html', 'color-consultation.html', 
                             'furniture-selection.html', 'lighting-design.html', 'material-finish.html', 
                             'project-management.html', 'styling-decor.html'];

        if (currentPage === 'index.html' || currentPage === '') {
            $('#home-link').addClass('active');
        } else if (servicePages.includes(currentPage)) {
            $('#service-link').addClass('active');
            // Also set active service in submenu
            if (currentPage === 'service.html') {
                $('#all-services-link').addClass('active');
            } else if (currentPage === '3d-mood.html') {
                $('#3d-mood-link').addClass('active');
            } else if (currentPage === 'apace-planning.html') {
                $('#space-planning-link').addClass('active');
            } else if (currentPage === 'color-consultation.html') {
                $('#color-consultation-link').addClass('active');
            } else if (currentPage === 'furniture-selection.html') {
                $('#furniture-selection-link').addClass('active');
            } else if (currentPage === 'lighting-design.html') {
                $('#lighting-design-link').addClass('active');
            } else if (currentPage === 'material-finish.html') {
                $('#material-finish-link').addClass('active');
            } else if (currentPage === 'project-management.html') {
                $('#project-management-link').addClass('active');
            } else if (currentPage === 'styling-decor.html') {
                $('#styling-decor-link').addClass('active');
            }
        }
    }

    // Initialize the include system
    function initializeIncludes() {
        // Make sure jQuery is available
        if (typeof $ === 'undefined') {
            console.error('jQuery is required for the include system');
            return;
        }

        const basePath = getBasePath();
        
        // Load header and footer using jQuery
        Promise.all([
            loadInclude(basePath + 'includes/header.html', 'header-placeholder'),
            loadInclude(basePath + 'includes/footer.html', 'footer-placeholder')
        ]).then(results => {
            if (results[0] && results[1]) {
                // Both loaded successfully, update navigation
                updateNavigationLinks();
                console.log('Header and footer loaded successfully');
            } else {
                console.error('Failed to load header or footer');
            }
        });
    }

    // Wait for jQuery to be ready
    $(document).ready(function() {
        initializeIncludes();
    });

})();

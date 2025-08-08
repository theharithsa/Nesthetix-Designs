/**
 * Unified Header & Footer Include System - Inline Version
 * Embeds header and footer directly in JavaScript to avoid CORS issues
 */

(function() {
    'use strict';

    // Utility: ensure an overlay exists; returns the element
    function ensureOverlay(className, zIndex) {
        let ov = document.querySelector('.' + className);
        if (!ov) {
            ov = document.createElement('div');
            ov.className = className;
            ov.style.zIndex = (zIndex || 10000).toString();
            document.body.appendChild(ov);
        }
        return ov;
    }

    // Detect if we're in a subfolder (services, etc.)
    function isInSubfolder() {
        const path = window.location.pathname;
        const fileName = path.split('/').pop();
        
        // Check if we're in services folder by looking at the path structure
        // For file:// protocol, check if 'services' is in the path
        return path.includes('/services/');
    }

    // Get the base path for assets and links
    function getBasePath() {
        const path = window.location.pathname;
        
        // If we're in services folder, go up one level
        if (path.includes('/services/')) {
            return '../';
        }
        
        // Otherwise, we're in root directory
        return './';
    }

    // Get header HTML template
    function getHeaderHTML() {
        const basePath = getBasePath();
        const currentPage = window.location.pathname.split('/').pop();
        const isHomePage = (currentPage === 'index.html' || currentPage === '');
        
        // Use different header styles based on page type
        const headerClass = isHomePage ? 'header-style-1' : 'header-style-1 header-with-bg';
        
        return `
        <!-- Start header -->
        <header id="header">
            <div class="wpo-site-header ${headerClass}">
                <nav class="navigation navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div class="mobail-menu">
                                    <button type="button" class="navbar-toggler open-btn">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar first-angle"></span>
                                        <span class="icon-bar middle-angle"></span>
                                        <span class="icon-bar last-angle"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-6">
                                <div class="navbar-header">
                                    <a class="navbar-brand logo" href="${basePath}index.html"><img src="${basePath}assets/images/logo2.svg" alt="Nesthetix Designs"></a>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-2 col-1">
                                <div id="navbar" class="collapse navbar-collapse navigation-holder">
                                    <button class="menu-close">×</button>
                                    <ul class="nav navbar-nav mb-2 mb-lg-0">
                                        <li>
                                            <a href="${basePath}index.html" id="home-link">Home</a>
                                        </li>
                                        <li><a href="${basePath}about.html">About</a></li>
                                        <li class="menu-item-has-children">
                                            <a href="${basePath}services/service.html" id="service-link">Service</a>
                                            <ul class="sub-menu">
                                                <li><a href="${isInSubfolder() ? 'service.html' : 'services/service.html'}" id="all-services-link">All Services</a></li>
                                                <li><a href="${isInSubfolder() ? '3d-mood.html' : 'services/3d-mood.html'}" id="3d-mood-link">3D Mood Boards</a></li>
                                                <li><a href="${isInSubfolder() ? 'space-planning.html' : 'services/space-planning.html'}" id="space-planning-link">Space Planning</a></li>
                                                <li><a href="${isInSubfolder() ? 'color-consultation.html' : 'services/color-consultation.html'}" id="color-consultation-link">Color Consultation</a></li>
                                                <li><a href="${isInSubfolder() ? 'furniture-selection.html' : 'services/furniture-selection.html'}" id="furniture-selection-link">Furniture Selection</a></li>
                                                <li><a href="${isInSubfolder() ? 'lighting-design.html' : 'services/lighting-design.html'}" id="lighting-design-link">Lighting Design</a></li>
                                                <li><a href="${isInSubfolder() ? 'material-finish.html' : 'services/material-finish.html'}" id="material-finish-link">Material & Finish</a></li>
                                                <li><a href="${isInSubfolder() ? 'project-management.html' : 'services/project-management.html'}" id="project-management-link">Project Management</a></li>
                                                <li><a href="${isInSubfolder() ? 'styling-decor.html' : 'services/styling-decor.html'}" id="styling-decor-link">Styling & Decor</a></li>
                                                <li><a href="${basePath}pricing.html">Pricing</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="${basePath}project.html">Project</a>
                                            <ul class="sub-menu">
                                                <li><a href="${basePath}project.html">Project</a></li>
                                                <li><a href="${basePath}project-single.html">Project Single</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="${basePath}contact.html">Contact</a></li>
                                    </ul>
                                </div><!-- end of nav-collapse -->
                            </div>
                            <div class="col-lg-1 col-md-1 col-2">
                                <div class="header-right">
                                    <div class="header-right-menu-wrapper">
                                        <div class="header-right-menu">
                                            <div class="right-menu-toggle-btn">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <div class="header-right-menu-wrap">
                                                <button class="right-menu-close">×</button>
                                                <div class="logo"><img src="${basePath}assets/images/logo2.svg" alt="Nesthetix Designs"></div>
                                                <div class="header-right-sec">
                                                    <div class="project-widget widget">
                                                        <h3>Our Latest Projects</h3>
                                                        <ul>
                                                            <li><a href="${basePath}project-single.html"><img src="${basePath}assets/imagesMod/Projects/imgs21.jpg" alt=""></a></li>
                                                            <li><a href="${basePath}project-single.html"><img src="${basePath}assets/imagesMod/Projects/imgs22.jpg" alt=""></a></li>
                                                            <li><a href="${basePath}project-single.html"><img src="${basePath}assets/imagesMod/Projects/imgs23.jpg" alt=""></a></li>
                                                            <li><a href="${basePath}project-single.html"><img src="${basePath}assets/imagesMod/Projects/imgs24.jpg" alt=""></a></li>
                                                            <li><a href="${basePath}project-single.html"><img src="${basePath}assets/imagesMod/Projects/imgs25.jpg" alt=""></a></li>
                                                            <li><a href="${basePath}project-single.html"><img src="${basePath}assets/imagesMod/Projects/imgs26.jpg" alt=""></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="widget wpo-contact-widget">
                                                        <div class="widget-title">
                                                            <h3>Contact Us</h3>
                                                        </div>
                                                        <div class="contact-ft">
                                                            <ul>
                                                                <li><i class="fi flaticon-location"></i>Ground floor,
                                                                    THE HULKUL, 81/37, Lavelle Road,
                                                                    <br> Shanthala Nagar, Ashok Nagar,<br> Bengaluru,
                                                                    Karnataka 560001
                                                                </li>
                                                                <li><i class="fi flaticon-telephone"></i>+91 9606 133
                                                                    309 <br>
                                                                    +91 9916 273 917</li>
                                                                <li><i
                                                                        class="fi flaticon-email"></i>info@nesthetixdesigns.com
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="widget newsletter-widget">
                                                        <div class="widget-title">
                                                            <h3>Newsletter</h3>
                                                        </div>
                                                        <form>
                                                            <div class="input-1">
                                                                <input type="email" class="form-control"
                                                                    placeholder="Email Address *" required="">
                                                                <div class="submit clearfix">
                                                                    <button type="submit"><i
                                                                            class="ti-email"></i></button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end of container -->
                </nav>
            </div>
        </header>
        <!-- end of header -->`;
    }

    // Get footer HTML template
    function getFooterHTML() {
        const basePath = getBasePath();
        return `
        <!-- start of wpo-site-footer-section -->
        <footer class="wpo-site-footer">
            <div class="wpo-upper-footer">
                <div class="container">
                    <div class="row">
                        <div class="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="widget about-widget">
                                <div class="logo widget-title">
                                    <a class="logo" href="${basePath}index.html"><img src="${basePath}assets/images/logo2.svg" alt=""></a>
                                </div>
                                <p>Nesthetix Designs transforms houses, offices, and spaces into soulful reflections of
                                    your style, purpose, and dreams.
                                    With passion and precision, we craft interiors that don't just look beautiful—but
                                    feel like home.</p>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/nesthetixdesigns/">
                                            <i class="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/company/nesthetix-designs/?originalSubdomain=in">
                                            <i class="ti-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/nesthetixdesigns/">
                                            <i class="ti-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://maps.app.goo.gl/hbs9BthQKVZJv8Ey9">
                                            <i class="ti-google"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="widget link-widget">
                                <div class="widget-title">
                                    <h3>Our Services</h3>
                                </div>
                                <ul>
                                    <li><a href="${basePath}services/apace-planning.html">Space planning</a></li>
                                    <li><a href="${basePath}services/color-consultation.html">Color and material selection</a></li>
                                    <li><a href="${basePath}services/furniture-selection.html">Best Interior</a></li>
                                    <li><a href="${basePath}services/lighting-design.html">Lighting and acoustics management</a></li>
                                    <li><a href="${basePath}services/styling-decor.html">Complete Decoration</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="widget wpo-service-link-widget">
                                <div class="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div class="contact-ft">
                                    <ul>
                                        <li><i class="fi flaticon-location"></i>Ground floor, THE HULKUL, 81/37, Lavelle
                                            Road,<br> Shanthala Nagar, Ashok Nagar,<br> Bengaluru, Karnataka 560001</li>
                                        <li><i class="fi flaticon-telephone"></i>+91 9606 133 309 <br>
                                            +91 9916 273 917</li>
                                        <li><i class="fi flaticon-email"></i>info@nesthetixdesigns.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="widget instagram">
                                <div class="widget-title">
                                    <h3>Our Gallery</h3>
                                </div>
                                <ul class="d-flex">
                                    <li><a href="${basePath}project-single.html"><img src="${basePath}assets/imagesMod/gallery/gal7.jpg" alt=""></a></li>
                                    <li><a href="${basePath}project-single.html"><img src="${basePath}assets/imagesMod/gallery/gal2.jpg" alt=""></a></li>
                                    <li><a href="${basePath}project-single.html"><img src="${basePath}assets/imagesMod/gallery/gal3.jpg" alt=""></a></li>
                                    <li><a href="${basePath}project-single.html"><img src="${basePath}assets/imagesMod/gallery/gal4.jpg" alt=""></a></li>
                                    <li><a href="${basePath}project-single.html"><img src="${basePath}assets/imagesMod/gallery/gal5.jpg" alt=""></a></li>
                                    <li><a href="${basePath}project-single.html"><img src="${basePath}assets/imagesMod/gallery/gal6.jpg" alt=""></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> <!-- end container -->
            </div>
            <div class="wpo-lower-footer">
                <div class="container">
                    <div class="row">
                        <div class="col col-xs-12">
                            <ul>
                                <li>&copy; 2025 Nesthetix Designs LLP. Design By <a
                                        href="https://Inspi.in">InspiLabs</a>. All Rights
                                    Reserved.</li>
                                <li><a href="#">Terms of use |</a> <a href="#">Privacy Environmental Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- end of wpo-site-footer-section -->`;
    }

    // Set active classes based on current page
    function setActiveStates() {
        const currentPage = window.location.pathname.split('/').pop();
        
        // Remove existing active classes
        document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));

        // Set active based on current page
        const servicePages = ['service.html', '3d-mood.html', 'apace-planning.html', 'color-consultation.html', 
                             'furniture-selection.html', 'lighting-design.html', 'material-finish.html', 
                             'project-management.html', 'styling-decor.html'];

        if (currentPage === 'index.html' || currentPage === '') {
            const homeLink = document.getElementById('home-link');
            if (homeLink) homeLink.classList.add('active');
        } else if (servicePages.includes(currentPage)) {
            const serviceLink = document.getElementById('service-link');
            if (serviceLink) serviceLink.classList.add('active');
            
            // Also set active service in submenu
            const linkMap = {
                'service.html': 'all-services-link',
                '3d-mood.html': '3d-mood-link',
                'apace-planning.html': 'space-planning-link',
                'color-consultation.html': 'color-consultation-link',
                'furniture-selection.html': 'furniture-selection-link',
                'lighting-design.html': 'lighting-design-link',
                'material-finish.html': 'material-finish-link',
                'project-management.html': 'project-management-link',
                'styling-decor.html': 'styling-decor-link'
            };
            
            if (linkMap[currentPage]) {
                const subLink = document.getElementById(linkMap[currentPage]);
                if (subLink) subLink.classList.add('active');
            }
        }
    }

    // Initialize the include system
    function initializeIncludes() {
        // Insert header
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = getHeaderHTML();
        }

        // Insert footer
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = getFooterHTML();
        }

        // Set active states
        setActiveStates();
        
        // Initialize header/menus after content is loaded (immediate, no artificial delay)
        requestAnimationFrame(() => {
            initHeaderScrollBehavior();
            initRightMenuToggle();
            initMobileMenuToggle();
            initMobileSubMenus();
        });

        console.log('Header and footer loaded successfully (inline version)');
    }
    
    // Submenu toggle for mobile/tablet (<=991px) – mirrors original theme behavior
    function initMobileSubMenus() {
        try {
            const rootList = document.querySelector('#navbar > ul') || document.querySelector('.navigation-holder > ul');

            const applySmallNav = () => {
                if (!rootList) return;
                if (window.innerWidth <= 991) {
                    rootList.classList.add('small-nav');
                } else {
                    rootList.classList.remove('small-nav');
                }
            };

            const bindHandlers = () => {
                const links = document.querySelectorAll('.navigation-holder .menu-item-has-children > a');
                links.forEach(link => {
                    // Avoid duplicate listeners by replacing node
                    const newLink = link.cloneNode(true);
                    link.parentNode.replaceChild(newLink, link);

                    newLink.addEventListener('click', (e) => {
                        if (window.innerWidth <= 991) {
                            e.preventDefault();
                            e.stopPropagation();
                            const li = newLink.parentElement;
                            if (!li) return;
                            const wasOpen = li.classList.contains('active');
                            // close siblings
                            const siblings = li.parentElement ? Array.from(li.parentElement.children) : [];
                            siblings.forEach(sib => {
                                if (sib !== li) sib.classList.remove('active');
                            });
                            // toggle current
                            if (wasOpen) {
                                li.classList.remove('active');
                            } else {
                                li.classList.add('active');
                            }
                        }
                    });
                });
            };

            applySmallNav();
            bindHandlers();

            // Reapply on resize
            window.addEventListener('resize', () => {
                applySmallNav();
                if (window.innerWidth > 991) {
                    document.querySelectorAll('.navigation-holder .menu-item-has-children.active').forEach(li => li.classList.remove('active'));
                }
            });
        } catch (err) {
            console.error('initMobileSubMenus error:', err);
        }
    }

    // Header scroll behavior
    function initHeaderScrollBehavior() {
        const header = document.getElementById('header');
        if (!header) return;
        
        const currentPage = window.location.pathname.split('/').pop();
        const isHomePage = (currentPage === 'index.html' || currentPage === '');
        
        let lastScrollTop = 0;
        let isFloating = false;
        
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add floating header effect after scrolling 100px
            if (scrollTop > 100 && !isFloating) {
                header.classList.add('header-floating');
                isFloating = true;
            } else if (scrollTop <= 100 && isFloating) {
                header.classList.remove('header-floating');
                isFloating = false;
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }
        
        // Add scroll event listener with throttling
        let ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(handleScroll);
                ticking = true;
                setTimeout(() => { ticking = false; }, 16);
            }
        }
        
        // Only add scroll listener for homepage
        if (isHomePage) {
            window.addEventListener('scroll', requestTick);
        }
    }
    
    // Initialize right menu toggle functionality
    function initRightMenuToggle() {
        // Wait for DOM to be ready
        setTimeout(function() {
            const cartToggleBtn = document.querySelector(".right-menu-toggle-btn");
            const cartContent = document.querySelector(".header-right-menu-wrap");
            const cartCloseBtn = document.querySelector(".right-menu-close");
            const overlay = ensureOverlay('right-menu-overlay', 10005);
            
            console.log('Right menu elements found:', {
                cartToggleBtn: !!cartToggleBtn,
                cartContent: !!cartContent,
                cartCloseBtn: !!cartCloseBtn
            });

            if (cartToggleBtn && cartContent) {
                console.log('Setting up right menu events...');
                
                // Remove any existing event listeners by cloning the toggle button
                const newToggleBtn = cartToggleBtn.cloneNode(true);
                cartToggleBtn.parentNode.replaceChild(newToggleBtn, cartToggleBtn);

                // Toggle menu on button click
                newToggleBtn.addEventListener("click", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Right menu toggle clicked');
                    
                    const isActive = cartContent.classList.contains("right-menu-active");
                    
                    if (isActive) {
                        cartContent.classList.remove("right-menu-active");
                        newToggleBtn.classList.remove("active");
                        document.body.style.overflow = '';
                        overlay.classList.remove('active');
                        console.log('Right menu closed');
                    } else {
                        cartContent.classList.add("right-menu-active");
                        newToggleBtn.classList.add("active");
                        document.body.style.overflow = 'hidden';
                        overlay.classList.add('active');
                        console.log('Right menu opened');
                    }
                });

                // Close menu on close button click
                if (cartCloseBtn) {
                    // Remove existing event listeners by cloning
                    const newCloseBtn = cartCloseBtn.cloneNode(true);
                    cartCloseBtn.parentNode.replaceChild(newCloseBtn, cartCloseBtn);
                    
                    newCloseBtn.addEventListener("click", function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Right menu close clicked');
                        cartContent.classList.remove("right-menu-active");
                        newToggleBtn.classList.remove("active");
                        document.body.style.overflow = '';
                        overlay.classList.remove('active');
                    });
                    
                    // Also add touch event for mobile
                    newCloseBtn.addEventListener("touchstart", function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Right menu close touched');
                        cartContent.classList.remove("right-menu-active");
                        newToggleBtn.classList.remove("active");
                        document.body.style.overflow = '';
                        overlay.classList.remove('active');
                    });
                }

                // Close menu when clicking outside
                document.addEventListener("click", function(e) {
                    if (!cartContent.contains(e.target) && !newToggleBtn.contains(e.target)) {
                        cartContent.classList.remove("right-menu-active");
                        newToggleBtn.classList.remove("active");
                        document.body.style.overflow = '';
                        overlay.classList.remove('active');
                    }
                });

                // Clicking inside the panel should not close it
                cartContent.addEventListener('click', function(e){ e.stopPropagation(); });
                // Clicking overlay closes it
                overlay.addEventListener('click', function(){
                    cartContent.classList.remove("right-menu-active");
                    if (newToggleBtn) newToggleBtn.classList.remove("active");
                    document.body.style.overflow = '';
                    overlay.classList.remove('active');
                });
                
                // ESC key to close menu
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape' && cartContent.classList.contains("right-menu-active")) {
                        cartContent.classList.remove("right-menu-active");
                        newToggleBtn.classList.remove("active");
                        document.body.style.overflow = '';
                        overlay.classList.remove('active');
                    }
                });
                
                console.log('Right menu setup complete');
            } else {
                console.error('Right menu elements not found');
            }
        }, 300);
    }
    
    // Initialize mobile menu toggle functionality - Original Theme Approach
    function initMobileMenuToggle() {
        // Attach handlers as soon as header exists; retry briefly if not yet present
        let attempts = 0;
        const maxAttempts = 15; // ~3s worst-case
        const tryBind = () => {
            console.log('Initializing mobile menu with original theme approach...');
            console.log('Current page:', window.location.pathname);
            console.log('Window width:', window.innerWidth);
            
            // Convert original jQuery functionality to vanilla JavaScript
            // Original: $('.navigation-holder').removeClass('slideInn');
            const navbar = document.querySelector(".navigation-holder");
            const openBtn = document.querySelector(".mobail-menu .open-btn");
            const xbutton = document.querySelector(".mobail-menu .navbar-toggler");

            console.log('Elements found:', {
                navbar: !!navbar,
                openBtn: !!openBtn,
                xbutton: !!xbutton
            });

            if (openBtn && navbar && xbutton) {
                console.log('Mobile menu elements found - setting up original theme handlers');
                const mmOverlay = ensureOverlay('mobile-menu-overlay', 10015);

                // Remove any pre-bound handlers (e.g., from jQuery script.js) to avoid double toggle
                const newOpenBtn = openBtn.cloneNode(true);
                openBtn.parentNode.replaceChild(newOpenBtn, openBtn);
                // Update references
                const toggler = newOpenBtn;
                
                // Toggle mobile navigation - converted from original toggleMobileNavigation()
                toggler.addEventListener("click", function(e) {
                    e.preventDefault();
                    // prevent body click closer from firing
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    console.log('Open button clicked');
                    navbar.classList.toggle("slideInn");
                    toggler.classList.toggle("x-close");
                    const isOpen = navbar.classList.contains('slideInn');
                    if (isOpen) {
                        mmOverlay.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    } else {
                        mmOverlay.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                    console.log('Mobile menu toggled - slideInn:', navbar.classList.contains("slideInn"));
                    console.log('Hamburger toggled - x-close:', toggler.classList.contains("x-close"));
                    return false;
                });

                // Prevent clicks inside the opened navbar from bubbling to body and closing it
                navbar.addEventListener('click', function(ev) {
                    ev.stopPropagation();
                });

                // Close menu on body click - converted from original $("body").on("click")
        document.body.addEventListener("click", function(e) {
                    // Don't close if clicking on the menu itself or the toggle button
                    if (!navbar.contains(e.target) && !openBtn.contains(e.target)) {
                        console.log('Body click - closing menu');
            navbar.classList.remove('slideInn');
            toggler.classList.remove('x-close');
            const overlay = document.querySelector('.mobile-menu-overlay');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = '';
            // Return navbar to header
            try { restoreNavbarToHeader(); } catch {}
                    }
                });

                // Close button handlers - converted from original $(".menu-close").on("click")
                function setupCloseButtons() {
                    const closeButtons = document.querySelectorAll(".menu-close");
                    console.log('Setting up close buttons:', closeButtons.length);
                    
                    closeButtons.forEach(function(closeBtn, index) {
                        // Remove any existing event listeners
                        const newCloseBtn = closeBtn.cloneNode(true);
                        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
                        
                        newCloseBtn.addEventListener("click", function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log(`Close button ${index + 1} clicked`);
                            navbar.classList.remove('slideInn');
                            toggler.classList.remove('x-close');
                            console.log('Menu closed via close button');
                            const overlay = document.querySelector('.mobile-menu-overlay');
                            if (overlay) overlay.classList.remove('active');
                            document.body.style.overflow = '';
                            try { restoreNavbarToHeader(); } catch {}
                        });
                    });
                }

                // Set up close buttons immediately and after a delay for dynamically loaded content
                setupCloseButtons();
                setTimeout(setupCloseButtons, 200);
                setTimeout(setupCloseButtons, 500); // Extra delay for slower devices

                console.log('Original theme mobile menu setup complete');
                // Clicking overlay should close the mobile menu
                mmOverlay.addEventListener('click', function(){
                    navbar.classList.remove('slideInn');
                    toggler.classList.remove('x-close');
                    mmOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
            } else {
                console.error('Mobile menu elements not found:', {
                    openBtn: !!openBtn,
                    navbar: !!navbar, 
                    xbutton: !!xbutton
                });
                
                // Try alternative selectors
                const altNavbar = document.querySelector("#navbar, .mobile-navigation, .collapse");
                const altOpenBtn = document.querySelector(".navbar-toggler, .mobile-toggle, [data-toggle='collapse']");
                const altXButton = document.querySelector(".navbar-toggler");
                
                console.log('Alternative selectors found:', {
                    altNavbar: !!altNavbar,
                    altOpenBtn: !!altOpenBtn,
                    altXButton: !!altXButton
                });
                // Retry shortly in case header injected just now
                if (attempts++ < maxAttempts) {
                    setTimeout(tryBind, 200);
                }
            }
        };
        tryBind();
    }
    
    // Add CSS for header styles
    function addHeaderStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Header background for non-home pages */
            .header-with-bg {
                background: rgba(255, 255, 255, 0.95) !important;
                backdrop-filter: blur(10px);
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            
            .header-with-bg .navbar-nav > li > a {
                color: #333 !important;
            }
            
            /* Floating header styles - desktop only */
            @media (min-width: 992px) {
                #header {
                    transition: all 0.3s ease;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 9999;
                    width: 100%;
                }
            }
            
            .header-floating {
                background: rgba(255, 255, 255, 0.98) !important;
                backdrop-filter: blur(15px);
                box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;
                animation: slideDown 0.3s ease;
            }
            
            .header-floating .navbar-nav > li > a {
                color: #333 !important;
            }
            
            @keyframes slideDown {
                from {
                    transform: translateY(-100%);
                }
                to {
                    transform: translateY(0);
                }
            }
            
            /* Ensure page content isn't hidden behind fixed header (desktop only) */
            @media (min-width: 992px) {
                body { padding-top: 80px; }
            }
            
            /* Logo visibility fix */
            .navbar-brand img {
                max-height: 50px;
                width: auto;
                display: block;
            }
            
            /* Mobile adjustments */
            @media (max-width: 991px) {
                /* No body padding on mobile/tablet since header is not fixed */
                body { padding-top: 0; }
                
                .navbar-brand img {
                    max-height: 40px;
                }
                /* Ensure page titles clear the header on small screens */
                .wpo-page-title { padding-top: 20px !important; }
                
                /* Mobile header should always have background and not be fixed/absolute */
                #header { position: relative !important; }
                /* Override theme's .header-style-1 absolute positioning on mobile */
                #header .wpo-site-header,
                #header .wpo-site-header.header-style-1 {
                    position: relative !important;
                    background: rgba(255, 255, 255, 0.95) !important;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                /* Ensure any direct usage still gets overridden */
                .header-style-1 { position: relative !important; }
                
                #header .navbar-nav > li > a {
                    color: #333 !important;
                }
                
                /* Mobile menu styling */
                .navigation-holder {
                    position: fixed !important;
                    top: 0 !important;
                    left: -100% !important;
                    width: 320px !important;
                    height: 100vh !important;
                    background: #ffffff !important;
                    z-index: 10020 !important; /* higher than right sidebar */
                    transition: all 0.4s ease !important;
                    overflow-y: auto !important;
                    padding: 80px 20px 20px 20px !important;
                    box-shadow: 3px 0 20px rgba(0,0,0,0.2) !important;
                    display: block !important;
                }
                
                .navigation-holder.slideInn {
                    left: 0 !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                }
                
                .navigation-holder .navbar-nav,
                .navigation-holder .main-menu,
                .navigation-holder .main-menu ul {
                    flex-direction: column !important;
                    width: 100% !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    list-style: none !important;
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                }
                
                .navigation-holder .navbar-nav li,
                .navigation-holder .main-menu li {
                    width: 100% !important;
                    margin-bottom: 0 !important;
                    border-bottom: 1px solid #f0f0f0 !important;
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                }
                
                .navigation-holder .navbar-nav li a,
                .navigation-holder .main-menu li a {
                    color: #333 !important;
                    padding: 18px 10px !important;
                    display: block !important;
                    font-weight: 500 !important;
                    text-decoration: none !important;
                    transition: all 0.3s ease !important;
                    font-size: 16px !important;
                    border: none !important;
                    background: transparent !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                }
                
                .navigation-holder .navbar-nav li a:hover {
                    color: #007bff !important;
                    background: #f8f9fa !important;
                }
                
                /* Force all elements to be visible when mobile menu is open */
                .navigation-holder.slideInn * {
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                }
                
                /* Additional visibility rules */
                .navigation-holder.slideInn .navbar-nav,
                .navigation-holder.slideInn .main-menu,
                .navigation-holder.slideInn ul,
                .navigation-holder.slideInn li,
                .navigation-holder.slideInn a {
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    position: relative !important;
                }
                
                /* Menu item indicators */
                .navigation-holder .menu-item-has-children > a:after {
                    content: '+' !important;
                    float: right !important;
                    font-size: 16px !important;
                    color: #666 !important;
                }
                
                .navigation-holder .menu-item-has-children.active > a:after {
                    content: '−' !important;
                    color: #007bff !important;
                }
                
                /* Sub menu styling for mobile */
                .navigation-holder .sub-menu {
                    position: static !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    background: #f8f9fa !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    box-shadow: none !important;
                    border-radius: 0 !important;
                    max-height: 0 !important;
                    overflow: hidden !important;
                    transition: max-height 0.3s ease !important;
                    width: 100% !important;
                    left: auto !important;
                    top: auto !important;
                    transform: none !important;
                }
                
                .navigation-holder .menu-item-has-children.active .sub-menu {
                    max-height: 600px !important;
                }
                
                .navigation-holder .sub-menu li {
                    border-bottom: 1px solid #e0e0e0 !important;
                }
                
                .navigation-holder .sub-menu li a {
                    padding: 15px 40px !important;
                    color: #666 !important;
                    font-size: 14px !important;
                    font-weight: 400 !important;
                }
                
                .navigation-holder .sub-menu li a:hover {
                    color: #007bff !important;
                    background: #ffffff !important;
                }
                
                /* Simple mobile menu styling - match original theme exactly */
                @media (max-width: 991px) {
                    .menu-close {
                        display: block !important;
                        background: none !important;
                        color: #fff !important;
                        border: 1px solid #fff !important;
                        width: 40px !important;
                        height: 40px !important;
                        line-height: 40px !important;
                        text-align: center !important;
                        margin: 30px auto !important;
                        cursor: pointer !important;
                        z-index: 99 !important;
                    }
                    
                    .menu-close:hover {
                        color: #CAAB06 !important;
                        border-color: #CAAB06 !important;
                    }
                    
                    /* Remove conflicting navigation rules - let original CSS handle it */
                    .navigation-holder {
                        /* Let original theme CSS handle all mobile menu styling */
                    }
                    
                    /* Ensure mobile toggle button is visible */
                    .mobail-menu {
                        display: block !important;
                    }
                    
                    .dl-block {
                        display: block !important;
                    }
                    
                    /* Mobile navigation toggle styles - match original */
                    .navbar-toggler {
                        background-color: #CAAB06 !important;
                        width: 40px !important;
                        height: 35px !important;
                        border: 0 !important;
                        padding: 5px 10px !important;
                        outline: 0 !important;
                        position: relative !important;
                        z-index: 20 !important;
                    }
                    
                    .navbar-toggler:focus {
                        outline: none !important;
                        box-shadow: none !important;
                    }
                    
                    .navbar-toggler span {
                        background-color: #fff !important;
                        width: 20px !important;
                        display: block !important;
                        height: 2px !important;
                        margin-bottom: 5px !important;
                    }
                    
                    .navbar-toggler span:last-child {
                        margin: 0 !important;
                    }
                }
                
                /* Mobile overlay - simplified */
                .mobile-menu-overlay,
                .right-menu-overlay {
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100% !important;
                    height: 100% !important;
                    background: rgba(0,0,0,0.6) !important;
                    z-index: 10000 !important;
                    opacity: 0 !important;
                    visibility: hidden !important;
                    transition: all 0.3s ease !important;
                    pointer-events: none !important;
                }
                .mobile-menu-overlay.active,
                .right-menu-overlay.active { opacity: 1 !important; visibility: visible !important; pointer-events: auto !important; }
                
                /* Note: no fixed header on <=991px, menu panel uses original theme slideInn */
            }
            
            /* Fix homepage header transparency issue */
            .header-floating,
            .header-with-bg {
                background: rgba(255, 255, 255, 0.95) !important;
                backdrop-filter: blur(15px);
                box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;
            }
            
            .header-floating .navbar-nav > li > a,
            .header-with-bg .navbar-nav > li > a {
                color: #333 !important;
            }
            
            /* Page title styling - White titles */
            .wpo-page-title h1,
            .wpo-page-title h2 {
                color: #ffffff !important;
            }
            
            .wpo-breadcumb-wrap h1,
            .wpo-breadcumb-wrap h2 {
                color: #ffffff !important;
            }
            
            /* Service page full width content */
            .wpo-service-single-area .col-lg-12 {
                max-width: 100%;
            }
            
            /* Service card styling - curved card structure */
            .wpo-service-card-wrap {
                background: #ffffff;
                border-radius: 25px;
                box-shadow: 0px 5px 20px rgba(22, 14, 71, 0.15);
                padding: 40px;
                margin: 40px 0;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            .wpo-service-card-wrap:hover {
                transform: translateY(-5px);
                box-shadow: 0px 10px 30px rgba(22, 14, 71, 0.2);
            }
            
            /* Center content and improve spacing */
            .wpo-service-single-area .container {
                max-width: 1200px;
            }
            
            .wpo-service-single-item {
                margin-bottom: 30px;
            }
            
            .wpo-service-single-item:last-child {
                margin-bottom: 0;
            }
            
            /* Enhanced main image styling within card */
            .wpo-service-single-main-img {
                border-radius: 15px;
                overflow: hidden;
                margin-bottom: 25px;
            }
            
            .wpo-service-single-main-img img {
                width: 100%;
                height: auto;
                transition: transform 0.3s ease;
            }
            
            .wpo-service-single-main-img:hover img {
                transform: scale(1.02);
            }
            
            /* Detail images styling */
            .wpo-p-details-img {
                border-radius: 12px;
                overflow: hidden;
                margin-bottom: 15px;
            }
            
            /* Responsive adjustments for cards */
            @media (max-width: 768px) {
                .wpo-service-card-wrap {
                    padding: 25px;
                    margin: 20px 0;
                    border-radius: 20px;
                }
                
                .wpo-service-single-area .col-lg-10 {
                    padding: 0 15px;
                }
            }
            
            /* Use original theme styles - only minimal overrides needed */
            .header-right-menu-wrap {
                background: #292932 !important;
                z-index: 10010 !important; /* above page and header */
            }
            
            .right-menu-close {
                background-color: #333333 !important;
                color: #fff !important;
                border: none !important;
                font-size: 24px !important;
                font-weight: 300 !important;
                line-height: 1 !important;
                padding: 0 !important;
            }
            
            .right-menu-close:hover {
                background-color: #555 !important;
            }
            
            /* Mobile menu overlay */
            .mobile-menu-overlay {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                background: rgba(0, 0, 0, 0.5) !important;
                z-index: 9998 !important;
                opacity: 0 !important;
                visibility: hidden !important;
                transition: all 0.3s ease !important;
            }
            
            .mobile-menu-overlay.active {
                opacity: 1 !important;
                visibility: visible !important;
            }
            
            @media (max-width: 480px) {
                .header-right-menu-wrap {
                    width: 280px !important;
                    right: -280px !important;
                    padding: 20px !important;
                    height: 100vh !important;
                    min-height: 100vh !important;
                }
                
                .header-right-menu-wrap.right-menu-active {
                    right: 0 !important;
                }
            }
            
            /* Ensure right sidebar content takes full height */
            .header-right-menu-wrapper,
            .header-right-menu {
                height: auto !important;
                max-height: none !important;
                min-height: auto !important;
            }
            
            /* Force right sidebar to ignore header constraints */
            .header-right-menu-wrap {
                position: fixed !important;
                top: 0 !important;
                bottom: 0 !important;
                height: auto !important;
                min-height: 100vh !important;
                z-index: 10010 !important; /* ensure above content */
            }
            
            /* Right sidebar content styling for black background */
            .header-right-menu-wrap * {
                color: #ffffff !important;
            }
            
            .header-right-menu-wrap h3,
            .header-right-menu-wrap h4,
            .header-right-menu-wrap h5 {
                color: #ffffff !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
                padding-bottom: 10px !important;
                margin-bottom: 15px !important;
            }
            
            .header-right-menu-wrap a {
                color: #cccccc !important;
                transition: color 0.3s ease !important;
            }
            
            .header-right-menu-wrap a:hover {
                color: #ffffff !important;
            }
            
            .header-right-menu-wrap .widget {
                margin-bottom: 30px !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
                padding-bottom: 20px !important;
            }
            
            .header-right-menu-wrap .logo img {
                filter: brightness(0) invert(1) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            addHeaderStyles();
            initializeIncludes();
        });
    } else {
        addHeaderStyles();
        initializeIncludes();
    }

    // Simple, working mobile menu
    function initSimpleMobileMenu() {
        setTimeout(function() {
            console.log('Initializing simple mobile menu...');
            
            const openBtn = document.querySelector('.open-btn');
            const navbar = document.querySelector('.navigation-holder');
            const closeBtn = document.querySelector('.menu-close');
            
            console.log('Elements found:', { 
                openBtn: !!openBtn, 
                navbar: !!navbar, 
                closeBtn: !!closeBtn 
            });
            
            if (openBtn && navbar) {
                openBtn.onclick = function(e) {
                    e.preventDefault();
                    console.log('Open clicked');
                    navbar.classList.toggle('slideInn');
                    openBtn.classList.toggle('x-close');
                };
            }
            
            if (closeBtn && navbar && openBtn) {
                closeBtn.onclick = function(e) {
                    e.preventDefault();
                    console.log('Close clicked');
                    navbar.classList.remove('slideInn');
                    openBtn.classList.remove('x-close');
                };
            }
            
            // Close when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.navigation-holder') && !e.target.closest('.mobail-menu')) {
                    if (navbar) navbar.classList.remove('slideInn');
                    if (openBtn) openBtn.classList.remove('x-close');
                }
            });
            
        }, 200);
    }
    
    // Initialize simple mobile menu instead of complex one
    initSimpleMobileMenu();

})();


export const sidebar = document.querySelector('.sidebar');
export const sidebarClose = document.getElementById('sidebar-close');
export const submenuToggles = document.querySelectorAll('.has-submenu > .nav-link');
export const floatingSubmenu = document.querySelector('.floating-submenu');
export const sidebarLinkFavorites = document.querySelector( '#sidebarLinkFavorites' );

export const closeAllSubmenus = () => {
    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.classList.remove('open');
        try {
            const arrow = submenu.previousElementSibling.querySelector('.submenu-arrow');
            if ( arrow) arrow.classList.remove('open');   
        } catch (error) {
            return null;
        }
    });
}

export const closeFloatingSubmenu = () => {
    floatingSubmenu.classList.remove('active');
    floatingSubmenu.innerHTML = '';
    sidebarLinkFavorites.classList.remove( 'mt-works' );
    floatingSubmenu.classList.remove( 'profile' );
    floatingSubmenu.classList.remove( 'works' );
}

function updateArrowsVisibility() {
    const arrows = document.querySelectorAll('.submenu-arrow');
    arrows.forEach(arrow => {
        arrow.style.display = sidebar.classList.contains('closed') ? 'none' : '';
    });
}

sidebarClose.addEventListener('click', function() {
    sidebar.classList.toggle('closed');
    if (sidebar.classList.contains('closed')) {
        this.querySelector('i').classList.replace('bx-chevron-left', 'bx-chevron-right');
    } else {
        this.querySelector('i').classList.replace('bx-chevron-right', 'bx-chevron-left');
    }
    closeAllSubmenus();
    closeFloatingSubmenu();
    updateArrowsVisibility();
});

submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        const submenuId = this.getAttribute('data-submenu');
        const submenu = document.getElementById(`${submenuId}-submenu`);
        const arrow = this.querySelector('.submenu-arrow');
        if (window.innerWidth <= 768) {
            closeAllSubmenus();
            if (floatingSubmenu.classList.contains('active') && 
                floatingSubmenu.querySelector(`#${submenuId}-submenu`)) {
                closeFloatingSubmenu();
            } else {
                const submenuTitle = this.querySelector('span').textContent;
                floatingSubmenu.innerHTML = `
                    <div class="p-4">
                        <h3 class="text-lg font-bold mb-4">${submenuTitle}</h3>
                        ${submenu.outerHTML}
                    </div>
                `;
                floatingSubmenu.classList.add('active');
            }
        } else {
            if (sidebar.classList.contains('closed')) {
                closeAllSubmenus();
                if (floatingSubmenu.classList.contains('active') && 
                    floatingSubmenu.querySelector(`#${submenuId}-submenu`)) {
                    closeFloatingSubmenu();
                } else {
                    floatingSubmenu.innerHTML = submenu.outerHTML;
                    floatingSubmenu.classList.add('active');
                    if ( submenuId == 'works' ) {
                        sidebarLinkFavorites.classList.add( 'mt-works' );
                        floatingSubmenu.classList.remove( 'profile' );
                        floatingSubmenu.classList.add( 'works' );
                    }
                    if ( submenuId == 'profile' ) {
                        sidebarLinkFavorites.classList.remove( 'mt-works' );
                        floatingSubmenu.classList.remove( 'works' );
                        floatingSubmenu.classList.add( 'profile' );
                    }
                }
            } else {
                if (submenu.classList.contains('open')) {
                    submenu.classList.remove('open');
                    if (arrow) arrow.classList.remove('open');
                } else {
                    closeAllSubmenus();
                    submenu.classList.add('open');
                    if (arrow) arrow.classList.add('open');
                }
                closeFloatingSubmenu();
            }
        }
    });
});

document.addEventListener('click', function(e) {
    const isSidebar = e.target.closest('.sidebar');
    const isFloatingSubmenu = e.target.closest('.floating-submenu');
    const isSubmenuToggle = e.target.closest('.has-submenu > .nav-link');
    
    if (!isSidebar && !isFloatingSubmenu && !isSubmenuToggle) {
        closeFloatingSubmenu();
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
        if (!sidebar.classList.contains('closed')) {
            closeFloatingSubmenu();
        }
    }
    updateArrowsVisibility();
});

updateArrowsVisibility();
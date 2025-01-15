
// imports
import { favoritesComponent, helpComponent, messagesComponent, personalInformationComponent, referFriendComponent, scheduledComponent, searchComponent, settingsComponent, walletComponent, workInProgressComponent, worksHistoryComponent } from './components/index.js';
export const contentArea = document.querySelector( '.content-area' );


// sidebarLinks
import { sidebar, sidebarLinkFavorites, sidebarClose, submenuToggles, floatingSubmenu, closeAllSubmenus, closeFloatingSubmenu } from './sidebar.js';
const sidebarLinkSearch = document.querySelector( '#sidebarLinkSearch' );
const sidebarLinkWorks = document.querySelector( '#sidebarLinkWorks' );
const sidebarLinkProfile = document.querySelector( '#sidebarLinkProfile' );


// submenuLinks
let submenuWorkInProgress = document.querySelector( '#submenuWorkInProgress' );
let submenuScheduled = document.querySelector( '#submenuScheduled' );
let submenuPersonalInformation = document.querySelector( '#submenuPersonalInformation' );
let submenuWorksHistory = document.querySelector( '#submenuWorksHistory' );
let submenuSettings = document.querySelector( '#submenuSettings' );
let submenuMessages = document.querySelector( '#submenuMessages' );
let submenuReferFriend = document.querySelector( '#submenuReferFriend' );
let submenuWallet = document.querySelector( '#submenuWallet' );
let submenuHelp = document.querySelector( '#submenuHelp' );


// reloadWorksSubmenuLinks
const reloadWorksSubmenuLinks = () => {

    submenuWorkInProgress = document.querySelector( '#submenuWorkInProgress' );
    submenuScheduled = document.querySelector( '#submenuScheduled' );

};


// reloadProfileSubmenuLinks
const reloadProfileSubmenuLinks = () => {

    submenuPersonalInformation = document.querySelector( '#submenuPersonalInformation' );
    submenuWorksHistory = document.querySelector( '#submenuWorksHistory' );
    submenuSettings = document.querySelector( '#submenuSettings' );
    submenuMessages = document.querySelector( '#submenuMessages' );
    submenuReferFriend = document.querySelector( '#submenuReferFriend' );
    submenuWallet = document.querySelector( '#submenuWallet' );
    submenuHelp = document.querySelector( '#submenuHelp' );

};


// resetActiveFloat
const resetActiveFloat = ( option ) => {

    if ( option == 'works' ) {
        const workInProgress = [ ...document.querySelectorAll( '#submenuWorkInProgress' ) ].at( -1 );
        const scheduled = [ ...document.querySelectorAll( '#submenuScheduled' ) ].at( -1 );
        workInProgress.addEventListener( 'click', () => setupForWorkInProgress() );
        scheduled.addEventListener( 'click', () => setupForScheduled() );
    };

    if ( option == 'profile' ) {

        const personalInformation = [ ...document.querySelectorAll( '#submenuPersonalInformation' ) ].at( -1 );
        const worksHistory = [ ...document.querySelectorAll( '#submenuWorksHistory' ) ].at( -1 );
        const settings = [ ...document.querySelectorAll( '#submenuSettings' ) ].at( -1 );
        const messages = [ ...document.querySelectorAll( '#submenuMessages' ) ].at( -1 );
        const referFriend = [ ...document.querySelectorAll( '#submenuReferFriend' ) ].at( -1 );
        const wallet = [ ...document.querySelectorAll( '#submenuWallet' ) ].at( -1 );
        const help = [ ...document.querySelectorAll( '#submenuHelp' ) ].at( -1 );
        personalInformation.addEventListener( 'click', () => setupPersonalInformation() );
        worksHistory.addEventListener( 'click', () => setupWorksHistory() );
        settings.addEventListener( 'click', () => setupSettings() );
        messages.addEventListener( 'click', () => setupMessages() );
        referFriend.addEventListener( 'click', () => setupReferFriend() );
        wallet.addEventListener( 'click', () => setupWallet() );
        help.addEventListener( 'click', () => setupHelp() );
    }   

};


// listenSubmenuLinksChangeClose
submenuToggles.forEach( sidebarLink => {

    sidebarLink.addEventListener( 'click', () => {
        if ( sidebar.classList.contains( 'closed' ) || window.innerWidth <= 768 ) {
            if ( floatingSubmenu.classList.contains( 'works' ) || window.innerWidth <= 768 ) {
                resetActiveFloat( 'works' );
            };
            if ( floatingSubmenu.classList.contains( 'profile' ) || window.innerWidth <= 768 ) {
                resetActiveFloat( 'profile' );
            };
        }
    });

});
sidebarClose.addEventListener( 'click', () => {

    if ( !sidebar.classList.contains( 'closed' ) ) {
        reloadWorksSubmenuLinks();
        reloadProfileSubmenuLinks();
    };

});


// resetActiveLinks
const resetActiveLinks = () => {

    sidebarLinkSearch.classList.remove( 'active' );
    sidebarLinkFavorites.classList.remove( 'active' );
    sidebarLinkWorks.classList.remove( 'active' );
    sidebarLinkProfile.classList.remove( 'active' );

    submenuWorkInProgress.classList.remove( 'active' );
    submenuScheduled.classList.remove( 'active' );
    submenuPersonalInformation.classList.remove( 'active' );
    submenuWorksHistory.classList.remove( 'active' );
    submenuSettings.classList.remove( 'active' );
    submenuMessages.classList.remove( 'active' );
    submenuReferFriend.classList.remove( 'active' );
    submenuWallet.classList.remove( 'active' );
    submenuHelp.classList.remove( 'active' );

};


// resetWindowsVariables
const resetWindowsVariables = () => {

    window.cardContent = '';
    window.open = '';
    window.lastEngineer = '';
    window.existCardMenuContainer = false;
    window.lastWorkH = '';
    window.workHistContent = '';

};


// setupForSearch
const setupForSearch = () => {

    resetWindowsVariables();
    resetActiveLinks();
    searchComponent();
    sidebarLinkSearch.classList.add( 'active' );
    closeFloatingSubmenu();

};
setupForSearch();


// setupForFavorites
const setupForFavorites = () => {

    resetWindowsVariables();
    favoritesComponent();
    resetActiveLinks();
    sidebarLinkFavorites.classList.add( 'active' );
    closeFloatingSubmenu();

};


// setupForWorkInProgress
const setupForWorkInProgress = () => {

    resetWindowsVariables();
    workInProgressComponent();
    resetActiveLinks();
    submenuWorkInProgress.classList.add( 'active' );
    sidebarLinkWorks.classList.add( 'active' );
    closeFloatingSubmenu();

};


// setupForScheduled
const setupForScheduled = () => {

    resetWindowsVariables();
    scheduledComponent();
    resetActiveLinks();
    submenuScheduled.classList.add( 'active' );
    sidebarLinkWorks.classList.add( 'active' );
    closeFloatingSubmenu();

};


// setupPersonalInformation
const setupPersonalInformation = () => {

    resetWindowsVariables();
    personalInformationComponent();
    resetActiveLinks();
    submenuPersonalInformation.classList.add( 'active' );
    sidebarLinkProfile.classList.add( 'active' );
    closeFloatingSubmenu();

};


// setupWorksHistory
const setupWorksHistory = () => {

    resetWindowsVariables();
    worksHistoryComponent();
    resetActiveLinks();
    submenuWorksHistory.classList.add( 'active' );
    sidebarLinkProfile.classList.add( 'active' );
    closeFloatingSubmenu();

};


// setupSettings
const setupSettings = () => {

    resetWindowsVariables();
    settingsComponent();
    resetActiveLinks();
    submenuSettings.classList.add( 'active' );
    sidebarLinkProfile.classList.add( 'active' );
    closeFloatingSubmenu();

};


// setupMessages
const setupMessages = () => {

    resetWindowsVariables();
    messagesComponent();
    resetActiveLinks();
    submenuMessages.classList.add( 'active' );
    sidebarLinkProfile.classList.add( 'active' );
    closeFloatingSubmenu();

};


// setupReferFriend
const setupReferFriend = () => {

    resetWindowsVariables();
    referFriendComponent();
    resetActiveLinks();
    submenuReferFriend.classList.add( 'active' )
    sidebarLinkProfile.classList.add( 'active' );
    closeFloatingSubmenu();

};


// setupWallet
const setupWallet = () => {

    resetWindowsVariables();
    walletComponent();
    resetActiveLinks();
    submenuWallet.classList.add( 'active' );
    sidebarLinkProfile.classList.add( 'active' );
    closeFloatingSubmenu();

};


// setupHelp
const setupHelp = () => {

    resetWindowsVariables();
    helpComponent();
    resetActiveLinks();
    submenuHelp.classList.add( 'active' );
    sidebarLinkProfile.classList.add( 'active' );
    closeFloatingSubmenu();

};


// renderComponents
sidebarLinkSearch.addEventListener( 'click', () => setupForSearch() );
sidebarLinkFavorites.addEventListener( 'click', () => setupForFavorites() );
submenuWorkInProgress.addEventListener( 'click', () => setupForWorkInProgress() );
submenuScheduled.addEventListener( 'click', () => setupForScheduled() );
submenuPersonalInformation.addEventListener( 'click', () => setupPersonalInformation() );
submenuWorksHistory.addEventListener( 'click', () => setupWorksHistory() );
submenuSettings.addEventListener( 'click', () => setupSettings() );
submenuMessages.addEventListener( 'click', () => setupMessages() );
submenuReferFriend.addEventListener( 'click', () => setupReferFriend() );
submenuWallet.addEventListener( 'click', () => setupWallet() );
submenuHelp.addEventListener( 'click', () => setupHelp() );

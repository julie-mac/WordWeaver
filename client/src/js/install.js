const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); 
    window.deferredPrompt = event;
    butInstall.disabled = false;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', () => {
    butInstall.disabled = true;
    const {choice} = window.deferredPrompt.prompt();
    
    if (choice.outcome === "accepted") {
        console.log("PWA has been successfully installed!");

    } else {
        console.log("Installation failed");
    }
    window.deferredPrompt = null;
});
  

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("PWA Installed!")
    window.deferredPrompt = null;
    butInstall.disabled = true;
});

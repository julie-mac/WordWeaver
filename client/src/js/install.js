const butInstall = document.getElementById('buttonInstall');
let defPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); 
    defPrompt = event;
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', () => {
    if (defPrompt) {
        defPrompt.prompt()
            .then((result) => {
                if (result.outcome === 'accepted') {
                    console.log('PWA Installed!');
                } else {
                    console.log('Installation failed');
                }
                butInstall.style.display = 'none';
                defPrompt = null;
            })
            .catch((error) => {
                console.error(error);
            });
    }
});
  

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("PWA Installed!")
});

const butInstall = document.getElementById('buttonInstall');
let defPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.display = 'block';
    defPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    defPrompt.prompt();
    const result = await defPrompt.userChoice;

    if (result.outcome === "accepted") {
        console.log("PWA Installed!")
    } else {
        console.log("Installation failed")
    }
    butInstall.style.display = 'none';
    defPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("PWA Installed!")
});

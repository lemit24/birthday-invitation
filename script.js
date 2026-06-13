// Set constants for any elements involving in interactions 
const envelope = document.getElementById("envelope");

const envelopeContainer = document.getElementById("envelope-container");
const invitationContainer = document.getElementById("invitation-container");

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

const invitationModal = document.getElementById("invitation-modal");
const yesModal = document.getElementById("yes-modal");

// Click envelope
envelope.addEventListener("click", () => {

    // Start fading out envelope-container (adding fade-out class)
    envelopeContainer.classList.add("fade-out");

    // Set time for fade-in fade-out animation
    setTimeout(() => { 
        envelopeContainer.style.display = "none";
        invitationContainer.style.display = "flex";

        // Set time for browser render
        setTimeout(() => {
            invitationContainer.style.opacity = "1";
        }, 10);
    }, 500)
});

// No button runs
noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 800-400;
    const y = Math.random() * 500-250;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("touchstart", () => {
    const x = Math.random() * 400-200;
    const y = Math.random() * 200-100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});


// Yes modal
yesBtn.addEventListener("click", () => {
    invitationModal.style.opacity = "0";
    
    setTimeout(() => {
        invitationModal.hidden = true;
        yesModal.hidden = false;
        yesModal.style.opacity = "0";

        setTimeout (() => {
            yesModal.style.opacity="1";
        }, 10)
    }, 500)
    
})
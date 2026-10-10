const envelopeContainer = document.getElementById('envelope-container');
const letterContainer = document.getElementById('letter-container');
const letterWindow = document.querySelector('.letter-window');
const envelope = document.getElementById('envelope');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const letterTitle = document.getElementById('letter-title');
const letterCat = document.getElementById('letter-cat');
const letterButtons = document.getElementById('letter-buttons');
const finalText = document.getElementById('final-text');

let yesScale = 1;
const noMessages = [
    "No",
    "Are you sure?",
    "Pookie please...",
    "Think again!",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
    "PLEASE SAY YES"
];
let noClickCount = 0;

// Open envelope animation
envelope.addEventListener('click', () => {
    envelopeContainer.style.display = 'none';
    letterContainer.style.display = 'flex';
    
    // Trigger pop-up scale transition
    setTimeout(() => {
        letterWindow.classList.add('open');
    }, 50);
});

// "Yes" button click handler
yesBtn.addEventListener('click', () => {
    letterWindow.classList.add('final');
    letterTitle.innerHTML = "I'm happy to have you!";
    letterCat.src = "cat_dance.gif"; // or change to success cat if needed
    letterButtons.style.display = 'none';
    finalText.style.display = 'block';
});

// "No" button click handler (shrinks No, grows Yes)
noBtn.addEventListener('click', () => {
    noClickCount++;
    yesScale += 0.25;
    yesBtn.style.transform = `scale(${yesScale})`;

    if (noClickCount < noMessages.length) {
        // If your No button is an image, you can skip text changes or handle it here
    }
});
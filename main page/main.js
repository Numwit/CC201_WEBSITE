// Primitive Variables
// Notes: let AND const ARE used to declare variables (AVOID VAR)
//        const are variables that cannot be changed
//        let are variables that can be changed

const arrowButton = document.getElementById('arrow-button');
const arrowButton2 = document.getElementById('arrow-button2');
const vrHeadset = document.getElementById('vr-headset');
const backgroundText = document.getElementById('reality-text');
const informationText = document.getElementById('informationText');
const additionalText = document.getElementById('additional-text');

let currentIndex = 0;

// Array States variable that contains all the states of the first page.
const states = [ { 
    // FIRST PHASE OF THE FRONT PAGE [0]
    text: 'REALITY', 
    info: 'Immersive. Innovative. Transformative.', 
    image: 'images/vr-front.png' 
},  { 
    // SECOND PHASE OF THE FRONT PAGE [1]
    text: 'CREATE', 
    info: 'AR and VR redefine how we interact, learn, and create.', 
    image: 'images/vr-turned.png' 
},  { 
    // THIRD PHASE OF THE FRONT PAGE [2]
    text: 'VISION', 
    info: 'Visualize beyond limits, bridging imagination and technology.', 
    image: 'images/vr-turned-2.png'
},  { 
    // FOURTH PHASE OF THE FRONT PAGE [3]
    text: 'FUTURE', 
    info: 'Step into the future, where innovation meets reality.', 
    image: 'images/vr_pov.png'
},  { 
    // FIFTH PHASE OF THE FRONT PAGE [4]
    text: 'REALITY', 
    info: 'Are you ready?', 
    image: 'images/hold-vr.png' 
} ];

    // This function handles the click handler for vr headset to transition to page 2
const vrHeadsetClickHandler = () => {
    window.location.href = '../site.html';
};

// This function will constantly update the state of the page
function updateState() {

    // Declares a new variable to store the current state
    const currentState = states[currentIndex];

    // -- ANIMATION --
    // Changes the image of the VR headset, background text, and information text
    vrHeadset.style.opacity = 0;
    backgroundText.style.opacity = 0;
    informationText.style.opacity = 0;

    setTimeout(() => {
        // Changes the image of the VR headset
        vrHeadset.src = currentState.image;
        
        // Changes the opacity of the VR headset from hidden to visible
        vrHeadset.style.opacity = 1;

        // Sets the background text of the current state (text behind image)
        backgroundText.textContent = currentState.text;
        backgroundText.style.opacity = 1;
        
        // Sets the information text of the current state  (text below image)
        informationText.textContent = currentState.info;
        informationText.style.opacity = 1
    }, 400); // Given a delay of 0.4 seconds

    // If the first state is shown, then hide left button
    if (currentState.text === 'REALITY' && currentState.info === "Immersive. Innovative. Transformative.") {
        arrowButton2.style.display = 'none';
    } else {
        arrowButton2.style.display = 'block';   
    }

    // If the fourth state is shown, then show the extra text and hide right button
    if (currentState.text === 'REALITY' && currentState.info === 'Are you ready?') {
        additionalText.style.display = 'block';
        arrowButton.style.display = 'none';

        // Make VR Headset clickable
        vrHeadset.style.cursor = 'pointer';

        // enables the click event listener
        vrHeadset.addEventListener('click', vrHeadsetClickHandler);

    } else {
        additionalText.style.display = 'none';
        arrowButton.style.display = 'block';
        vrHeadset.style.cursor = 'auto';

        // disable the click event listener
        vrHeadset.removeEventListener('click', vrHeadsetClickHandler);
    }
}

// -- EVENT LISTENERS --
// Waits for the right arrow button to be clicked to change the state
arrowButton.addEventListener('click', () => {
    if (currentIndex < states.length - 1) 
        {
        currentIndex++;
        console.log(currentIndex);
        updateState();
    }
});

// Waits for the left arrow button to be clicked to change the state
arrowButton2.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        console.log(currentIndex);
        updateState();
    }
});


// Calls updateState function 
updateState();

// This is an event listener that waits for the page to be fully loaded 
document.addEventListener("DOMContentLoaded", function() {

    // Once the page is loaded, it'll call out a timer for 2 seconds to load in the right arrow button 
    setTimeout(function() {
        // This statement will return reference to the arrow button
        var arrowButton = document.querySelector('.arrow-button');
        arrowButton.style.opacity = 1;
        arrowButton.style.pointerEvents = 'auto'; // Enable pointer events to make it clickable
    }, 2000); // Delay of 2 seconds
});




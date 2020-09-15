const padKeys = [{
  keyCode: 81,
  keyTrigger: "Q",
  id: "80s-Bdrum1",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/8[kb]80s-Bdrum1.aif.mp3"
}, {
  keyCode: 87,
  keyTrigger: "W",
  id: "80s-COWBELL1",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/14[kb]80s-COWBELL1.aif.mp3"
}, {
  keyCode: 69,
  keyTrigger: "E",
  id: "80s-CRASH1",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/83[kb]80s-CRASH1.aif.mp3"
}, {
  keyCode: 65,
  keyTrigger: "A",
  id: "80s-CRASH2",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/94[kb]80s-CRASH2.aif.mp3"
}, {
  keyCode: 83,
  keyTrigger: "S",
  id: "80s-CRASH3",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/73[kb]80s-CRASH3.aif.mp3"
}, {
  keyCode: 68,
  keyTrigger: "D",
  id: "80s-HHCLOSE1",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/7[kb]80s-HHCLOSE1.aif.mp3"
}, {
  keyCode: 90,
  keyTrigger: "Z",
  id: "80s-HHCLOSE2",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/5[kb]80s-HHCLOSE2.aif.mp3"
}, {
  keyCode: 88,
  keyTrigger: "X",
  id: "80s-HHOPEN2",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/38[kb]80s-HHOPEN2.aif.mp3"
}, {
  keyCode: 67,
  keyTrigger: "C",
  id: "80s-HICONGA",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/9[kb]80s-HICONGA.aif.mp3"
}];

const numDrumPads = padKeys.length;
const addAudio = () => {
  let audioElem;
  const drumPads = $(".drum-pad");
  for (let i = 0; i < numDrumPads; i++) {
    audioElem = document.createElement("audio");
    audioElem.src = padKeys[i].url;
    audioElem.className = "clip";
    drumPads[i].append(audioElem);
    audioElem.id = drumPads[i].innerText;
  }
}

const createDrumPads = () => {
  for (let i = 0; i < numDrumPads; i++) {
    const drumPad = document.createElement("button");
    drumPad.className = "drum-pad";
    drumPad.id = padKeys[i].id;
    drumPad.innerText = `${padKeys[i].keyTrigger}`;
    $("#drum-machine").append(drumPad);
  }
  
  addAudio();
}

const updateDisplay = (clipName) => {
  $("#display").text(clipName);
}

createDrumPads();

$("#drum-machine").on("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.firstElementChild.play();
    updateDisplay(event.target.id);
  }
});

$("#drum-machine").on("keydown", () => {
  const drumPads = $(".drum-pad")
  for (let i = 0; i < numDrumPads; i++) {
    if (event.keyCode === padKeys[i].keyCode) {
      drumPads[i].firstElementChild.play();
      updateDisplay(drumPads[i].id);
    }
  }
});

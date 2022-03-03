// kai paspaudziam ant night mode
// pakeisciam card el fono spalva i juoda o spalva i balta

// 1. nusitaikom i button el ir card el
const cardEl = document.querySelector('.card');
const btnNightEl = document.querySelector('#night');
// 2. btnEl dedam eventlistener. kai paspaudziam ant btn
btnNightEl.addEventListener('click', makeNightModeOn);

function makeNightModeOn() {
  console.log('btn click detected');
  // 3. cardEl keiciam style savybes. fono spalva ir spalva
  cardEl.style.backgroundColor = 'black';
  cardEl.style.color = 'white';
}

// prisideti mygtuka Day mode ir pakeisti spalvas atgal i dienos

// isimti mygtukus. Pisideti checkbox su pavadinimu night mode.
// kai pazymim varnele buna night mode spalvos, kai varnele neuzzymeta day mode spalvos

// prisideti antra kortele ir padaryti kad ji veiktu nepriklausomai nuo pirmos

// extra
// prisideti mygtuka 'edit title' ji paspaudus atsiranda ivesties laukas.
// jame keiciant skaitine reiksme keiciasi card title dydis pixeliais

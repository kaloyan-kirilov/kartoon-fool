// Thumbnails
var thumbOne = document.getElementById('thumb-one');
var thumbTwo = document.getElementById('thumb-two');
var thumbThree = document.getElementById('thumb-three');
var thumbFour = document.getElementById('thumb-four');
var thumbFive = document.getElementById('thumb-five');
var thumbSix = document.getElementById('thumb-six');
var thumbSeven = document.getElementById('thumb-seven');
var thumbEight = document.getElementById('thumb-eight');


// Arrow Buttons
var arrowPrev = document.getElementById("arrow-prev");
var arrowNext = document.getElementById("arrow-next");


// Responsive Arrow Buttons
var resPrev = document.getElementById("res-arrow-prev");
var resNext = document.getElementById("res-arrow-next");

var pageNumber = document.getElementById("page-number");


// Page Buttons
var pageOne = document.getElementById('page-one');
pageOne.addEventListener("click", firstPage);

var pageTwo = document.getElementById('page-two');
pageTwo.addEventListener("click", secondPage);

var pageThree = document.getElementById('page-three');
pageThree.addEventListener("click", thirdPage);

var pageFour = document.getElementById('page-four');
pageFour.addEventListener("click", fourthPage);

var pageFive = document.getElementById('page-five');
pageFive.addEventListener("click", fifthPage);

var pageSix = document.getElementById('page-six');
pageSix.addEventListener("click", sixthPage);


// First Gallery Page
function firstPage() {
    thumbOne.style.backgroundImage = "url('../img/gallery/thumb/goat-thumb.jpg')";
    thumbTwo.style.backgroundImage = "url('../img/gallery/thumb/diamond-thumb.jpg')";
    thumbThree.style.backgroundImage = "url('../img/gallery/thumb/corona-thumb.jpg')";
    thumbFour.style.backgroundImage = "url('../img/gallery/thumb/grinch-thumb.jpg')";
    thumbFive.style.backgroundImage = "url('../img/gallery/thumb/rabbit-thumb.jpg')";
    thumbSix.style.backgroundImage = "url('../img/gallery/thumb/walk-thumb.jpg')";
    thumbSeven.style.backgroundImage = "url('../img/gallery/thumb/kaiju-thumb.jpg')";
    thumbEight.style.backgroundImage = "url('../img/gallery/thumb/silhouette-thumb.jpg')";

    thumbListeners();
    thumbOne.addEventListener("click", imgOneP1);
    thumbTwo.addEventListener("click", imgTwoP1);
    thumbThree.addEventListener("click", imgThreeP1);
    thumbFour.addEventListener("click", imgFourP1);
    thumbFive.addEventListener("click", imgFiveP1);
    thumbSix.addEventListener("click", imgSixP1);
    thumbSeven.addEventListener("click", imgSevenP1);
    thumbEight.addEventListener("click", imgEightP1);

    emptyThumb();

    currentPage();
    pageOne.classList.add("current-page");

    leftArrow();

    arrowListeners();
    arrowNext.addEventListener("click", secondPage);

    resNext.addEventListener("click", secondPage);
    pageNumber.innerHTML = "1";
}

firstPage();


// Second Gallery Page
function secondPage() {
    thumbOne.style.backgroundImage = "url('../img/gallery/thumb/rick-thumb.jpg')";
    thumbTwo.style.backgroundImage = "url('../img/gallery/thumb/kodi-thumb.jpg')";
    thumbThree.style.backgroundImage = "url('../img/gallery/thumb/snail-thumb.jpg')";
    thumbFour.style.backgroundImage = "url('../img/gallery/thumb/screwball-thumb.jpg')";
    thumbFive.style.backgroundImage = "url('../img/gallery/thumb/scientist-thumb.jpg')";
    thumbSix.style.backgroundImage = "url('../img/gallery/thumb/sheep-thumb.jpg')";
    thumbSeven.style.backgroundImage = "url('../img/gallery/thumb/rooster-thumb.jpg')";
    thumbEight.style.backgroundImage = "url('../img/gallery/thumb/kooky-thumb.jpg')";

    thumbListeners();
    thumbOne.addEventListener("click", imgOneP2);
    thumbTwo.addEventListener("click", imgTwoP2);
    thumbThree.addEventListener("click", imgThreeP2);
    thumbFour.addEventListener("click", imgFourP2);
    thumbFive.addEventListener("click", imgFiveP2);
    thumbSix.addEventListener("click", imgSixP2);
    thumbSeven.addEventListener("click", imgSevenP2);
    thumbEight.addEventListener("click", imgEightP2);

    emptyThumb();

    currentPage();
    pageTwo.classList.add("current-page");

    arrowButtons();

    arrowListeners();
    arrowPrev.addEventListener("click", firstPage);
    arrowNext.addEventListener("click", thirdPage);

    resPrev.addEventListener("click", firstPage);
    resNext.addEventListener("click", thirdPage);
    pageNumber.innerHTML = "2";
}


// Third Gallery Page
function thirdPage() {
    thumbOne.style.backgroundImage = "url('../img/gallery/thumb/toot-thumb.jpg')";
    thumbTwo.style.backgroundImage = "url('../img/gallery/thumb/hanna-thumb.jpg')";
    thumbThree.style.backgroundImage = "url('../img/gallery/thumb/ed-thumb.jpg')";
    thumbFour.style.backgroundImage = "url('../img/gallery/thumb/spidey-thumb.jpg')";
    thumbFive.style.backgroundImage = "url('../img/gallery/thumb/nutty-thumb.jpg')";
    thumbSix.style.backgroundImage = "url('../img/gallery/thumb/snowflake-thumb.jpg')";
    thumbSeven.style.backgroundImage = "url('../img/gallery/thumb/trick-thumb.jpg')";
    thumbEight.style.backgroundImage = "url('../img/gallery/thumb/sheriff-thumb.jpg')";

    thumbListeners();
    thumbOne.addEventListener("click", imgOneP3);
    thumbTwo.addEventListener("click", imgTwoP3);
    thumbThree.addEventListener("click", imgThreeP3);
    thumbFour.addEventListener("click", imgFourP3);
    thumbFive.addEventListener("click", imgFiveP3);
    thumbSix.addEventListener("click", imgSixP3);
    thumbSeven.addEventListener("click", imgSevenP3);
    thumbEight.addEventListener("click", imgEightP3);

    emptyThumb();

    currentPage();
    pageThree.classList.add("current-page");

    arrowButtons();

    arrowListeners();
    arrowPrev.addEventListener("click", secondPage);
    arrowNext.addEventListener("click", fourthPage);

    resPrev.addEventListener("click", secondPage);
    resNext.addEventListener("click", fourthPage);
    pageNumber.innerHTML = "3";
}


// Fourth Gallery Page
function fourthPage() {
    thumbOne.style.backgroundImage = "url('../img/gallery/thumb/wolf-thumb.jpg')";
    thumbTwo.style.backgroundImage = "url('../img/gallery/thumb/grylls-thumb.jpg')";
    thumbThree.style.backgroundImage = "url('../img/gallery/thumb/beaver-thumb.jpg')";
    thumbFour.style.backgroundImage = "url('../img/gallery/thumb/selfish-thumb.jpg')";
    thumbFive.style.backgroundImage = "url('../img/gallery/thumb/lazy-thumb.jpg')";
    thumbSix.style.backgroundImage = "url('../img/gallery/thumb/wacky-thumb.jpg')";
    thumbSeven.style.backgroundImage = "url('../img/gallery/thumb/fred-thumb.jpg')";
    thumbEight.style.backgroundImage = "url('../img/gallery/thumb/dila-thumb.jpg')";

    thumbListeners();
    thumbOne.addEventListener("click", imgOneP4);
    thumbTwo.addEventListener("click", imgTwoP4);
    thumbThree.addEventListener("click", imgThreeP4);
    thumbFour.addEventListener("click", imgFourP4);
    thumbFive.addEventListener("click", imgFiveP4);
    thumbSix.addEventListener("click", imgSixP4);
    thumbSeven.addEventListener("click", imgSevenP4);
    thumbEight.addEventListener("click", imgEightP4);

    emptyThumb();

    currentPage();
    pageFour.classList.add("current-page");

    arrowButtons();

    arrowListeners();
    arrowPrev.addEventListener("click", thirdPage);
    arrowNext.addEventListener("click", fifthPage);

    resPrev.addEventListener("click", thirdPage);
    resNext.addEventListener("click", fifthPage);
    pageNumber.innerHTML = "4";
}


// Fifth Gallery Page
function fifthPage() {
    thumbOne.style.backgroundImage = "url('../img/gallery/thumb/carrot-thumb.jpg')";
    thumbTwo.style.backgroundImage = "url('../img/gallery/thumb/forest-thumb.jpg')";
    thumbThree.style.backgroundImage = "url('../img/gallery/thumb/raccoon-thumb.jpg')";
    thumbFour.style.backgroundImage = "url('../img/gallery/thumb/lion-thumb.jpg')";
    thumbFive.style.backgroundImage = "url('../img/gallery/thumb/genius-thumb.jpg')";
    thumbSix.style.backgroundImage = "url('../img/gallery/thumb/fox-thumb.jpg')";
    thumbSeven.style.backgroundImage = "url('../img/gallery/thumb/frog-thumb.jpg')";
    thumbEight.style.backgroundImage = "url('../img/gallery/thumb/fishing-thumb.jpg')";

    thumbListeners();
    thumbOne.addEventListener("click", imgOneP5);
    thumbTwo.addEventListener("click", imgTwoP5);
    thumbThree.addEventListener("click", imgThreeP5);
    thumbFour.addEventListener("click", imgFourP5);
    thumbFive.addEventListener("click", imgFiveP5);
    thumbSix.addEventListener("click", imgSixP5);
    thumbSeven.addEventListener("click", imgSevenP5);
    thumbEight.addEventListener("click", imgEightP5);

    emptyThumb();

    currentPage();
    pageFive.classList.add("current-page");

    arrowButtons();

    arrowListeners();
    arrowPrev.addEventListener("click", fourthPage);
    arrowNext.addEventListener("click", sixthPage);

    resPrev.addEventListener("click", fourthPage);
    resNext.addEventListener("click", sixthPage);
    pageNumber.innerHTML = "5";
}


// Sixth Gallery Page
function sixthPage() {
    thumbOne.style.backgroundImage = "url('../img/gallery/thumb/walrus-thumb.jpg')";
    thumbTwo.style.backgroundImage = "url('../img/gallery/thumb/radioactive-thumb.jpg')";
    thumbThree.style.backgroundImage = "url('../img/gallery/thumb/duck-thumb.jpg')";
    thumbFour.style.backgroundImage = null;
    thumbFive.style.backgroundImage = null;
    thumbSix.style.backgroundImage = null;
    thumbSeven.style.backgroundImage = null;
    thumbEight.style.backgroundImage = null;

    thumbListeners();
    thumbOne.addEventListener("click", imgOneP6);
    thumbTwo.addEventListener("click", imgTwoP6);
    thumbThree.addEventListener("click", imgThreeP6);
    // thumbFour.addEventListener("click", imgFourP6);
    // thumbFive.addEventListener("click", imgFiveP6);
    // thumbSix.addEventListener("click", imgSixP6);
    // thumbSeven.addEventListener("click", imgSevenP6);
    // thumbEight.addEventListener("click", imgEightP6);

    emptyThumb();
    thumbFour.classList.add("empty-thumb");
    thumbFive.classList.add("empty-thumb");
    thumbSix.classList.add("empty-thumb");
    thumbSeven.classList.add("empty-thumb");
    thumbEight.classList.add("empty-thumb");

    currentPage();
    pageSix.classList.add("current-page");

    rightArrow();

    arrowListeners();
    arrowPrev.addEventListener("click", fifthPage);

    resPrev.addEventListener("click", fifthPage);
    pageNumber.innerHTML = "6";
}


// Modal Gallery Variables
var galleryModal = document.getElementById("gallery-modal");
var modalImage = document.getElementById("modal-img");
var modalTitle = document.getElementById("img-title");
var prevModalBtn = document.getElementById("modal-prev");
var nextModalBtn = document.getElementById("modal-next");

var headerTitle = document.getElementById("header-title");


// Modal Gallery Close Button
var modalCloseBtn = document.getElementById("modal-close");

function closeModal() {
    galleryModal.style.display = "none";
}

modalCloseBtn.addEventListener("click", closeModal);


// Modal Gallery - PAGE 1
function imgOneP1() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/goat-full.jpg')";
    modalTitle.innerHTML = "Mischievous Goat";
    headerTitle.innerHTML = "Mischievous Goat";

    hidePrevBtn();
    buttonListeners();

    nextModalBtn.addEventListener("click", imgTwoP1);
}

function imgTwoP1() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/diamond-full.jpg')";
    modalTitle.innerHTML = "Diamond Girl";
    headerTitle.innerHTML = "Diamond Girl";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgOneP1);
    nextModalBtn.addEventListener("click", imgThreeP1);
}

function imgThreeP1() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/corona-full.jpg')";
    modalTitle.innerHTML = "Corona Bat";
    headerTitle.innerHTML = "Corona Bat";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgTwoP1);
    nextModalBtn.addEventListener("click", imgFourP1);
}

function imgFourP1() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/grinch-full.jpg')";
    modalTitle.innerHTML = "The Grinch";
    headerTitle.innerHTML = "The Grinch";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgThreeP1);
    nextModalBtn.addEventListener("click", imgFiveP1);
}

function imgFiveP1() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/rabbit-full.jpg')";
    modalTitle.innerHTML = "Corn Rabbit";
    headerTitle.innerHTML = "Corn Rabbit";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgFourP1);
    nextModalBtn.addEventListener("click", imgSixP1);
}

function imgSixP1() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/walk-full.jpg')";
    modalTitle.innerHTML = "Walk Cycle";
    headerTitle.innerHTML = "Walk Cycle";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgFiveP1);
    nextModalBtn.addEventListener("click", imgSevenP1);
}

function imgSevenP1() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/kaiju-full.jpg')";
    modalTitle.innerHTML = "Kaiju";
    headerTitle.innerHTML = "Kaiju";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgSixP1);
    nextModalBtn.addEventListener("click", imgEightP1);
}

function imgEightP1() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/silhouette-full.jpg')";
    modalTitle.innerHTML = "Silhouette";
    headerTitle.innerHTML = "Silhouette";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgSevenP1);
    nextModalBtn.addEventListener("click", modalNextPage2);
}


// Page Transition 1-2
function modalNextPage2() {
    secondPage();
    imgOneP2();
}

function modalPrevPage1() {
    firstPage();
    imgEightP1();
}


// Modal Gallery - PAGE 2
function imgOneP2() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/rick-full.jpg')";
    modalTitle.innerHTML = "Rick & Morty";
    headerTitle.innerHTML = "Rick & Morty";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", modalPrevPage1);
    nextModalBtn.addEventListener("click", imgTwoP2);
}

function imgTwoP2() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/kodi-full.jpg')";
    modalTitle.innerHTML = "Otterly Awesome";
    headerTitle.innerHTML = "Otterly Awesome";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgOneP2);
    nextModalBtn.addEventListener("click", imgThreeP2);
}

function imgThreeP2() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/snail-full.jpg')";
    modalTitle.innerHTML = "Snail Mail";
    headerTitle.innerHTML = "Snail Mail";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgTwoP2);
    nextModalBtn.addEventListener("click", imgFourP2);
}

function imgFourP2() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/screwball-full.jpg')";
    modalTitle.innerHTML = "Screwball";
    headerTitle.innerHTML = "Screwball";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgThreeP2);
    nextModalBtn.addEventListener("click", imgFiveP2);
}

function imgFiveP2() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/scientist-full.jpg')";
    modalTitle.innerHTML = "Mad Scientist";
    headerTitle.innerHTML = "Mad Scientist";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgFourP2);
    nextModalBtn.addEventListener("click", imgSixP2);
}

function imgSixP2() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/sheep-full.jpg')";
    modalTitle.innerHTML = "Sheep Happens";
    headerTitle.innerHTML = "Sheep Happens";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgFiveP2);
    nextModalBtn.addEventListener("click", imgSevenP2);
}

function imgSevenP2() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/rooster-full.jpg')";
    modalTitle.innerHTML = "Rooster Pop";
    headerTitle.innerHTML = "Rooster Pop";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgSixP2);
    nextModalBtn.addEventListener("click", imgEightP2);
}

function imgEightP2() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/kooky-full.jpg')";
    modalTitle.innerHTML = "Kooky Bird";
    headerTitle.innerHTML = "Kooky Bird";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgSevenP2);
    nextModalBtn.addEventListener("click", modalNextPage3);
}


// Page Transition 2-3
function modalNextPage3() {
    thirdPage();
    imgOneP3();
}

function modalPrevPage2() {
    secondPage();
    imgEightP2();
}


// Modal Gallery - PAGE 3
function imgOneP3() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/toot-full.jpg')";
    modalTitle.innerHTML = "TooT-Too";
    headerTitle.innerHTML = "TooT-Too";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", modalPrevPage2);
    nextModalBtn.addEventListener("click", imgTwoP3);
}

function imgTwoP3() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/hanna-full.jpg')";
    modalTitle.innerHTML = "Hanna-Barbera";
    headerTitle.innerHTML = "Hanna-Barbera";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgOneP3);
    nextModalBtn.addEventListener("click", imgThreeP3);
}

function imgThreeP3() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/ed-full.jpg')";
    modalTitle.innerHTML = "Ed";
    headerTitle.innerHTML = "Ed";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgTwoP3);
    nextModalBtn.addEventListener("click", imgFourP3);
}

function imgFourP3() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/spidey-full.jpg')";
    modalTitle.innerHTML = "Spidey";
    headerTitle.innerHTML = "Spidey";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgThreeP3);
    nextModalBtn.addEventListener("click", imgFiveP3);
}

function imgFiveP3() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/nutty-full.jpg')";
    modalTitle.innerHTML = "Nutty Squirrel";
    headerTitle.innerHTML = "Nutty Squirrel";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgFourP3);
    nextModalBtn.addEventListener("click", imgSixP3);
}

function imgSixP3() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/snowflake-full.jpg')";
    modalTitle.innerHTML = "Snowflake";
    headerTitle.innerHTML = "Snowflake";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgFiveP3);
    nextModalBtn.addEventListener("click", imgSevenP3);
}

function imgSevenP3() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/trick-full.jpg')";
    modalTitle.innerHTML = "Trick or Treat";
    headerTitle.innerHTML = "Trick or Treat";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgSixP3);
    nextModalBtn.addEventListener("click", imgEightP3);
}

function imgEightP3() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/sheriff-full.jpg')";
    modalTitle.innerHTML = "Stick Em' Up!";
    headerTitle.innerHTML = "Stick Em' Up!";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgSevenP3);
    nextModalBtn.addEventListener("click", modalNextPage4);
}


// Page Transition 3-4
function modalNextPage4() {
    fourthPage();
    imgOneP4();
}

function modalPrevPage3() {
    thirdPage();
    imgEightP3();
}


// Modal Gallery - PAGE 4
function imgOneP4() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/wolf-full.jpg')";
    modalTitle.innerHTML = "Big Bad Wolf";
    headerTitle.innerHTML = "Big Bad Wolf";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", modalPrevPage3);
    nextModalBtn.addEventListener("click", imgTwoP4);
}

function imgTwoP4() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/grylls-full.jpg')";
    modalTitle.innerHTML = "Bear Grills";
    headerTitle.innerHTML = "Bear Grills";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgOneP4);
    nextModalBtn.addEventListener("click", imgThreeP4);
}

function imgThreeP4() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/beaver-full.jpg')";
    modalTitle.innerHTML = "Beaver";
    headerTitle.innerHTML = "Beaver";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgTwoP4);
    nextModalBtn.addEventListener("click", imgFourP4);
}

function imgFourP4() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/selfish-full.jpg')";
    modalTitle.innerHTML = "Sel-fish Cat";
    headerTitle.innerHTML = "Sel-fish Cat";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgThreeP4);
    nextModalBtn.addEventListener("click", imgFiveP4);
}

function imgFiveP4() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/lazy-full.jpg')";
    modalTitle.innerHTML = "Lazy Ass";
    headerTitle.innerHTML = "Lazy Ass";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgFourP4);
    nextModalBtn.addEventListener("click", imgSixP4);
}

function imgSixP4() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/wacky-full.jpg')";
    modalTitle.innerHTML = "Wacky Dog";
    headerTitle.innerHTML = "Wacky Dog";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgFiveP4);
    nextModalBtn.addEventListener("click", imgSevenP4);
}

function imgSevenP4() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/fred-full.jpg')";
    modalTitle.innerHTML = "Fred Flintstone";
    headerTitle.innerHTML = "Fred Flintstone";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgSixP4);
    nextModalBtn.addEventListener("click", imgEightP4);
}

function imgEightP4() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/dila-full.jpg')";
    modalTitle.innerHTML = "Hungry Croc";
    headerTitle.innerHTML = "Hungry Croc";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgSevenP4);
    nextModalBtn.addEventListener("click", modalNextPage5);
}


// Page Transition 4-5
function modalNextPage5() {
    fifthPage();
    imgOneP5();
}

function modalPrevPage4() {
    fourthPage();
    imgEightP4();
}


// Modal Gallery - PAGE 5
function imgOneP5() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/carrot-full.jpg')";
    modalTitle.innerHTML = "Bunny Carrot";
    headerTitle.innerHTML = "Bunny Carrot";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", modalPrevPage4);
    nextModalBtn.addEventListener("click", imgTwoP5);
}

function imgTwoP5() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/forest-full.jpg')";
    modalTitle.innerHTML = "Forest BG";
    headerTitle.innerHTML = "Forest BG"

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgOneP5);
    nextModalBtn.addEventListener("click", imgThreeP5);
}

function imgThreeP5() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/raccoon-full.jpg')";
    modalTitle.innerHTML = "Raccoon Toons";
    headerTitle.innerHTML = "Raccoon Toons";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgTwoP5);
    nextModalBtn.addEventListener("click", imgFourP5);
}

function imgFourP5() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/lion-full.jpg')";
    modalTitle.innerHTML = "Bulgarian Lion";
    headerTitle.innerHTML = "Bulgarian Lion";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgThreeP5);
    nextModalBtn.addEventListener("click", imgFiveP5);
}

function imgFiveP5() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/genius-full.jpg')";
    modalTitle.innerHTML = "Ze Great Genius";
    headerTitle.innerHTML = "Ze Great Genius";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgFourP5);
    nextModalBtn.addEventListener("click", imgSixP5);
}

function imgSixP5() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/fox-full.jpg')";
    modalTitle.innerHTML = "The Fox";
    headerTitle.innerHTML = "The Fox";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgFiveP5);
    nextModalBtn.addEventListener("click", imgSevenP5);
}

function imgSevenP5() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/frog-full.jpg')";
    modalTitle.innerHTML = "Bodybuilder Frog";
    headerTitle.innerHTML = "Bodybuilder Frog";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgSixP5);
    nextModalBtn.addEventListener("click", imgEightP5);
}

function imgEightP5() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/fishing-full.jpg')";
    modalTitle.innerHTML = "Fishing";
    headerTitle.innerHTML = "Fishing";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgSevenP5);
    nextModalBtn.addEventListener("click", modalNextPage6);
}


// Page Transition 5-6
function modalNextPage6() {
    sixthPage();
    imgOneP6();
}

function modalPrevPage5() {
    fifthPage();
    imgEightP5();
}


// Modal Gallery - PAGE 6
function imgOneP6() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/walrus-full.jpg')";
    modalTitle.innerHTML = "Sailor Walrus";
    headerTitle.innerHTML = "Sailor Walrus";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", modalPrevPage5);
    nextModalBtn.addEventListener("click", imgTwoP6);
}

function imgTwoP6() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/radioactive-full.jpg')";
    modalTitle.innerHTML = "Radioactive Cat";
    headerTitle.innerHTML = "Radioactive Cat";

    showButtons();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgOneP6);
    nextModalBtn.addEventListener("click", imgThreeP6);
}

function imgThreeP6() {
    galleryModal.style.display = "flex";
    modalImage.style.backgroundImage = "url('../img/gallery/full/duck-full.jpg')";
    modalTitle.innerHTML = "Evil Duck";
    headerTitle.innerHTML = "Evil Duck";

    hideNextBtn();
    buttonListeners();

    prevModalBtn.addEventListener("click", imgTwoP6);
}

function imgFourP6() {
    galleryModal.style.display = "none";
    modalImage.style.backgroundImage = null;
    modalTitle.innerHTML = " ";
}

function imgFiveP6() {
    galleryModal.style.display = "none";
    modalImage.style.backgroundImage = null;
    modalTitle.innerHTML = " ";
}

function imgSixP6() {
    galleryModal.style.display = "none";
    modalImage.style.backgroundImage = null;
    modalTitle.innerHTML = " ";
}

function imgSevenP6() {
    galleryModal.style.display = "none";
    modalImage.style.backgroundImage = null;
    modalTitle.innerHTML = " ";
}

function imgEightP6() {
    galleryModal.style.display = "none";
    modalImage.style.backgroundImage = null;
    modalTitle.innerHTML = " ";
}


// Utility Functions
function leftArrow() {
    arrowPrev.style.opacity = '0';
    arrowPrev.style.pointerEvents = 'none';
    arrowNext.style.opacity = '1';
    arrowNext.style.pointerEvents = 'auto';

    resPrev.style.opacity = "0.5";
    resPrev.style.pointerEvents = "none";
    resNext.style.opacity = "1";
    resNext.style.pointerEvents = "auto";
}

function arrowButtons() {
    arrowPrev.style.opacity = '1';
    arrowPrev.style.pointerEvents = 'auto';
    arrowNext.style.opacity = '1';
    arrowNext.style.pointerEvents = 'auto';

    resPrev.style.opacity = "1";
    resPrev.style.pointerEvents = "auto";
    resNext.style.opacity = "1";
    resNext.style.pointerEvents = "auto";
}

function rightArrow() {
    arrowPrev.style.opacity = '1';
    arrowPrev.style.pointerEvents = 'auto';
    arrowNext.style.opacity = '0';
    arrowNext.style.pointerEvents = 'none';

    resPrev.style.opacity = "1";
    resPrev.style.pointerEvents = "auto";
    resNext.style.opacity = "0.5";
    resNext.style.pointerEvents = "none";
}

function currentPage() {
    pageOne.classList.remove("current-page");
    pageTwo.classList.remove("current-page");
    pageThree.classList.remove("current-page");
    pageFour.classList.remove("current-page");
    pageFive.classList.remove("current-page");
    pageSix.classList.remove("current-page");
}

function hidePrevBtn() {
    prevModalBtn.style.opacity = "0";
    prevModalBtn.style.pointerEvents = "none";
    nextModalBtn.style.opacity = "1";
    nextModalBtn.style.pointerEvents = "auto";
}

function showButtons() {
    prevModalBtn.style.opacity = "1";
    prevModalBtn.style.pointerEvents = "auto";
    nextModalBtn.style.opacity = "1";
    nextModalBtn.style.pointerEvents = "auto";
}

function hideNextBtn() {
    prevModalBtn.style.opacity = "1";
    prevModalBtn.style.pointerEvents = "auto";
    nextModalBtn.style.opacity = "0";
    nextModalBtn.style.pointerEvents = "none";
}

function emptyThumb() {
    thumbOne.classList.remove("empty-thumb");
    thumbTwo.classList.remove("empty-thumb");
    thumbThree.classList.remove("empty-thumb");
    thumbFour.classList.remove("empty-thumb");
    thumbFive.classList.remove("empty-thumb");
    thumbSix.classList.remove("empty-thumb");
    thumbSeven.classList.remove("empty-thumb");
    thumbEight.classList.remove("empty-thumb");
}

function thumbListeners() {
    thumbOne.removeEventListener("click", imgOneP1);
    thumbOne.removeEventListener("click", imgOneP2);
    thumbOne.removeEventListener("click", imgOneP3);
    thumbOne.removeEventListener("click", imgOneP4);
    thumbOne.removeEventListener("click", imgOneP5);
    thumbOne.removeEventListener("click", imgOneP6);

    thumbTwo.removeEventListener("click", imgTwoP1);
    thumbTwo.removeEventListener("click", imgTwoP2);
    thumbTwo.removeEventListener("click", imgTwoP3);
    thumbTwo.removeEventListener("click", imgTwoP4);
    thumbTwo.removeEventListener("click", imgTwoP5);
    thumbTwo.removeEventListener("click", imgTwoP6);

    thumbThree.removeEventListener("click", imgThreeP1);
    thumbThree.removeEventListener("click", imgThreeP2);
    thumbThree.removeEventListener("click", imgThreeP3);
    thumbThree.removeEventListener("click", imgThreeP4);
    thumbThree.removeEventListener("click", imgThreeP5);
    thumbThree.removeEventListener("click", imgThreeP6);

    thumbFour.removeEventListener("click", imgFourP1);
    thumbFour.removeEventListener("click", imgFourP2);
    thumbFour.removeEventListener("click", imgFourP3);
    thumbFour.removeEventListener("click", imgFourP4);
    thumbFour.removeEventListener("click", imgFourP5);
    thumbFour.removeEventListener("click", imgFourP6);

    thumbFive.removeEventListener("click", imgFiveP1);
    thumbFive.removeEventListener("click", imgFiveP2);
    thumbFive.removeEventListener("click", imgFiveP3);
    thumbFive.removeEventListener("click", imgFiveP4);
    thumbFive.removeEventListener("click", imgFiveP5);
    thumbFive.removeEventListener("click", imgFiveP6);

    thumbSix.removeEventListener("click", imgSixP1);
    thumbSix.removeEventListener("click", imgSixP2);
    thumbSix.removeEventListener("click", imgSixP3);
    thumbSix.removeEventListener("click", imgSixP4);
    thumbSix.removeEventListener("click", imgSixP5);
    thumbSix.removeEventListener("click", imgSixP6);

    thumbSeven.removeEventListener("click", imgSevenP1);
    thumbSeven.removeEventListener("click", imgSevenP2);
    thumbSeven.removeEventListener("click", imgSevenP3);
    thumbSeven.removeEventListener("click", imgSevenP4);
    thumbSeven.removeEventListener("click", imgSevenP5);
    thumbSeven.removeEventListener("click", imgSevenP6);

    thumbEight.removeEventListener("click", imgEightP1);
    thumbEight.removeEventListener("click", imgEightP2);
    thumbEight.removeEventListener("click", imgEightP3);
    thumbEight.removeEventListener("click", imgEightP4);
    thumbEight.removeEventListener("click", imgEightP5);
    thumbEight.removeEventListener("click", imgEightP6);
}

function arrowListeners() {
    arrowPrev.removeEventListener("click", firstPage);
    arrowPrev.removeEventListener("click", secondPage);
    arrowPrev.removeEventListener("click", thirdPage);
    arrowPrev.removeEventListener("click", fourthPage);
    arrowPrev.removeEventListener("click", fifthPage);

    arrowNext.removeEventListener("click", firstPage);
    arrowNext.removeEventListener("click", secondPage);
    arrowNext.removeEventListener("click", thirdPage);
    arrowNext.removeEventListener("click", fourthPage);
    arrowNext.removeEventListener("click", fifthPage);
    arrowNext.removeEventListener("click", sixthPage);


    resPrev.removeEventListener("click", firstPage);
    resPrev.removeEventListener("click", secondPage);
    resPrev.removeEventListener("click", thirdPage);
    resPrev.removeEventListener("click", fourthPage);
    resPrev.removeEventListener("click", fifthPage);

    resNext.removeEventListener("click", secondPage);
    resNext.removeEventListener("click", thirdPage);
    resNext.removeEventListener("click", fourthPage);
    resNext.removeEventListener("click", fifthPage);
    resNext.removeEventListener("click", sixthPage);
}

function buttonListeners() {
    prevModalBtn.removeEventListener("click", imgOneP1);
    prevModalBtn.removeEventListener("click", imgTwoP1);
    prevModalBtn.removeEventListener("click", imgThreeP1);
    prevModalBtn.removeEventListener("click", imgFourP1);
    prevModalBtn.removeEventListener("click", imgFiveP1);
    prevModalBtn.removeEventListener("click", imgSixP1);
    prevModalBtn.removeEventListener("click", imgSevenP1);
    prevModalBtn.removeEventListener("click", imgEightP1);

    prevModalBtn.removeEventListener("click", imgOneP2);
    prevModalBtn.removeEventListener("click", imgTwoP2);
    prevModalBtn.removeEventListener("click", imgThreeP2);
    prevModalBtn.removeEventListener("click", imgFourP2);
    prevModalBtn.removeEventListener("click", imgFiveP2);
    prevModalBtn.removeEventListener("click", imgSixP2);
    prevModalBtn.removeEventListener("click", imgSevenP2);
    prevModalBtn.removeEventListener("click", imgEightP2);

    prevModalBtn.removeEventListener("click", imgOneP3);
    prevModalBtn.removeEventListener("click", imgTwoP3);
    prevModalBtn.removeEventListener("click", imgThreeP3);
    prevModalBtn.removeEventListener("click", imgFourP3);
    prevModalBtn.removeEventListener("click", imgFiveP3);
    prevModalBtn.removeEventListener("click", imgSixP3);
    prevModalBtn.removeEventListener("click", imgSevenP3);
    prevModalBtn.removeEventListener("click", imgEightP3);

    prevModalBtn.removeEventListener("click", imgOneP4);
    prevModalBtn.removeEventListener("click", imgTwoP4);
    prevModalBtn.removeEventListener("click", imgThreeP4);
    prevModalBtn.removeEventListener("click", imgFourP4);
    prevModalBtn.removeEventListener("click", imgFiveP4);
    prevModalBtn.removeEventListener("click", imgSixP4);
    prevModalBtn.removeEventListener("click", imgSevenP4);
    prevModalBtn.removeEventListener("click", imgEightP4);

    prevModalBtn.removeEventListener("click", imgOneP5);
    prevModalBtn.removeEventListener("click", imgTwoP5);
    prevModalBtn.removeEventListener("click", imgThreeP5);
    prevModalBtn.removeEventListener("click", imgFourP5);
    prevModalBtn.removeEventListener("click", imgFiveP5);
    prevModalBtn.removeEventListener("click", imgSixP5);
    prevModalBtn.removeEventListener("click", imgSevenP5);
    prevModalBtn.removeEventListener("click", imgEightP5);

    prevModalBtn.removeEventListener("click", imgOneP6);
    prevModalBtn.removeEventListener("click", imgTwoP6);
    prevModalBtn.removeEventListener("click", imgThreeP6);
    prevModalBtn.removeEventListener("click", imgFourP6);
    prevModalBtn.removeEventListener("click", imgFiveP6);
    prevModalBtn.removeEventListener("click", imgSixP6);
    prevModalBtn.removeEventListener("click", imgSevenP6);
    prevModalBtn.removeEventListener("click", imgEightP6);

    nextModalBtn.removeEventListener("click", imgOneP1);
    nextModalBtn.removeEventListener("click", imgTwoP1);
    nextModalBtn.removeEventListener("click", imgThreeP1);
    nextModalBtn.removeEventListener("click", imgFourP1);
    nextModalBtn.removeEventListener("click", imgFiveP1);
    nextModalBtn.removeEventListener("click", imgSixP1);
    nextModalBtn.removeEventListener("click", imgSevenP1);
    nextModalBtn.removeEventListener("click", imgEightP1);

    nextModalBtn.removeEventListener("click", imgOneP2);
    nextModalBtn.removeEventListener("click", imgTwoP2);
    nextModalBtn.removeEventListener("click", imgThreeP2);
    nextModalBtn.removeEventListener("click", imgFourP2);
    nextModalBtn.removeEventListener("click", imgFiveP2);
    nextModalBtn.removeEventListener("click", imgSixP2);
    nextModalBtn.removeEventListener("click", imgSevenP2);
    nextModalBtn.removeEventListener("click", imgEightP2);

    nextModalBtn.removeEventListener("click", imgOneP3);
    nextModalBtn.removeEventListener("click", imgTwoP3);
    nextModalBtn.removeEventListener("click", imgThreeP3);
    nextModalBtn.removeEventListener("click", imgFourP3);
    nextModalBtn.removeEventListener("click", imgFiveP3);
    nextModalBtn.removeEventListener("click", imgSixP3);
    nextModalBtn.removeEventListener("click", imgSevenP3);
    nextModalBtn.removeEventListener("click", imgEightP3);

    nextModalBtn.removeEventListener("click", imgOneP4);
    nextModalBtn.removeEventListener("click", imgTwoP4);
    nextModalBtn.removeEventListener("click", imgThreeP4);
    nextModalBtn.removeEventListener("click", imgFourP4);
    nextModalBtn.removeEventListener("click", imgFiveP4);
    nextModalBtn.removeEventListener("click", imgSixP4);
    nextModalBtn.removeEventListener("click", imgSevenP4);
    nextModalBtn.removeEventListener("click", imgEightP4);

    nextModalBtn.removeEventListener("click", imgOneP5);
    nextModalBtn.removeEventListener("click", imgTwoP5);
    nextModalBtn.removeEventListener("click", imgThreeP5);
    nextModalBtn.removeEventListener("click", imgFourP5);
    nextModalBtn.removeEventListener("click", imgFiveP5);
    nextModalBtn.removeEventListener("click", imgSixP5);
    nextModalBtn.removeEventListener("click", imgSevenP5);
    nextModalBtn.removeEventListener("click", imgEightP5);

    nextModalBtn.removeEventListener("click", imgOneP6);
    nextModalBtn.removeEventListener("click", imgTwoP6);
    nextModalBtn.removeEventListener("click", imgThreeP6);
    nextModalBtn.removeEventListener("click", imgFourP6);
    nextModalBtn.removeEventListener("click", imgFiveP6);
    nextModalBtn.removeEventListener("click", imgSixP6);
    nextModalBtn.removeEventListener("click", imgSevenP6);
    nextModalBtn.removeEventListener("click", imgEightP6);

    nextModalBtn.removeEventListener("click", modalNextPage2);
    prevModalBtn.removeEventListener("click", modalPrevPage1);
    nextModalBtn.removeEventListener("click", modalNextPage3);
    prevModalBtn.removeEventListener("click", modalPrevPage2);
    nextModalBtn.removeEventListener("click", modalNextPage4);
    prevModalBtn.removeEventListener("click", modalPrevPage3);
    nextModalBtn.removeEventListener("click", modalNextPage5);
    prevModalBtn.removeEventListener("click", modalPrevPage4);
    nextModalBtn.removeEventListener("click", modalNextPage6);
    prevModalBtn.removeEventListener("click", modalPrevPage5);
}
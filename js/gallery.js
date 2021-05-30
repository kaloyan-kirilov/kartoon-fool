// Thumbnails
const thumbnail_1 = document.getElementById('thumb-1');
const thumbnail_2 = document.getElementById('thumb-2');
const thumbnail_3 = document.getElementById('thumb-3');
const thumbnail_4 = document.getElementById('thumb-4');
const thumbnail_5 = document.getElementById('thumb-5');
const thumbnail_6 = document.getElementById('thumb-6');
const thumbnail_7 = document.getElementById('thumb-7');
const thumbnail_8 = document.getElementById('thumb-8');

// Page Numbers
const pageNumber_1 = document.getElementById('page-1');
const pageNumber_2 = document.getElementById('page-2');
const pageNumber_3 = document.getElementById('page-3');
const pageNumber_4 = document.getElementById('page-4');
const pageNumber_5 = document.getElementById('page-5');
const pageNumber_6 = document.getElementById('page-6');
const pageNumber = document.getElementById('page-number');

// Page Listeners
pageNumber_1.addEventListener('click', page_1);
pageNumber_2.addEventListener('click', page_2);
pageNumber_3.addEventListener('click', page_3);
pageNumber_4.addEventListener('click', page_4);
pageNumber_5.addEventListener('click', page_5);
pageNumber_6.addEventListener('click', page_6);

// Buttons
const prevButton = document.querySelectorAll('.prev-button');
const nextButton = document.querySelectorAll('.next-button');

// Modal Variables
const modal = document.getElementById('gallery-modal');
const image = document.getElementById('modal-image');
const title = document.getElementById('image-title');
const title_res = document.getElementById('image-title-res');
const prevModal = document.getElementById('prev-modal');
const nextModal= document.getElementById('next-modal');
const closeButton = document.getElementById('close-modal');

// Artwork Source Object
const gallery = {
    image_00: {
        full: '00_empty.jpg'
    },
    image_01: {
        title: 'Evil Duck',
        thumb: '01_duck-thumb.jpg',
        full: '01_duck-full.jpg'
    },
    image_02: {
        title: 'Radioactive Cat',
        thumb: '02_radioactive-thumb.jpg',
        full: '02_radioactive-full.jpg'
    },
    image_03: {
        title: 'Sailor Walrus',
        thumb: '03_walrus-thumb.jpg',
        full: '03_walrus-full.jpg'
    },
    image_04: {
        title: 'Fishing',
        thumb: '04_fishing-thumb.jpg',
        full: '04_fishing-full.jpg'
    },
    image_05: {
        title: 'Bodybuilder Frog',
        thumb: '05_frog-thumb.jpg',
        full: '05_frog-full.jpg'
    },
    image_06: {
        title: 'The Fox',
        thumb: '06_fox-thumb.jpg',
        full: '06_fox-full.jpg'
    },
    image_07: {
        title: 'Ze Great Genius',
        thumb: '07_genius-thumb.jpg',
        full: '07_genius-full.jpg'
    },
    image_08: {
        title: 'Bulgarian Lion',
        thumb: '08_lion-thumb.jpg',
        full: '08_lion-full.jpg'
    },
    image_09: {
        title: 'Raccoon Toons',
        thumb: '09_raccoon-thumb.jpg',
        full: '09_raccoon-full.jpg'
    },
    image_10: {
        title: 'Forest BG',
        thumb: '10_forest-thumb.jpg',
        full: '10_forest-full.jpg'
    },
    image_11: {
        title: 'Bunny Carrot',
        thumb: '11_carrot-thumb.jpg',
        full: '11_carrot-full.jpg'
    },
    image_12: {
        title: 'Hungry Croc',
        thumb: '12_dila-thumb.jpg',
        full: '12_dila-full.jpg'
    },
    image_13: {
        title: 'Fred Flintstone',
        thumb: '13_fred-thumb.jpg',
        full: '13_fred-full.jpg'
    },
    image_14: {
        title: 'Wacky Dog',
        thumb: '14_wacky-thumb.jpg',
        full: '14_wacky-full.jpg'
    },
    image_15: {
        title: 'Lazy Ass',
        thumb: '15_lazy-thumb.jpg',
        full: '15_lazy-full.jpg'
    },
    image_16: {
        title: 'Sel-Fish Cat',
        thumb: '16_selfish-thumb.jpg',
        full: '16_selfish-full.jpg'
    },
    image_17: {
        title: 'Beaver',
        thumb: '17_beaver-thumb.jpg',
        full: '17_beaver-full.jpg'
    },
    image_18: {
        title: 'Bear Grills',
        thumb: '18_grylls-thumb.jpg',
        full: '18_grylls-full.jpg'
    },
    image_19: {
        title: 'Big Bad Wolf',
        thumb: '19_wolf-thumb.jpg',
        full: '19_wolf-full.jpg'
    },
    image_20: {
        title: 'Stick Em Up!',
        thumb: '20_sheriff-thumb.jpg',
        full: '20_sheriff-full.jpg'
    },
    image_21: {
        title: 'Trick or Treat',
        thumb: '21_trick-thumb.jpg',
        full: '21_trick-full.jpg'
    },
    image_22: {
        title: 'Snowflake',
        thumb: '22_snowflake-thumb.jpg',
        full: '22_snowflake-full.jpg'
    },
    image_23: {
        title: 'Nutty Squirrel',
        thumb: '23_nutty-thumb.jpg',
        full: '23_nutty-full.jpg'
    },
    image_24: {
        title: 'Spidey',
        thumb: '24_spidey-thumb.jpg',
        full: '24_spidey-full.jpg'
    },
    image_25: {
        title: 'Ed',
        thumb: '25_ed-thumb.jpg',
        full: '25_ed-full.jpg'
    },
    image_26: {
        title: 'Hanna-Barbera',
        thumb: '26_hanna-thumb.jpg',
        full: '26_hanna-full.jpg'
    },
    image_27: {
        title: 'TooT-Too',
        thumb: '27_toot-thumb.jpg',
        full: '27_toot-full.jpg'
    },
    image_28: {
        title: 'Kooky Bird',
        thumb: '28_kooky-thumb.jpg',
        full: '28_kooky-full.jpg'
    },
    image_29: {
        title: 'Rooster Pop',
        thumb: '29_rooster-thumb.jpg',
        full: '29_rooster-full.jpg'
    },
    image_30: {
        title: 'Sheep Happens',
        thumb: '30_sheep-thumb.jpg',
        full: '30_sheep-full.jpg'
    },
    image_31: {
        title: 'Mad Scientist',
        thumb: '31_scientist-thumb.jpg',
        full: '31_scientist-full.jpg'
    },
    image_32: {
        title: 'Screwball',
        thumb: '32_screwball-thumb.jpg',
        full: '32_screwball-full.jpg'
    },
    image_33: {
        title: 'Snail Mail',
        thumb: '33_snail-thumb.jpg',
        full: '33_snail-full.jpg'
    },
    image_34: {
        title: 'Otterly Awesome',
        thumb: '34_kodi-thumb.jpg',
        full: '34_kodi-full.jpg'
    },
    image_35: {
        title: 'Rick & Morty',
        thumb: '35_rick-thumb.jpg',
        full: '35_rick-full.jpg'
    },
    image_36: {
        title: 'Silhouette',
        thumb: '36_silhouette-thumb.jpg',
        full: '36_silhouette-full.jpg'
    },
    image_37: {
        title: 'Kaiju',
        thumb: '37_kaiju-thumb.jpg',
        full: '37_kaiju-full.jpg'
    },
    image_38: {
        title: 'Walk Cycle', 
        thumb: '38_walk-thumb.jpg',
        full: '38_walk-full.gif'
    },
    image_39: {
        title: 'Rabbit',
        thumb: '39_rabbit-thumb.jpg',
        full: '39_rabbit-full.jpg'
    },
    image_40: {
        title: 'The Grinch',
        thumb: '40_grinch-thumb.jpg',
        full: '40_grinch-full.jpg'
    },
    image_41: {
        title: 'Corona Bat',
        thumb: '41_corona-thumb.jpg',
        full: '41_corona-full.jpg'
    },
    image_42: {
        title: 'Diamond Girl',
        thumb: '42_diamond-thumb.jpg',
        full: '42_diamond-full.jpg'
    },
    image_43: {
        title: 'Mischievous Goat',
        thumb: '43_goat-thumb.jpg',
        full: '43_goat-full.jpg'
    }
    // Add New Art Here!
};

// Convert Artwork Object to Array & Reverse
const artArray = Object.values(gallery);
artArray.reverse();

// Gallery Page Navigation Variable
let navigation_page;

// Gallery Page Navigation Function
function currentPage() {

    // PAGE 1
    if (navigation_page === 1) {
        pageNumber_1.classList.add('current-page');
        prevButton.forEach( e => {
            e.classList.add('hide-button');
        });
        nextButton.forEach( e => {
            e.addEventListener('click', page_2);
        });
    } else {
        pageNumber_1.classList.remove('current-page');
        prevButton.forEach( e => {
            e.classList.remove('hide-button');
        });
        nextButton.forEach( e => {
            e.removeEventListener('click', page_2);
        });
    }

    // PAGE 2
    if (navigation_page === 2) {
        pageNumber_2.classList.add('current-page');
        prevButton.forEach( e => {
            e.addEventListener('click', page_1);
        });
        nextButton.forEach( e => {
            e.addEventListener('click', page_3);
        });
    } else {
        pageNumber_2.classList.remove('current-page');
        prevButton.forEach( e => {
            e.removeEventListener('click', page_1);
        });
        nextButton.forEach( e => {
            e.removeEventListener('click', page_3);
        });
    }

    // PAGE 3
    if (navigation_page === 3) {
        pageNumber_3.classList.add('current-page');
        prevButton.forEach( e => {
            e.addEventListener('click', page_2);
        });
        nextButton.forEach( e => {
            e.addEventListener('click', page_4);
        });
    } else {
        pageNumber_3.classList.remove('current-page');
        prevButton.forEach( e => {
            e.removeEventListener('click', page_2);
        });
        nextButton.forEach( e => {
            e.removeEventListener('click', page_4);
        });
    }

    // PAGE 4
    if (navigation_page === 4) {
        pageNumber_4.classList.add('current-page');
        prevButton.forEach( e => {
            e.addEventListener('click', page_3);
        });
        nextButton.forEach( e => {
            e.addEventListener('click', page_5);
        });
    } else {
        pageNumber_4.classList.remove('current-page');
        prevButton.forEach( e => {
            e.removeEventListener('click', page_3);
        });
        nextButton.forEach( e => {
            e.removeEventListener('click', page_5);
        });
    }

    // PAGE 5
    if (navigation_page === 5) {
        pageNumber_5.classList.add('current-page');
        prevButton.forEach( e => {
            e.addEventListener('click', page_4);
        });
        nextButton.forEach( e => {
            e.addEventListener('click', page_6);
        });
    } else {
        pageNumber_5.classList.remove('current-page');
        prevButton.forEach( e => {
            e.removeEventListener('click', page_4);
        });
        nextButton.forEach( e => {
            e.removeEventListener('click', page_6);
        });
    }

    // PAGE 6
    if (navigation_page === 6) {
        pageNumber_6.classList.add('current-page');
        prevButton.forEach( e => {
            e.addEventListener('click', page_5);
        });
        nextButton.forEach( e => {
            e.classList.add('hide-button');
        });

        // Add Empty Thumbnail
        thumbnail_4.classList.add('empty-thumb');
        thumbnail_5.classList.add('empty-thumb');
        thumbnail_6.classList.add('empty-thumb');
        thumbnail_7.classList.add('empty-thumb');
        thumbnail_8.classList.add('empty-thumb');
    } else {
        pageNumber_6.classList.remove('current-page');
        prevButton.forEach( e => {
            e.removeEventListener('click', page_5);
        });
        nextButton.forEach( e => {
            e.classList.remove('hide-button');
        });

        // Remove Empty Thumbnail
        thumbnail_4.classList.remove('empty-thumb');
        thumbnail_5.classList.remove('empty-thumb');
        thumbnail_6.classList.remove('empty-thumb');
        thumbnail_7.classList.remove('empty-thumb');
        thumbnail_8.classList.remove('empty-thumb');
    }
}

// Main Modal Function
function galleryModal(artwork, name) {
    modal.style.display = 'flex';
    image.style.backgroundImage = `url('../img/gallery/full/${artwork}')`;
    title.innerHTML = name;
    title_res.innerHTML = name;
    closeButton.onclick = closeModal;
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
    document.onkeydown = null;
}

// Hide Modal Button Variable 
let hide_button;

// Modal Buttons
function modalButtons(prev, next) {

    // Hide Modal Button IF
    if (hide_button === 'left') {
        prevModal.classList.add('hide-button');
        nextModal.classList.remove('hide-button');
    }
    if (hide_button === null) {
        prevModal.classList.remove('hide-button');
        nextModal.classList.remove('hide-button');
    }
    if (hide_button === 'right') {
        prevModal.classList.remove('hide-button');
        nextModal.classList.add('hide-button');
    }

    // Click Modal Navigation
    prevModal.onclick = function(e) { prev(); }
    nextModal.onclick = function(e) { next(); }

    // Keyboard Modal Navigation
    document.onkeydown = function(e) {
        if (e.key == 'ArrowLeft') { prev(); }        
        if (e.key == 'ArrowRight') { next(); }
        if (e.key == 'Escape') { closeModal(); }
    }
}

// Modal Gallery Page Transition Variable
let transition;

// Modal Gallery Page Transition Function
function checkTransition(next_modal, prev_modal) {
    if (transition === 'next') {
        next_modal();
    }    
    if (transition === 'prev') {
        prev_modal();
    }
}

// Preload Modal Images
const preloadModal = document.getElementById('preload-modal-img');

function preloadModal_img(img1, img2, img3, img4, img5, img6, img7, img8, img9) {
    preloadModal.style.background =
   `url('../img/gallery/full/${artArray[img1].full}'),
    url('../img/gallery/full/${artArray[img2].full}'),
    url('../img/gallery/full/${artArray[img3].full}'),
    url('../img/gallery/full/${artArray[img4].full}'),
    url('../img/gallery/full/${artArray[img5].full}'),
    url('../img/gallery/full/${artArray[img6].full}'),
    url('../img/gallery/full/${artArray[img7].full}'),
    url('../img/gallery/full/${artArray[img8].full}'),
    url('../img/gallery/full/${artArray[img9].full}')`;
}

// Gallery - PAGE 1
function page_1() {
    navigation_page = 1;
    pageNumber.innerHTML = '1';

    currentPage();

    preloadModal_img(0, 1, 2, 3, 4, 5, 6, 7, 8);

    thumbnail_1.style.backgroundImage = `url('../img/gallery/thumb/${artArray[0].thumb}')`;
    thumbnail_2.style.backgroundImage = `url('../img/gallery/thumb/${artArray[1].thumb}')`;
    thumbnail_3.style.backgroundImage = `url('../img/gallery/thumb/${artArray[2].thumb}')`;
    thumbnail_4.style.backgroundImage = `url('../img/gallery/thumb/${artArray[3].thumb}')`;
    thumbnail_5.style.backgroundImage = `url('../img/gallery/thumb/${artArray[4].thumb}')`;
    thumbnail_6.style.backgroundImage = `url('../img/gallery/thumb/${artArray[5].thumb}')`;
    thumbnail_7.style.backgroundImage = `url('../img/gallery/thumb/${artArray[6].thumb}')`;
    thumbnail_8.style.backgroundImage = `url('../img/gallery/thumb/${artArray[7].thumb}')`;

    const modals = {
        modal_1: function () {
            galleryModal(artArray[0].full, artArray[0].title);
            hide_button = 'left';
            modalButtons(modals.modal_1, modals.modal_2);
        },
        modal_2: function () {
            galleryModal(artArray[1].full, artArray[1].title); 
            hide_button = null;
            modalButtons(modals.modal_1, modals.modal_3);
        },
        modal_3: function () {
            galleryModal(artArray[2].full, artArray[2].title);
            hide_button = null;
            modalButtons(modals.modal_2, modals.modal_4);
        },
        modal_4: function () {
            galleryModal(artArray[3].full, artArray[3].title);
            hide_button = null;
            modalButtons(modals.modal_3, modals.modal_5);
        },
        modal_5: function () {
            galleryModal(artArray[4].full, artArray[4].title);
            hide_button = null;
            modalButtons(modals.modal_4, modals.modal_6);
        },
        modal_6: function () {
            galleryModal(artArray[5].full, artArray[5].title);
            hide_button = null;
            modalButtons(modals.modal_5, modals.modal_7);
        },
        modal_7: function () {
            galleryModal(artArray[6].full, artArray[6].title);
            hide_button = null;
            modalButtons(modals.modal_6, modals.modal_8);
        },
        modal_8: function () {
            transition = null;
            galleryModal(artArray[7].full, artArray[7].title);
            hide_button = null;
            modalButtons(modals.modal_7, modals.next_page);
        },
        next_page: function () {
            transition = 'next';
            page_2();
        }
    };

    if (transition === 'prev') {
        modals.modal_8();
    }

    thumbnail_1.onclick = modals.modal_1
    thumbnail_2.onclick = modals.modal_2
    thumbnail_3.onclick = modals.modal_3
    thumbnail_4.onclick = modals.modal_4
    thumbnail_5.onclick = modals.modal_5
    thumbnail_6.onclick = modals.modal_6
    thumbnail_7.onclick = modals.modal_7
    thumbnail_8.onclick = modals.modal_8
}

page_1();

// Gallery - PAGE 2
function page_2() {
    navigation_page = 2;
    pageNumber.innerHTML = '2';

    currentPage();

    preloadModal_img(8, 9, 10, 11, 12, 13, 14, 15, 16);
    
    thumbnail_1.style.backgroundImage = `url('../img/gallery/thumb/${artArray[8].thumb}')`;
    thumbnail_2.style.backgroundImage = `url('../img/gallery/thumb/${artArray[9].thumb}')`;
    thumbnail_3.style.backgroundImage = `url('../img/gallery/thumb/${artArray[10].thumb}')`;
    thumbnail_4.style.backgroundImage = `url('../img/gallery/thumb/${artArray[11].thumb}')`;
    thumbnail_5.style.backgroundImage = `url('../img/gallery/thumb/${artArray[12].thumb}')`;
    thumbnail_6.style.backgroundImage = `url('../img/gallery/thumb/${artArray[13].thumb}')`;
    thumbnail_7.style.backgroundImage = `url('../img/gallery/thumb/${artArray[14].thumb}')`;
    thumbnail_8.style.backgroundImage = `url('../img/gallery/thumb/${artArray[15].thumb}')`;

    const modals = {
        modal_1: function () {
            transition = null;
            galleryModal(artArray[8].full, artArray[8].title);
            hide_button = null;
            modalButtons(modals.prev_page, modals.modal_2);
        },
        modal_2: function () {
            galleryModal(artArray[9].full, artArray[9].title);
            hide_button = null;
            modalButtons(modals.modal_1, modals.modal_3);
        },
        modal_3: function () {
            galleryModal(artArray[10].full, artArray[10].title);
            hide_button = null;
            modalButtons(modals.modal_2, modals.modal_4);
        },
        modal_4: function () {
            galleryModal(artArray[11].full, artArray[11].title);
            hide_button = null;
            modalButtons(modals.modal_3, modals.modal_5);
        },
        modal_5: function () {
            galleryModal(artArray[12].full, artArray[12].title);
            hide_button = null;
            modalButtons(modals.modal_4, modals.modal_6);
        },
        modal_6: function () {
            galleryModal(artArray[13].full, artArray[13].title);
            hide_button = null;
            modalButtons(modals.modal_5, modals.modal_7);
        },
        modal_7: function () {
            galleryModal(artArray[14].full, artArray[14].title);
            hide_button = null;
            modalButtons(modals.modal_6, modals.modal_8);
        },
        modal_8: function () {
            transition = null;
            galleryModal(artArray[15].full, artArray[15].title);
            hide_button = null;
            modalButtons(modals.modal_7, modals.next_page);
        },
        prev_page: function () {
            transition = 'prev';
            page_1();
        },
        next_page: function () {
            transition = 'next';
            page_3();
        }
    }

    checkTransition(modals.modal_1, modals.modal_8);

    thumbnail_1.onclick = modals.modal_1
    thumbnail_2.onclick = modals.modal_2
    thumbnail_3.onclick = modals.modal_3
    thumbnail_4.onclick = modals.modal_4
    thumbnail_5.onclick = modals.modal_5
    thumbnail_6.onclick = modals.modal_6
    thumbnail_7.onclick = modals.modal_7
    thumbnail_8.onclick = modals.modal_8
}

// Gallery - PAGE 3
function page_3() {
    navigation_page = 3;
    pageNumber.innerHTML = '3';

    currentPage();

    preloadModal_img(16, 17, 18, 19, 20, 21, 22, 23, 24);
    
    thumbnail_1.style.backgroundImage = `url('../img/gallery/thumb/${artArray[16].thumb}')`;
    thumbnail_2.style.backgroundImage = `url('../img/gallery/thumb/${artArray[17].thumb}')`;
    thumbnail_3.style.backgroundImage = `url('../img/gallery/thumb/${artArray[18].thumb}')`;
    thumbnail_4.style.backgroundImage = `url('../img/gallery/thumb/${artArray[19].thumb}')`;
    thumbnail_5.style.backgroundImage = `url('../img/gallery/thumb/${artArray[20].thumb}')`;
    thumbnail_6.style.backgroundImage = `url('../img/gallery/thumb/${artArray[21].thumb}')`;
    thumbnail_7.style.backgroundImage = `url('../img/gallery/thumb/${artArray[22].thumb}')`;
    thumbnail_8.style.backgroundImage = `url('../img/gallery/thumb/${artArray[23].thumb}')`;

    const modals = {
        modal_1: function () {
            transition = null;
            galleryModal(artArray[16].full, artArray[16].title);
            hide_button = null;
            modalButtons(modals.prev_page, modals.modal_2);
        },
        modal_2: function () {
            galleryModal(artArray[17].full, artArray[17].title);
            hide_button = null;
            modalButtons(modals.modal_1, modals.modal_3);
        },
        modal_3: function () {
            galleryModal(artArray[18].full, artArray[18].title);
            hide_button = null;
            modalButtons(modals.modal_2, modals.modal_4);
        },
        modal_4: function () {
            galleryModal(artArray[19].full, artArray[19].title);
            hide_button = null;
            modalButtons(modals.modal_3, modals.modal_5);
        },
        modal_5: function () {
            galleryModal(artArray[20].full, artArray[20].title);
            hide_button = null;
            modalButtons(modals.modal_4, modals.modal_6);
        },
        modal_6: function () {
            galleryModal(artArray[21].full, artArray[21].title);
            hide_button = null;
            modalButtons(modals.modal_5, modals.modal_7);
        },
        modal_7: function () {
            galleryModal(artArray[22].full, artArray[22].title);
            hide_button = null;
            modalButtons(modals.modal_6, modals.modal_8);
        },
        modal_8: function () {
            transition = null;
            galleryModal(artArray[23].full, artArray[23].title);
            hide_button = null;
            modalButtons(modals.modal_7, modals.next_page);
        },
        prev_page: function () {
            transition = 'prev';
            page_2();
        },
        next_page: function () {
            transition = 'next';
            page_4();
        }
    }

    checkTransition(modals.modal_1, modals.modal_8);

    thumbnail_1.onclick = modals.modal_1
    thumbnail_2.onclick = modals.modal_2
    thumbnail_3.onclick = modals.modal_3
    thumbnail_4.onclick = modals.modal_4
    thumbnail_5.onclick = modals.modal_5
    thumbnail_6.onclick = modals.modal_6
    thumbnail_7.onclick = modals.modal_7
    thumbnail_8.onclick = modals.modal_8
}

// Gallery - PAGE 4
function page_4() {
    navigation_page = 4;
    pageNumber.innerHTML = '4';

    currentPage();

    preloadModal_img(24, 25, 26, 27, 28, 29, 30, 31, 32);
    
    thumbnail_1.style.backgroundImage = `url('../img/gallery/thumb/${artArray[24].thumb}')`;
    thumbnail_2.style.backgroundImage = `url('../img/gallery/thumb/${artArray[25].thumb}')`;
    thumbnail_3.style.backgroundImage = `url('../img/gallery/thumb/${artArray[26].thumb}')`;
    thumbnail_4.style.backgroundImage = `url('../img/gallery/thumb/${artArray[27].thumb}')`;
    thumbnail_5.style.backgroundImage = `url('../img/gallery/thumb/${artArray[28].thumb}')`;
    thumbnail_6.style.backgroundImage = `url('../img/gallery/thumb/${artArray[29].thumb}')`;
    thumbnail_7.style.backgroundImage = `url('../img/gallery/thumb/${artArray[30].thumb}')`;
    thumbnail_8.style.backgroundImage = `url('../img/gallery/thumb/${artArray[31].thumb}')`;

    const modals = {
        modal_1: function () {
            transition = null;
            galleryModal(artArray[24].full, artArray[24].title);
            hide_button = null;
            modalButtons(modals.prev_page, modals.modal_2);
        },
        modal_2: function () {
            galleryModal(artArray[25].full, artArray[25].title);
            hide_button = null;
            modalButtons(modals.modal_1, modals.modal_3);
        },
        modal_3: function () {
            galleryModal(artArray[26].full, artArray[26].title);
            hide_button = null;
            modalButtons(modals.modal_2, modals.modal_4);
        },
        modal_4: function () {
            galleryModal(artArray[27].full, artArray[27].title);
            hide_button = null;
            modalButtons(modals.modal_3, modals.modal_5);
        },
        modal_5: function () {
            galleryModal(artArray[28].full, artArray[28].title);
            hide_button = null;
            modalButtons(modals.modal_4, modals.modal_6);
        },
        modal_6: function () {
            galleryModal(artArray[29].full, artArray[29].title);
            hide_button = null;
            modalButtons(modals.modal_5, modals.modal_7);
        },
        modal_7: function () {
            galleryModal(artArray[30].full, artArray[30].title);
            hide_button = null;
            modalButtons(modals.modal_6, modals.modal_8);
        },
        modal_8: function () {
            transition = null;
            galleryModal(artArray[31].full, artArray[31].title);
            hide_button = null;
            modalButtons(modals.modal_7, modals.next_page);
        },
        prev_page: function () {
            transition = 'prev';
            page_3();
        },
        next_page: function () {
            transition = 'next';
            page_5();
        }
    }

    checkTransition(modals.modal_1, modals.modal_8);

    thumbnail_1.onclick = modals.modal_1
    thumbnail_2.onclick = modals.modal_2
    thumbnail_3.onclick = modals.modal_3
    thumbnail_4.onclick = modals.modal_4
    thumbnail_5.onclick = modals.modal_5
    thumbnail_6.onclick = modals.modal_6
    thumbnail_7.onclick = modals.modal_7
    thumbnail_8.onclick = modals.modal_8
}

// Gallery - PAGE 5
function page_5() {
    navigation_page = 5;
    pageNumber.innerHTML = '5';

    currentPage();

    preloadModal_img(32, 33, 34, 35, 36, 37, 38, 39, 40);
    
    thumbnail_1.style.backgroundImage = `url('../img/gallery/thumb/${artArray[32].thumb}')`;
    thumbnail_2.style.backgroundImage = `url('../img/gallery/thumb/${artArray[33].thumb}')`;
    thumbnail_3.style.backgroundImage = `url('../img/gallery/thumb/${artArray[34].thumb}')`;
    thumbnail_4.style.backgroundImage = `url('../img/gallery/thumb/${artArray[35].thumb}')`;
    thumbnail_5.style.backgroundImage = `url('../img/gallery/thumb/${artArray[36].thumb}')`;
    thumbnail_6.style.backgroundImage = `url('../img/gallery/thumb/${artArray[37].thumb}')`;
    thumbnail_7.style.backgroundImage = `url('../img/gallery/thumb/${artArray[38].thumb}')`;
    thumbnail_8.style.backgroundImage = `url('../img/gallery/thumb/${artArray[39].thumb}')`;

    const modals = {
        modal_1: function () {
            transition = null;
            galleryModal(artArray[32].full, artArray[32].title);
            hide_button = null;
            modalButtons(modals.prev_page, modals.modal_2);
        },
        modal_2: function () {
            galleryModal(artArray[33].full, artArray[33].title);
            hide_button = null;
            modalButtons(modals.modal_1, modals.modal_3);
        },
        modal_3: function () {
            galleryModal(artArray[34].full, artArray[34].title);
            hide_button = null;
            modalButtons(modals.modal_2, modals.modal_4);
        },
        modal_4: function () {
            galleryModal(artArray[35].full, artArray[35].title);
            hide_button = null;
            modalButtons(modals.modal_3, modals.modal_5);
        },
        modal_5: function () {
            galleryModal(artArray[36].full, artArray[36].title);
            hide_button = null;
            modalButtons(modals.modal_4, modals.modal_6);
        },
        modal_6: function () {
            galleryModal(artArray[37].full, artArray[37].title);
            hide_button = null;
            modalButtons(modals.modal_5, modals.modal_7);
        },
        modal_7: function () {
            galleryModal(artArray[38].full, artArray[38].title);
            hide_button = null;
            modalButtons(modals.modal_6, modals.modal_8);
        },
        modal_8: function () {
            transition = null;
            galleryModal(artArray[39].full, artArray[39].title);
            hide_button = null;
            modalButtons(modals.modal_7, modals.next_page);
        },
        prev_page: function () {
            transition = 'prev';
            page_4();
        },
        next_page: function () {
            transition = 'next';
            page_6();
        }
    }

    checkTransition(modals.modal_1, modals.modal_8);

    thumbnail_1.onclick = modals.modal_1
    thumbnail_2.onclick = modals.modal_2
    thumbnail_3.onclick = modals.modal_3
    thumbnail_4.onclick = modals.modal_4
    thumbnail_5.onclick = modals.modal_5
    thumbnail_6.onclick = modals.modal_6
    thumbnail_7.onclick = modals.modal_7
    thumbnail_8.onclick = modals.modal_8
}

// Gallery - PAGE 6
function page_6() {
    navigation_page = 6;
    pageNumber.innerHTML = '6';

    currentPage();

    // Empty Gallery Slot = 43!
    preloadModal_img(40, 41, 42, 43, 43, 43, 43, 43, 43);
    // Add New Art in Artwork Source Object - Code Line: 42!
    // Also Preload New Thumbnails in CSS file!

    thumbnail_1.style.backgroundImage = `url('../img/gallery/thumb/${artArray[40].thumb}')`;
    thumbnail_2.style.backgroundImage = `url('../img/gallery/thumb/${artArray[41].thumb}')`;
    thumbnail_3.style.backgroundImage = `url('../img/gallery/thumb/${artArray[42].thumb}')`;
    thumbnail_4.style.backgroundImage = null;  // `url('../img/gallery/thumb/${artArray[43].thumb}')`;
    thumbnail_5.style.backgroundImage = null;  // `url('../img/gallery/thumb/${artArray[44].thumb}')`;
    thumbnail_6.style.backgroundImage = null;  // `url('../img/gallery/thumb/${artArray[45].thumb}')`;
    thumbnail_7.style.backgroundImage = null;  // `url('../img/gallery/thumb/${artArray[46].thumb}')`;
    thumbnail_8.style.backgroundImage = null;  // `url('../img/gallery/thumb/${artArray[47].thumb}')`;

    // Update Empty Thumbnails in Gallery Page Navigation Function - Code line: 272!

    const modals = {
        modal_1: function () {
            transition = null;
            galleryModal(artArray[40].full, artArray[40].title);
            hide_button = null;
            modalButtons(modals.prev_page, modals.modal_2);
        },
        modal_2: function () {
            galleryModal(artArray[41].full, artArray[41].title);
            hide_button = null;
            modalButtons(modals.modal_1, modals.modal_3);
        },
        modal_3: function () {
            galleryModal(artArray[42].full, artArray[42].title);
            hide_button = 'right'; // Hide Right Modal Button of Last Modal!
            modalButtons(modals.modal_2, modals.modal_3); // Update modal_3 to modal_4 for Next Modal
        },
        modal_4: function () {
            modal.style.display = 'none';
            // galleryModal(artArray[43].full, artArray[43].title);
            // hideButtons(null, null);
            // modalButtons(modals.modal_3, modals.modal_5);
        },
        modal_5: function () {
            modal.style.display = 'none';
            // galleryModal(artArray[44].full, artArray[44].title);
            // hideButtons(null, null);
            // modalButtons(modals.modal_4, modals.modal_6);
        },
        modal_6: function () {
            modal.style.display = 'none';
            // galleryModal(artArray[45].full, artArray[45].title);
            // hideButtons(null, null);
            // modalButtons(modals.modal_5, modals.modal_7);
        },
        modal_7: function () {
            modal.style.display = 'none';
            // galleryModal(artArray[46].full, artArray[46].title);
            // hideButtons(null, null);
            // modalButtons(modals.modal_6, modals.modal_8);
        },
        modal_8: function () {
            modal.style.display = 'none';
            // galleryModal(artArray[47].full, artArray[47].title);
            // hideButtons(null, null);
            // modalButtons(modals.modal_7, modals.next_page);
        },
        prev_page: function () {
            transition = 'prev';
            page_5();
        },
        // next_page: function () {
        //     transition = 'next';
        //     page_7();
        // }
    }
    
    checkTransition(modals.modal_1, modals.modal_8);

    thumbnail_1.onclick = modals.modal_1
    thumbnail_2.onclick = modals.modal_2
    thumbnail_3.onclick = modals.modal_3
    thumbnail_4.onclick = modals.modal_4
    thumbnail_5.onclick = modals.modal_5
    thumbnail_6.onclick = modals.modal_6
    thumbnail_7.onclick = modals.modal_7
    thumbnail_8.onclick = modals.modal_8
}
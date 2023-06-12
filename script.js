const faBookmark = document.querySelector(".fa-bookmark");
const bookmark = document.querySelector(".bookmark-img");
const bookmarkText = document.querySelector(".bookmark-text");
const modalCompleted = document.querySelector(".modal-completed ");
const gotIt = document.querySelector(".got-it");
const selectReward = document.querySelector(".select-reward ");
const modalDefault = document.querySelector(".modal-default");
const defaultModalTitle = document.querySelector(".default-modal-title.bamboo");
const selectedSection = document.querySelector(".selected-section");
const modalPledgeWrapper = document.querySelector(".modal-pledge-wrapper.bamboo");
const radioChecked = document.querySelector(".radio-checked.bamboo");
const radioCheckedMobile = document.querySelector(".radio-checked.mobile.bamboo");
const continueBtn = document.querySelector(".continue");
const closeDefaultModal = document.querySelector(".fa-xmark");
const selectedInput = document.querySelector(".input");
const mobileOverlay =document.querySelector('.mobile-overlay')
const mobileCloseMenu =document.querySelector('.mobile-close-menu')
const hamburger =document.querySelector('.hamburger')
const hr =document.querySelector('hr')

// BOOKMARK CLICK EVENT==============================
bookmark.addEventListener("click", () => {
  faBookmark.classList.toggle("active");
  bookmark.classList.toggle("active");
  bookmarkText.classList.toggle("active");
});

// SELECT REWARD CLICK EVENT & DISPLAY DEFAULT MODAL
selectReward.addEventListener("click", () => {
  modalDefault.classList.add("active");
});

// DEFAULT MODAL ACTION===============================

  defaultModalTitle.addEventListener("click", () => {
    radioChecked.classList.toggle("active");
    radioCheckedMobile.classList.toggle("active");
    modalPledgeWrapper.classList.toggle("active");
    selectedSection.classList.toggle('active')
    hr.classList.toggle('active')

  });

  // TRIGGER MODAL COMPLETED===========================
  continueBtn.addEventListener("click", () => {
    if (selectedInput.value != "") {
        radioChecked.classList.remove("active");
        radioCheckedMobile.classList.remove("active");
        modalPledgeWrapper.classList.remove("active");
      selectedSection.classList.remove("active");
      selectedInput.value = "";

      modalDefault.classList.remove("active");
      modalCompleted.classList.add("active");
    }
  });

    // MODAL COMPLETED CLICK EVENT======================
    gotIt.addEventListener("click", () => {
        modalCompleted.classList.remove("active");
        radioChecked.classList.remove("active");
         modalPledgeWrapper.classList.remove("active");
      });


// CLOSE DEFAULT MODAL=================================
closeDefaultModal.addEventListener("click", () => {
  modalDefault.classList.remove("active");
});


// FOR MOBILE============================================


hamburger.addEventListener('click', ()=>{
    mobileOverlay.classList.add('active')
    hamburger.classList.remove('active')
})

mobileCloseMenu.addEventListener('click', ()=>{
    mobileOverlay.classList.remove('active')
    hamburger.classList.add('active')
})
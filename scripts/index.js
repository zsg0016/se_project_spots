const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".form__close-btn");

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".form__close-btn");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

const previewPostModal = document.querySelector("#preview-post-modal");
const previewPostCloseBtn = previewPostModal.querySelector(
  ".preview__close-btn"
);

previewPostCloseBtn.addEventListener("click", function (evt) {
  closeModal(previewPostModal);
});

const previewPostImage = previewPostModal.querySelector(".preview__image");
const previewPostTitle = previewPostModal.querySelector(".preview__caption");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__caption");
  const cardImage = cardElement.querySelector(".card__image");
  cardTitle.textContent = data.name;
  cardImage.setAttribute("src", data.link);
  cardImage.setAttribute("alt", data.name);
  const cardLikeBtn = cardElement.querySelector(".card__like");

  cardImage.addEventListener("click", function (evt) {
    previewPostImage.setAttribute("src", data.link);
    previewPostImage.setAttribute("alt", data.name);
    previewPostTitle.textContent = data.name;
    openModal(previewPostModal);
  });

  cardLikeBtn.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__like-clicked");
  });

  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtn.addEventListener("click", function (evt) {
    cardElement.remove();
  });
  return cardElement;
}

function handleKeyPress(event) {
  if (event.key === "Escape") {
    const modalElement = document.querySelector(".modal_is-opened");
    closeModal(modalElement);
  }
}

function disableButton(buttonElement, config) {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleKeyPress);
}

function closeModal(modal) {
  document.removeEventListener("keydown", handleKeyPress);
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  const nameField = editProfileForm.querySelector("#name");
  nameField.value = profileCurrentName;
  const descriptionField = editProfileForm.querySelector("#description");
  descriptionField.value = profileCurrentDescription;
  resetValidation(editProfileForm);
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

const profileModal = document.querySelector(".profile");
const profileName = profileModal.querySelector(".profile__name");
const profileDescription = profileModal.querySelector(".profile__description");
const profileCurrentName = profileName.textContent;
const profileCurrentDescription = profileDescription.textContent;

const editProfileForm = document.forms["edit-profile-form"];
const editProfileName = editProfileForm.querySelector("#name");
const editProfileDescription = editProfileForm.querySelector("#description");
editProfileName.value = profileName.textContent;
editProfileDescription.value = profileDescription.textContent;
//form submission handler
function handleProfileFormSubmit(event) {
  event.preventDefault();
  const newProfileName = editProfileName.value;
  const newProfileDescription = editProfileDescription.value;
  profileName.textContent = newProfileName;
  profileDescription.textContent = newProfileDescription;

  closeModal(editProfileModal);
  const submitBtn = modal.querySelector(".form__submit-btn");
  disableButton(submitBtn, config);
}
//event listner for edit profile form
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

const newPostForm = newPostModal.querySelector(".form");
const newPostNameInput = newPostForm.querySelector("#caption");
const newPostImageInput = newPostForm.querySelector("#link");
//new post submission handler
function handleAddCardSubmit(event) {
  event.preventDefault();
  initialCards.push({
    name: newPostNameInput.value,
    link: newPostImageInput.value,
  });
  const newCard = getCardElement(initialCards[initialCards.length - 1]);
  cardList.prepend(newCard);

  closeModal(newPostModal);
  event.target.reset();
  const submitBtn = modal.querySelector(".form__submit-btn");
  disableButton(submitBtn, config);
}
//event listener for new post form
newPostForm.addEventListener("submit", handleAddCardSubmit);
initialCards.forEach(function (data) {
  const newCard = getCardElement(data);
  cardList.prepend(newCard);
});

const modalList = document.querySelectorAll(".modal");
modalList.forEach((modalElement) => {
  const modalContainer = modalElement.querySelector(".modal__container");
  modalElement.addEventListener("click", function (event) {
    if (!modalContainer.contains(event.target)) {
      closeModal(modalElement);
    }
  });
});

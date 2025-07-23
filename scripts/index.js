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

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

const profileModal = document.querySelector(".profile");
const profileName = profileModal.querySelector(".profile__name");
const profileDescription = profileModal.querySelector(".profile__description");

const editProfileForm = editProfileModal.querySelector(".form");
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

  editProfileModal.classList.remove("modal_is-opened");
}
//event listner for edit profile form
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

const newPostForm = newPostModal.querySelector(".form");
const newPostNameInput = newPostForm.querySelector("#caption");
const newPostImageInput = newPostForm.querySelector("#link");
//new post submission handler
function handleAddCardSubmit(event) {
  event.preventDefault();
  console.log(newPostNameInput.value);
  console.log(newPostImageInput.value);
  newPostModal.classList.remove("modal_is-opened");
  event.target.reset();
}
//event listener for new post form
newPostForm.addEventListener("submit", handleAddCardSubmit);
initialCards.forEach(function (item) {
  console.log(item.name);
});

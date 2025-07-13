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
  newPostForm.reset();
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
  let newProfileName = editProfileName.value;
  let newProfileDescription = editProfileDescription.value;
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

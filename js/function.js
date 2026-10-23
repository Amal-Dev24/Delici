function changeToNextSlideByUl() {

    let currentLi = carousel.querySelector('ul li.active'),
        newSlide = currentLi.nextElementSibling ?? carousel.querySelector("ul li:first-child");

    currentLi.classList.remove("active");
    newSlide.classList.add("active");

};

function changeTobeforeSlideByUl() {

    let currentLi = carousel.querySelector('ul li.active'),
        newSlide = currentLi.previousElementSibling ?? carousel.querySelector("ul li:last-child");

    currentLi.classList.remove("active");
    newSlide.classList.add("active");

};

function changeColorInLi() {

    let liList = carousel.querySelectorAll("ul li");

    liList.forEach(function (li, index) {
        li.addEventListener("click", function (e) {

            let currentLi = carousel.querySelector('ul li.active'),
                currentItem = carousel.querySelector(".AM-carousel-item.active");

            currentLi.classList.remove("active");
            li.classList.add("active");

            currentItem.classList.remove("active")
            itemsCarousel[index].classList.add("active");
        });
    });

}

function scrollNav() {
    if (window.scrollY > 10) {
        nav.classList.add("scroll")
    } else {
        nav.classList.remove("scroll")
    }

    let currrentScroll = window.scrollY;

    if (currrentScroll < lastScroll) {
        nav.style.transform = 'translateY(0%)'
    } else {
        nav.style.transform = 'translateY(-100%)'
    }
    lastScroll = currrentScroll;
}

function updateLink(idSection) {
    let section = document.querySelector(`#${idSection}`),
        topOfSection = section.offsetTop,
        heightSection = section.clientHeight,
        buttomSection = topOfSection + heightSection;

    if (window.scrollY > topOfSection && window.scrollY < buttomSection) {

        let currentLink = document.querySelector("nav .links li.active "),
            linkOfSection = document.querySelector(`nav .links li:has(> a[href="#${idSection}"])`),
            currentLinkPop = document.querySelector(".popupNav .links li.active "),
            linkPopOfSection = document.querySelector(`.popupNav .links li:has(> a[href="#${idSection}"])`);

        currentLink.classList.remove("active");
        linkOfSection.classList.add("active");
        currentLinkPop.classList.remove("active");
        linkPopOfSection.classList.add("active");
    }
};

function checkInputpopupBook(input) {

    let inputName = input.name,
        inputValue = input.value.trim(),
        isEmpty = inputValue === "",
        isInvalid = !regex1[inputName].test(inputValue),
        errorEle = formPopupBook.querySelector(`div[data-error="${inputName}"]`),
        errorMessage = "";

    if (inputName == "Name") {
        if (isInvalid) {
            errorMessage = "Enter letters only.";
        }
    } else if (inputName == "Phone") {
        if (isInvalid) {
            errorMessage = "Enter a valid Egyptian phone number.";
        }
    } else if (inputName == "Seats") {
        if (isInvalid) {
            errorMessage = "Available seats from 1 to 15";
        }
    } else if (inputName == "Date") {
        if (isInvalid) {
            errorMessage = "Enter a valid date and time.";
        }
    }

    if (isEmpty) {
        errorMessage = "This field is required.";
        isInvalid = true;
    }

    if (isEmpty || isInvalid) {
        input.classList.add("is-invalid");
        errorEle.textContent = errorMessage;
        input.classList.remove("is-valid");
    } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }

}

function checkInput(input) {

    let inputName = input.name,
        inputValue = input.value,
        isEmpty = inputValue === "",
        isInvalid = !regex[inputName].test(inputValue),
        errorEle = form.querySelector(`div[data-error="${inputName}"]`),
        errorMessage = "";

    if (inputName == "Name") {
        if (isInvalid) {
            errorMessage = "Enter letters only.";
        };

    } else if (inputName == "Email") {
        if (isInvalid) {
            errorMessage = "Invalid email address.";
        };

    } else if (inputName == "Message") {
        if (isInvalid) {
            errorMessage = "Message: 10-300 characters.";
        };

    };

    if (isEmpty) {
        errorMessage = "This field is required."
    }

    if (isEmpty || isInvalid) {
        input.classList.add("is-invalid");
        errorEle.textContent = errorMessage;
        input.classList.remove("is-valid");
    } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }

}

function openPopupMenu(section, button, index) {

    button.addEventListener("click", function () {

        popupMenu.classList.add("active");

        setTimeout(function () {
            popupMenu.classList.add("show");

        }, 1000)

        function updatePopupMenu() {
            let currentMale = section[index];

            popupMenuBox.innerHTML = `
                <div class="item mx-auto py-5 rounded-2 position-relative">
                <div class="title text-center ">
                    <h6 class="">SPECIAL SELECTION</h6>
                    <div class="image text-center mx-auto">
                        <img src="./images_delici/images/separator.svg" class=" img-fluid" alt="separator">
                    </div>
                </div>
                <h2 class="my-3 text-center text-light">${currentMale.name}</h2>
                <div class="content mt-4">
                    <div class="image mb-4 position-relative">
                        <img src="./images_delici/images/${currentMale.images}" class="img-fluid rounded-5" alt="">
                        <h4 class="position-absolute">$${currentMale.price}</h4>
                        <button class="next position-absolute"><i class="fa-solid fa-angle-right"></i></button>
                        <button class="prev position-absolute"><i class="fa-solid fa-chevron-left"></i></button>
                    </div>
                    <div class="text">
                        <p class="">
                           ${currentMale.description}
                        </p>
                    </div>
                </div>
                <div class="close d-flex justify-content-center align-items-center  position-absolute"><i class=" d-flex justify-content-center align-items-center  fa-solid fa-xmark"></i></div>
            </div>
            `;

            let closePopupMenu = popupMenu.querySelector(".close i"),
                nextPopupMenu = popupMenu.querySelector(".next"),
                prevPopupMenu = popupMenu.querySelector(".prev");

            nextPopupMenu.addEventListener("click", function () {
                index++
                if (index >= section.length) {
                    index = 0
                }
                updatePopupMenu();

            });

            prevPopupMenu.addEventListener("click", function () {
                index--
                if (index < 0) {
                    index = (section.length) - 1
                }
                updatePopupMenu();
            });

            closePopupMenu.addEventListener("click", function () {

                popupMenu.classList.remove("show");
                setTimeout(function () {
                    popupMenu.classList.remove("active")
                }, 1000);
            });

        }

        updatePopupMenu();




    });


};

function changeSlide() {
    itemsCarousel[currentIndex].classList.remove("active");
    liHome[currentIndex].classList.remove("active")
    let newIndex = (currentIndex + 1) % itemsCarousel.length;
    itemsCarousel[newIndex].classList.add("active");
    liHome[newIndex].classList.add("active");
    currentIndex = newIndex;
}

function selectedMenu(array, valueInput, content) {

    let Menus = array.filter(function (male) {
        return male.name.trim().toLowerCase().includes(valueInput);
    });

    if (Menus.length == 0) {
        content.innerHTML = `
            <div class="notMale w-100 h-100 d-flex justify-content-center align-items-center">
                <div class="content d-flex justify-content-center align-items-center flex-column row-gap-4">
                    <h3 class="text-center">No dishes found</h3>
                    <p class="text-center">Try searching for another dish or explore our menu.</p>
                </div>
            </div>
        `
        return;
    };

    content.innerHTML = `
                    <div class="leftMenu col-lg-6">
                        <div class="item "></div>
                    </div>
                    <div class="rightMenu col-lg-6">
                        <div class="item ps-lg-3 ps-2 p-md-0"></div>
                    </div>
    `;

    let leftPart = content.querySelector(".leftMenu .item"),
        rightPart = content.querySelector(".rightMenu .item");


    Menus.forEach(function (male, index) {
        if (index < Menus.length / 2) {
            leftPart.innerHTML += `
                <div class="row box show d-flex mb-5">
                    <div class="image col-lg-3 col-4 px-1 d-flex justify-content-center align-items-center">
                        <div class="image-inner position-relative"> 
                            <img src="images_delici/images/${male.images[0]}" class="img-fluid" alt="${male.name}">
                            <div class="layout position-absolute">
                                <i class="fa-regular fa-square-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div class="content d-flex justify-content-center align-items-center col-lg-9 col-8">
                        <div class="box">
                            <div class="header d-sm-flex column-gap-2">
                                <h6 class="">${male.name}</h6>
                                <div class="span flex-column row-gap-1">
                                    <span></span>
                                    <span></span>
                                </div>
                                <h6 class="">$${male.price}</h6>
                            </div>
                            <p class="text">${male.miniDescription.slice(0, 100)}...</p>
                        </div>
                    </div>
                </div> 
            `;
        } else {
            rightPart.innerHTML += `
                <div class="row box show d-flex mb-5">
                    <div class="image col-lg-3 col-4 px-1 d-flex justify-content-center align-items-center">
                        <div class="image-inner position-relative"> 
                            <img src="images_delici/images/${male.images[0]}" class="img-fluid" alt="${male.name}">
                            <div class="layout position-absolute">
                                <i class="fa-regular fa-square-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div class="content d-flex justify-content-center align-items-center col-lg-9 col-8">
                        <div class="box">
                            <div class="header d-sm-flex column-gap-2">
                                <h6 class="">${male.name}</h6>
                                <div class="span flex-column row-gap-1">
                                    <span></span>
                                    <span></span>
                                </div>
                                <h6 class="">$${male.price}</h6>
                            </div>
                            <p class="text">${male.miniDescription.slice(0, 100)}...</p>
                        </div>
                    </div>
                </div> 
            `;
        }
    });

};

function resetForm() {

    form.reset();
    formInputs.forEach(function (input) {
        input.classList.remove("is-valid");
        input.classList.remove("is-invalid");
    });

    formPopupBook.reset();
    formPopupBookInputs.forEach(function (input) {
        input.classList.remove("is-valid");
        input.classList.remove("is-invalid");
    });

}

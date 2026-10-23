let carousel = document.querySelector(".AM-carousel"),
    nextSlide = carousel.querySelector("button.next"),
    prevSlide = carousel.querySelector("button.prev"),
    itemsCarousel = carousel.querySelectorAll(".AM-carousel-item"),
    currentIndex = 0,
    book = carousel.querySelector(".image1"),
    popupBook = document.querySelector(".popupBook"),
    popupBookBox = document.querySelector(".popupBook .box"),
    closePopupBook = document.querySelector(".popupBook .box .item .close "),
    liHome = carousel.querySelectorAll("ul li"),
    navLinks = document.querySelectorAll("nav ul.links li"),
    navButton = document.querySelector("nav button"),
    popupNavLinks = document.querySelectorAll(".popupNav .box ul.links li"),
    poppupNav = document.querySelector(".popupNav"),
    nav = document.querySelector("nav"),
    lastScroll = window.scrollY,
    formPopupBook = document.querySelector(".popupBook form"),
    formPopupBookInputs = formPopupBook.querySelectorAll("input"),
    sections = document.querySelectorAll("section,header"),
    toolTipList = document.querySelectorAll('p[ data-bs-toggle="tooltip"]'),
    boxContentBreakFast = document.querySelector("#menu .content .row.breakFast"),
    boxContentLunch = document.querySelector("#menu .content .row.lunch"),
    boxContentDinner = document.querySelector("#menu .content .row.dinner"),
    boxContentDrinks = document.querySelector("#menu .content .row.drink"),
    leftMenu = document.querySelector("#menu .breakFast .leftMenu .item"),
    rightMenu = document.querySelector("#menu .breakFast .rightMenu .item"),
    leftMenuLunch = document.querySelector("#menu .lunch .leftMenu .item"),
    rightMenuLunch = document.querySelector("#menu .lunch .rightMenu .item"),
    leftMenuDinner = document.querySelector("#menu .dinner .leftMenu .item"),
    rightMenuDinner = document.querySelector("#menu .dinner .rightMenu .item"),
    leftMenuDrink = document.querySelector("#menu .drink .leftMenu .item"),
    rightMenuDrink = document.querySelector("#menu .drink .rightMenu .item"),
    searchInput = document.querySelector("#menu .search input"),
    linksMenu = document.querySelectorAll("#menu .linksPage a"),
    popupMenu = document.querySelector(".popupMenu"),
    popupMenuBox = popupMenu.querySelector(".box"),
    form = document.querySelector("#contactUs form"),
    formInputs = form.querySelectorAll("input,textarea"),
    loadingPage = document.querySelector(".loadingPage"),
    iconsReset = document.querySelectorAll("form .reset");

console.log(searchInput)

//  liHome.forEach(function (li, index) {
//      let currentLi = carousel.querySelector("ul li.active"),
//          currentItem = carousel.querySelector(".AM-carousel-item.active");
//      li.addEventListener("click", function () {

//          currentLi.classList.remove("active");
//          li.classList.add("active");

//          currentItem.classList.remove("active")
//          itemsCarousel[index].classList.add("active");

//      });


//  });

navLinks.forEach(function (link) {

    link.addEventListener("click", function (e) {
        e.preventDefault

        let currentLink = document.querySelector(".links li.active "),
            currentId = link.querySelector("a").href,
            currentSection = document.querySelector(currentId),
            topOfSection = currentSection.offsetTop,
            heightNav = nav.clientHeight;

        window.scrollTo(0, topOfSection - heightNav);

        currentLink.classList.remove("active");
        link.classList.add("active");
    });


});

window.addEventListener("scroll", function () {
    scrollNav();

    sections.forEach(function (section) {

        let idSection = section.getAttribute("id");

        updateLink(idSection);

    })


});

popupNavLinks.forEach(function (link) {

    link.addEventListener("click", function (e) {
        let currentLink = document.querySelector(".popupNav .box ul li.active ");

        currentLink.classList.remove("active");
        link.classList.add("active");
        poppupNav.classList.add("d-none");



    });

})

navButton.addEventListener('click', function () {
    let
        poppupNavBox = document.querySelector(".popupNav .box"),
        navIconClose = poppupNavBox.querySelector("i.close");

    poppupNav.classList.add("active");

    setTimeout(function () {
        poppupNav.classList.add("show");
    }, 500);

    poppupNav.addEventListener("click", function () {
        poppupNav.classList.remove("show");

        setTimeout(function () {
            poppupNav.classList.remove("active");
        }, 500);
    });

    poppupNavBox.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    navIconClose.addEventListener("click", function () {
        poppupNav.classList.remove("show");

        setTimeout(function () {
            poppupNav.classList.remove("active");
        }, 500);
    });
})

nextSlide.addEventListener("click", function (e) {
    let currentSlide = carousel.querySelector(".AM-carousel-item.active"),
        newSlide = currentSlide.nextElementSibling ?? carousel.querySelector(".AM-carousel-item:first-child");

    currentSlide.classList.remove("active");
    newSlide.classList.add("active");

    changeToNextSlideByUl();


});

prevSlide.addEventListener("click", function (e) {
    let currentSlide = carousel.querySelector(".AM-carousel-item.active"),
        newSlide = currentSlide.previousElementSibling ?? carousel.querySelector(".AM-carousel-item:last-child");

    currentSlide.classList.remove("active");
    newSlide.classList.add("active");

    changeTobeforeSlideByUl()

});

book.addEventListener("click", function () {
    popupBook.classList.add("active");

    setTimeout(function () {
        popupBook.classList.add("show");
    }, 1000)

    popupBook.addEventListener("click", function () {
        popupBook.classList.remove("show");

        setTimeout(function () {
            popupBook.classList.remove("active");
        }, 1000)
    })

    closePopupBook.addEventListener("click", function () {
        popupBook.classList.remove("show");

        setTimeout(function () {
            popupBook.classList.remove("active");
        }, 1000)
    })

});



popupBookBox.addEventListener("click", function (e) {
    e.stopPropagation();
})

let regex1 = {
    "Name": /^[a-zA-Z]+( [a-zA-Z]+)*$/,
    "Phone": /^01(0|1|2|5)[0-9]{8}$/,
    "Seats": /^([1-9]|1[0-5])$/,
    "Date": /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/20(2[6-9]|[3-9][0-9]) (0[1-9]|1[0-2]):([0-5][0-9]) (AM|PM)$/i
};

formPopupBook.addEventListener("submit", function (e) {
    e.preventDefault();

    let invalidInput = formPopupBook.querySelector("input.is-invalid"),
        inputFocus = formPopupBook.querySelector("input:focus");

    inputFocus?.blur();

    if (invalidInput !== null) {
        return;
    }

    formPopupBookInputs.forEach(function (input) {
        checkInputpopupBook(input);
    });

    resetForm();
});

setInterval(changeSlide, 8000);

changeColorInLi();

toolTipList.forEach(function (toolTipEle) {

    new bootstrap.Tooltip(toolTipEle);

});

BreakFast.forEach(function (male, index) {

    if (index < BreakFast.length / 2) {

        leftMenu.innerHTML += `
                        <div class="row box show d-flex mb-lg-5 mb-3 ">
                            <div class="image col-lg-3 col-4  px-1 d-flex justify-content-center  align-items-center ">
                                 <div class = 'image-inner position-relative'> 
                                    <img src="images_delici/images/${male.images[0]}" class="img-fluid" alt="${male.name}">
                                    <div class="layout position-absolute">
                                        <i class="fa-regular fa-square-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="content d-flex justify-content-center align-items-center   col-lg-9 col-8  ">
                                <div class="box">
                                    <div class="header d-sm-flex column-gap-2">
                                        <h6 class="">${male.name}</h6>
                                        <div class="span  flex-column row-gap-1 ">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <h6 class="">${male.price}</h6>
                                    </div>

                                    <p class="text" href="#" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-design-tooltip"
                                        data-bs-title="Tap the + for the full details." data-bs-placement="top">
                                    ${male.miniDescription.slice(0, 100)}...
                                    </p>
                                </div>
                            </div>
                            
                        </div> 
    `

    } else {
        rightMenu.innerHTML += `
                       <div class="row box show d-flex mb-lg-5 mb-3 ">
                            <div class="image col-lg-3 col-4  px-1 d-flex justify-content-center  align-items-center ">
                                 <div class = 'image-inner position-relative'> 
                                    <img src="images_delici/images/${male.images[0]}" class="img-fluid" alt="${male.name}">
                                    <div class="layout position-absolute">
                                        <i class="fa-regular fa-square-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="content d-flex justify-content-center align-items-center   col-lg-9 col-8  ">
                                <div class="box">
                                    <div class="header d-sm-flex column-gap-2">
                                        <h6 class="">${male.name}</h6>
                                        <div class="span  flex-column row-gap-1 ">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <h6 class="">${male.price}</h6>
                                    </div>

                                    <p class="text" href="#" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-design-tooltip"
                                        data-bs-title="Tap the + for the full details." data-bs-placement="top">
                                    ${male.miniDescription.slice(0, 100)}...
                                    </p>
                                </div>
                            </div>
                            
                        </div> 
        `
    }

});

Lunch.forEach(function (male, index) {

    if (index < Lunch.length / 2) {

        leftMenuLunch.innerHTML += `
                        <div class="row box  d-flex mb-lg-5 mb-3  ">
                            <div class="image col-lg-3 col-4  px-1 d-flex justify-content-center  align-items-center ">
                                 <div class = 'image-inner position-relative'> 
                                    <img
                                    src="images_delici/images/${male.images[0]}" class="img-fluid" alt="${male.name}">
                                    <div class="layout position-absolute">
                                        <i class="fa-regular fa-square-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="content d-flex justify-content-center align-items-center   col-lg-9 col-8  ">
                                <div class="box">
                                    <div class="header d-sm-flex column-gap-2">
                                        <h6 class="">${male.name}</h6>
                                        <div class="span  flex-column row-gap-1 ">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <h6 class="">${male.price}</h6>
                                    </div>

                                    <p class="text" href="#" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-design-tooltip"
                                        data-bs-title="Tap the + for the full details." data-bs-placement="top">
                                    ${male.miniDescription.slice(0, 100)}...
                                    </p>
                                </div>
                            </div>
                            
                        </div> 
    `

    } else {

        rightMenuLunch.innerHTML += `

                        <div class="row box  d-flex mb-lg-5 mb-3 ">
                            <div class="image col-lg-3 col-4  px-1 d-flex justify-content-center  align-items-center ">
                                 <div class = 'image-inner position-relative'> 
                                    <img
                                    src="images_delici/images/${male.images[0]}" class="img-fluid" alt="${male.name}">
                                    <div class="layout position-absolute">
                                        <i class="fa-regular fa-square-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="content d-flex justify-content-center align-items-center   col-lg-9 col-8  ">
                                <div class="box">
                                    <div class="header d-sm-flex column-gap-2">
                                        <h6 class="">${male.name}</h6>
                                        <div class="span  flex-column row-gap-1 ">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <h6 class="">${male.price}</h6>
                                    </div>

                                    <p class="text" href="#" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-design-tooltip"
                                        data-bs-title="Tap the + for the full details." data-bs-placement="top">
                                    ${male.miniDescription.slice(0, 100)}...
                                    </p>
                                </div>
                            </div>
                            
                        </div> 

                       
        `
    }

});

Dinner.forEach(function (male, index) {

    if (index < Dinner.length / 2) {

        leftMenuDinner.innerHTML += `
                        <div class="row box  d-flex mb-lg-5 mb-3 ">
                            <div class="image col-lg-3 col-4  px-1 d-flex justify-content-center  align-items-center ">
                                 <div class = 'image-inner position-relative'> 
                                    <img
                                    src="images_delici/images/${male.images[0]}" class="img-fluid" alt="${male.name}">
                                    <div class="layout position-absolute">
                                        <i class="fa-regular fa-square-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="content d-flex justify-content-center align-items-center   col-lg-9 col-8  ">
                                <div class="box">
                                    <div class="header d-sm-flex column-gap-2">
                                        <h6 class="">${male.name}</h6>
                                        <div class="span  flex-column row-gap-1 ">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <h6 class="">${male.price}</h6>
                                    </div>

                                    <p class="text" href="#" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-design-tooltip"
                                        data-bs-title="Tap the + for the full details." data-bs-placement="top">
                                    ${male.miniDescription.slice(0, 100)}...
                                    </p>
                                </div>
                            </div>
                            
                        </div> 
    `

    } else {

        rightMenuDinner.innerHTML += `

                        <div class="row box  d-flex  mb-lg-5 mb-3 ">
                            <div class="image col-lg-3 col-4  px-1 d-flex justify-content-center  align-items-center ">
                                 <div class = 'image-inner position-relative'> 
                                    <img
                                    src="images_delici/images/${male.images[0]}" class="img-fluid" alt="${male.name}">
                                    <div class="layout position-absolute">
                                        <i class="fa-regular fa-square-plus"></i>
                                    </div>
                                </div>

                            </div>
                            <div class="content d-flex justify-content-center align-items-center   col-lg-9 col-8  ">
                                <div class="box">
                                    <div class="header d-sm-flex column-gap-2">
                                        <h6 class="">${male.name}</h6>
                                        <div class="span  flex-column row-gap-1 ">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <h6 class="">${male.price}</h6>
                                    </div>

                                    <p class="text" href="#" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-design-tooltip"
                                        data-bs-title="Tap the + for the full details." data-bs-placement="top">
                                    ${male.miniDescription.slice(0, 100)}...
                                    </p>
                                </div>
                            </div>
                            
                        </div> 

                       
        `
    }

});

Drinks.forEach(function (male, index) {
    if (index < Drinks.length / 2) {

        leftMenuDrink.innerHTML += `
                        <div class="row box  d-flex mb-lg-5 mb-3 ">
                            <div class="image col-lg-3 col-4  px-1 d-flex justify-content-center  align-items-center ">
                                <div class = 'image-inner position-relative'> 
                                    <img
                                    src="images_delici/images/${male.images[0]}" class="img-fluid" alt="${male.name}">
                                    <div class="layout position-absolute">
                                        <i class="fa-regular fa-square-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="content d-flex justify-content-center align-items-center   col-lg-9 col-8 ">
                                <div class="box">
                                    <div class="header d-sm-flex column-gap-2">
                                        <h6 class="">${male.name}</h6>
                                        <div class="span  flex-column row-gap-1 ">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <h6 class="">${male.price}</h6>
                                    </div>

                                    <p class="text" href="#" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-design-tooltip"
                                        data-bs-title="Tap the + for the full details." data-bs-placement="top">
                                    ${male.miniDescription.slice(0, 100)}...
                                    </p>
                                </div>
                            </div>
                            
                        </div> 
    `

    } else {

        rightMenuDrink.innerHTML += `

                        <div class="row box  d-flex mb-lg-5 mb-3 ">
                            <div class="image col-lg-3 col-4 px-1 d-flex justify-content-center  align-items-center ">
                                <div class = 'image-inner position-relative'> 
                                    <img
                                    src="images_delici/images/${male.images[0]}" class="img-fluid" alt="${male.name}">
                                    <div class="layout position-absolute">
                                        <i class="fa-regular fa-square-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="content d-flex justify-content-center align-items-center  col-lg-9 col-8">
                                <div class="box">
                                    <div class="header d-sm-flex  column-gap-2">
                                        <h6 class="">${male.name}</h6>
                                        <div class="span  flex-column row-gap-1 ">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <h6 class="">${male.price}</h6>
                                    </div>

                                    <p class="text" href="#" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-design-tooltip"
                                        data-bs-title="Tap the + for the full details." data-bs-placement="top">
                                    ${male.miniDescription.slice(0, 100)}...
                                    </p>
                                </div>
                            </div>
                            
                        </div> 

                       
        `
    }

});

let buttonsMenuBreakFast = document.querySelectorAll("#menu .content .row.breakFast .layout i"),
    buttonsMenuLunch = document.querySelectorAll("#menu .content .row.lunch .layout i"),
    buttonsMenuDinner = document.querySelectorAll("#menu .content .row.dinner .layout i"),
    buttonsMenuDrink = document.querySelectorAll("#menu .content .row.drink .layout i");

buttonsMenuBreakFast.forEach(function (button, index) {
    openPopupMenu(BreakFast, button, index);

});

buttonsMenuLunch.forEach(function (button, index) {
    openPopupMenu(Lunch, button, index);

});

buttonsMenuDinner.forEach(function (button, index) {
    openPopupMenu(Dinner, button, index);

});

buttonsMenuDrink.forEach(function (button, index) {
    openPopupMenu(Drinks, button, index);

});

searchInput.addEventListener("input", function () {
    let valueInput = searchInput.value.trim().toLowerCase();

    selectedMenu(BreakFast, valueInput, boxContentBreakFast);
    selectedMenu(Lunch, valueInput, boxContentLunch);
    selectedMenu(Dinner, valueInput, boxContentDinner);
    selectedMenu(Drinks, valueInput, boxContentDrinks);

})


popupMenu.addEventListener("click", function () {
    popupMenuBox.addEventListener("click", function (e) {
        e.stopPropagation();
    })
    popupMenu.classList.remove("show");
    setTimeout(function () {
        popupMenu.classList.remove("active")
    }, 1000);
});

linksMenu.forEach(function (link) {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        let currentlink = document.querySelector("#menu .linksPage a.active");
        currentlink.classList.remove("active");
        link.classList.add("active");



        let idContent = link.getAttribute("href"),
            currentContent = document.querySelector("#menu .content > .row.active.show "),
            newContent = document.querySelector(idContent),
            currentRowsMenu = currentContent.querySelectorAll("#menu .content .row.active.show .item > .row");



        currentContent.classList.remove("show");
        currentRowsMenu.forEach(function (rowEle) {
            rowEle.classList.remove("show")
            currentContent.classList.remove("active");
        });

        setTimeout(function () {

            newContent.classList.add("active");

            let rowsMenu = newContent.querySelectorAll("#menu .content .row.active .item > .row");

            setTimeout(function () {
                newContent.classList.add("show");



                rowsMenu.forEach(function (row, index) {

                    let delayOfTime = index * 200;

                    setTimeout(function () {
                        row.classList.add("show");
                    }, delayOfTime);

                });

            }, 100);
        }, 0);

    });
});


let regex = {
    "Name": /^[a-zA-Z]+( [a-zA-Z0-9]+)*$/,
    "Email": /^[A-za-z_][A-za-z_0-9\.]+@(gmail|yahoo)\.(com|org)/,
    "Message": /^( {0,4})?[a-zA-Z0-9]+( [a-zA-Z0-9\.]+)*$/,
};

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let invalidInput = form.querySelector("input.is-invalid"),
        inputFocus = form.querySelector("input:focus");

    inputFocus?.blur();

    if (invalidInput !== null) {
        return;
    };


    formInputs.forEach(function (input) {
        checkInput(input)

    });


    resetForm();



});

iconsReset.forEach(function (iconReset) {
    iconReset.addEventListener("click", function () {
        resetForm();
    })
})

window.addEventListener("DOMContentLoaded", function () {
    loadingPage.classList.add("hide");
    setTimeout(function () {
        loadingPage.classList.add("d-none");
    }, 10000);

});
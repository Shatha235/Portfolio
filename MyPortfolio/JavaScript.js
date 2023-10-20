document.addEventListener("DOMContentLoaded", function () {
    const jobTitles = ["Computer Engineer", "Web Developer"];
    var jobTitleElement = document.getElementById("jobTitle");
    var currentIndex = 0;
    var currentText = "";
    var letterIndex = 0;
    var isDeleting = false;

    function animateText() {
        const title = jobTitles[currentIndex];
        if (isDeleting) {
            currentText = title.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentText = title.substring(0, letterIndex + 1);
            letterIndex++;
        }

        jobTitleElement.innerHTML = `I'm ${currentText}`;

        if (!isDeleting && currentText === title) {
            isDeleting = true;
            setTimeout(animateText, 1000);
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % jobTitles.length;
            setTimeout(animateText, 500);
        } else {
            setTimeout(animateText, 50);
        }
    }

    animateText();

    const Images = ["Assets/images/DSC00213.JPG", "Assets/images/DSC00173.JPG"];
    var index = 0;
    var elementImage = document.getElementById("myImage");

    function changeMyPic() {
        index = (index + 1) % Images.length;
        elementImage.src = Images[index];
    }

    changeMyPic(); 
    setInterval(changeMyPic, 3000);

    const form = document.getElementById("contactForm");
    const inputs = document.querySelectorAll(".js-input");
    const successMessage = document.getElementById("successMessage");

    function changeTextColor() {
        inputs.forEach(input => {
            if (input.value == '')
                input.style.color = '#5371c7';
            else
                input.style.color = '#272829';
        });
    }

    inputs.forEach(input => {
        input.addEventListener("change", changeTextColor)
    });

    function showSuccessMessage(event) {
        event.preventDefault();
        const alertElement = document.createElement('div');
        alertElement.className = 'alert alert-success col-lg-7';
        alertElement.innerHTML = `
        <h4 class="alert-heading">Well done!</h4>
        <p>Aww yeah, Your Form submitted successfully!</p>
    `;

        // Insert the alert element before the form in the DOM
        form.parentNode.insertBefore(alertElement, form);
        inputs.forEach(input => {
            input.value = '';
        })
    }

    form.addEventListener("submit", showSuccessMessage);


    const projectCardImages = document.querySelectorAll(".project-card-image");
    function changeProjectImage(event) {
        const imagePath = "Assets/images/istockphoto-1151872207-170667a.jpg";
        const clickedImage = event.target;

        clickedImage.src = imagePath;
    }

    for (const image of projectCardImages) {
        image.addEventListener("click", changeProjectImage);
    }


    $(document).ready(function () {
        $(".navbar-toggler").on("click", function () {
            $("#sidebar").toggleClass("show");
            $(".sidebar-closed").toggleClass("col-md-10 col-lg-10 col-md-12 col-lg-12");
        });
    });

        var navbarToggler = document.querySelector(".navbar-toggler");
        var sidebar = document.getElementById("sidebar");
        var mainContent = document.querySelector(".sidebar-closed");

        navbarToggler.addEventListener("click", function () {
            sidebar.classList.toggle("show");
            if (mainContent.classList.contains("col-md-10") || mainContent.classList.contains("col-lg-10")) {
                mainContent.classList.remove("col-md-10", "col-lg-10");
                mainContent.classList.add("col-md-12", "col-lg-12");
            } else {
                mainContent.classList.remove("col-md-12", "col-lg-12");
                mainContent.classList.add("col-md-10", "col-lg-10");
            }
        });

});

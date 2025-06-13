document.addEventListener("DOMContentLoaded", function () {
    const aboutImage = document.querySelector(".about-image");

    if (aboutImage) {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        aboutImage.classList.add("show");
                        observer.unobserve(aboutImage); // Stop observing after first animation
                    }
                });
            },
            { root: null, rootMargin: "0px", threshold: 0.2 } // Adjusted threshold for better small screen behavior
        );

        observer.observe(aboutImage);
    }
});



const image = document.querySelector(".about-image img");

document.addEventListener("mousemove", (event) => {
    let xAxis = (window.innerWidth / 2 - event.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 50;
    
    image.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
});





document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter span");
    const speed = 100; // Speed up the counting
    let started = false;

    const startCounter = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-count");
            let count = 0;
            const increment = target / speed; // Faster increment

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    
                    // Only append "+" for values that are not 2018
                    if (target !== 2018) {
                        counter.innerText += "+"; 
                    }
                    setTimeout(updateCount, 10); // Make the update faster
                } else {
                    counter.innerText = target + (target === 2018 ? "" : "+"); // Ensure no "+" for 2018
                }
            };
            updateCount();
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                startCounter();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector(".countdown-slide"));
});



document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter span");
    const speed = 100; // Speed up the counting
    let started = false;

    const startCounter = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-count");
            let count = 0;
            const increment = target / speed; // Faster increment

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    
                    // Only append "+" for values that are not 2018
                    if (target !== 2018) {
                        counter.innerText += "+"; 
                    }
                    setTimeout(updateCount, 10); // Make the update faster
                } else {
                    counter.innerText = target + (target === 2018 ? "" : "+"); // Ensure no "+" for 2018
                }
            };
            updateCount();
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                startCounter();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector(".countdown-slide"));
});


/**scroll top */
// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {
    let scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show button when scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Scroll to top when clicked
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});





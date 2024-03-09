(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
 // Function to handle the click event on the "Try Now" buttons
function handleTryNow(event) {
    // Prevent the default action of the link
    event.preventDefault();
    
    // Open a new window with the camera feed
    openCamera();
}

// Function to open a new window with the camera feed
function openCamera() {
    // Open a new window with a blank page
    const cameraWindow = window.open('', '_blank');
    
    // Add HTML content to the new window
    cameraWindow.document.write(`
        <html>
        <head>
            <title>Your personal stylist 📷</title>
        </head>
        <body>
            <video id="cameraFeed" autoplay></video>
            <script>
                // Access the user's camera feed
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(function(stream) {
                        const video = document.getElementById('cameraFeed');
                        video.srcObject = stream;
                    })
                    .catch(function(error) {
                        console.error('Error accessing camera:', error);
                    });
            </script>
        </body>
        </html>
    `);
}


// Get references to the "Try Now" buttons
const tryNowButtons = document.querySelectorAll('[id^="tryNowBtn"]');

// Add click event listeners to each "Try Now" button
tryNowButtons.forEach(button => {
    button.addEventListener('click', handleTryNow);
});

    


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);


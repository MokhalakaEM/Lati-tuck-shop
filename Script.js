
// ========== GENERAL SITE FUNCTIONALITY ==========
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (for future responsive design)
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '☰';
    document.querySelector('nav').prepend(mobileMenuToggle);
    
    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });


    // Current year in footer
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('footer').appendChild(document.createTextNode(' | © '));
    document.querySelector('footer').appendChild(yearSpan);
});

// ========== ORDER PAGE FUNCTIONALITY ==========
if (document.querySelector('.order-form')) {
    document.addEventListener('DOMContentLoaded', function() {
        const form = 

document.querySelector('.order-form form');
        const calculateBtn = document.querySelector('.order-form button');
        
        // Price lookup object
        const prices = {
            'Cookies': 15,
            'Milk': 10,
            'Apples': 8,
            'Lip balm': 25,
            'Pain reliever': 30
        };
        
        // Create price display element
        const priceDisplay = document.createElement('div');
        priceDisplay.className = 'price-display';
        form.appendChild(priceDisplay);

        
        // Calculate button functionality
        calculateBtn.addEventListener('click', function() {
            const foodSelect = document.querySelector('select[name="foods"]');
            const selectedFood = foodSelect.value;
            
            if (selectedFood && prices[selectedFood]) {
                priceDisplay.innerHTML = `
                    <p><strong>${selectedFood}</strong>: R${prices[selectedFood]}</p>
                    <p>Total: R${prices[selectedFood]}</p>
                `;
            } else {
                priceDisplay.innerHTML = '<p>Please select a food item</p>';

            }
        });
        
        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value) {
                    field.style.borderColor = 'red';
                    isValid = false;
                } else {
                    field.style.borderColor = '#ccc';
                }
            });

            
            if (isValid) {
                alert('Order submitted successfully! We will contact you shortly.');
                form.reset();
                priceDisplay.innerHTML = '';
            } else {
                alert('Please fill in all required fields.');
            }
        });
    });
}

// ========== LOGIN PAGE FUNCTIONALITY ==========
function validateLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username !== 'Eulenda') {
            alert('Invalid username.');
            return false;
        }

        if (password.length < 6 || password.length > 20) {
            alert('Password must be between 6 and 20 characters.');
            return false;
        }

        if (password.toLowerCase() === 'password') {
            alert('Password cannot be "password".');
            return false;
        }

        if (password !== 'Eulenda') {
            alert('Incorrect password.');
            return false;
        }

        window.location.href = 'Order.html';
        return false;
    }

// ========== HOME PAGE FUNCTIONALITY ==========
if (document.querySelector('.gallery')) {
    document.addEventListener('DOMContentLoaded', function() {
        // Simple image carousel for the gallery
        const gallery = document.querySelector('.gallery');
        const images = [
            'pictures/1.jpg',

            'pictures/cookies.jpg',
            'pictures/milk.webp'
        ];
        
        let currentImage = 0;
        
        // Create navigation buttons
        const prevBtn = document.createElement('button');
        prevBtn.className = 'gallery-nav prev';
        prevBtn.innerHTML = '&lt;';
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'gallery-nav next';
        nextBtn.innerHTML = '&gt;';
        
        gallery.appendChild(prevBtn);
        gallery.appendChild(nextBtn);
        
        // Navigation functionality

        function showImage(index) {
            gallery.querySelector('img').src = images[index];
            currentImage = index;
        }
        
        prevBtn.addEventListener('click', function() {
            showImage((currentImage - 1 + images.length) % images.length);
        });
        
        nextBtn.addEventListener('click', function() {
            showImage((currentImage + 1) % images.length);
        });
        
        // Auto-rotate every 5 seconds
        setInterval(function() {
            showImage((currentImage + 1) % 

images.length);
        }, 5000);
    });

    window.location.href="HOME.html"
}



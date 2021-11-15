// focus on name input field
const nameInput = document.getElementById('name');
nameInput.focus();

// hides other job role input field unless "Other" is selected 
const roleSelect = document.getElementById('title');
const otherRoleInput = document.getElementById('other-job-role');
otherRoleInput.hidden = true;
roleSelect.addEventListener('change', () => {
    if (roleSelect.value === 'other') {
        otherRoleInput.hidden = false;
    } else {
        otherRoleInput.hidden = true;
    };
});

// updates T-shirt color options based on the theme selected
const designSelect = document.getElementById('design');
const colorSelect = document.getElementById('color');
const colorOptions = colorSelect.children;
colorSelect.disabled = true;
designSelect.addEventListener('change', (e) => {
    colorSelect.disabled = false;
    for (const options of colorOptions) {
        const theme = e.target.value;
        const option = options.getAttribute('data-theme');
        if (theme === option) {
            options.hidden = false;
            options.selected = true;
        } else {
            options.hidden = true;
            options.selected = false;
        };        
    };
});

// updates the total cost for activities selected 
const forActivities = document.getElementById('activities');
const totalTag = document.getElementById('activities-cost');
let totalCost = 0;
forActivities.addEventListener('change', (e) => {
    const activityCost = e.target.getAttribute('data-cost');
    if (e.target.checked) {
        totalCost += +activityCost;
    } else {
        totalCost -= +activityCost;
    };
    totalTag.innerHTML = `Total: $${totalCost}`;
});

// add and remove focus class from activity options 
const checkboxes = document.querySelectorAll('input[type=checkbox]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('focus', () => {
        checkbox.parentElement.classList.add('focus');
    });
    checkbox.addEventListener('blur', () => {
        checkbox.parentElement.classList.remove('focus');
    });
});

// updates payment info field based on the payment type selected
const paymentSelect = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
paypal.hidden = true;
bitcoin.hidden = true;
paymentSelect.children[1].selected = true;
paymentSelect.addEventListener('change', (e) => {
    if (e.target.value === 'bitcoin') {
        bitcoin.hidden = false;
        paypal.hidden = true;
        creditCard.hidden = true;
    } else if (e.target.value === 'paypal') {
        paypal.hidden = false;
        bitcoin.hidden = true;
        creditCard.hidden = true;
    } else {
        creditCard.hidden = false;
        paypal.hidden = true;
        bitcoin.hidden = true; 
    };
});

// form validation
const emailInput = document.getElementById('email');
const cardNum = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvvNum = document.getElementById('cvv');
const formElement = document.getElementById('form');
formElement.addEventListener('submit', (e) => {
    nameValid(nameInput);
    emailValid(emailInput);
    activitiesValid(forActivities);
    paymentValid();
    
    function nameValid(name) {
        const nameTest = /[^\s]+/;
        if (nameTest.test(name.value) === false) {
            e.preventDefault();
            name.parentElement.classList.add('not-valid');
            name.parentElement.classList.remove('valid');
            name.parentElement.lastElementChild.style.display = 'block';
        } else {
            name.parentElement.classList.remove('not-valid');
            name.parentElement.classList.add('valid');
            name.parentElement.lastElementChild.style.display = 'none';
        };
    };

    function emailValid(email) {
        const emailTest = /^[\w\.-]+@[\w\.-]+\.\w{2,4}$/;
        if (emailTest.test(email.value) === false) {
            e.preventDefault();
            email.parentElement.classList.add('not-valid');
            email.parentElement.classList.remove('valid');
            email.parentElement.lastElementChild.style.display = 'block';
        } else {
            email.parentElement.classList.remove('not-valid');
            email.parentElement.classList.add('valid');
            email.parentElement.lastElementChild.style.display = 'none';
        };
    };
    
    function activitiesValid(activities) {
        if (totalCost === 0) {
            e.preventDefault();
            activities.classList.add('not-valid');
            activities.classList.remove('valid');
            activities.lastElementChild.style.display = 'block';
        } else {
            activities.classList.remove('not-valid');
            activities.classList.add('valid');
            activities.lastElementChild.style.display = 'none';
        };
    };
       
    function paymentValid() {
        const payment = document.getElementById('payment');
        const cardTest = /^[\d]{13,16}$/;
        const zipTest = /^[\d]{5}$/;
        const cvvTest = /^[\d]{3}$/;
        if (payment.value === 'credit-card') {
            if (cardTest.test(cardNum.value) === false) {
                e.preventDefault();
                cardNum.parentElement.classList.add('not-valid');
                cardNum.parentElement.classList.remove('valid');
                cardNum.parentElement.lastElementChild.style.display = 'block';
            } else {
                cardNum.parentElement.classList.remove('not-valid');
                cardNum.parentElement.classList.add('valid');
                cardNum.parentElement.lastElementChild.style.display = 'none';
            };

            if (zipTest.test(zipCode.value) === false) {
                e.preventDefault();
                zipCode.parentElement.classList.add('not-valid');
                zipCode.parentElement.classList.remove('valid');
                zipCode.parentElement.lastElementChild.style.display = 'block';
            } else {
                zipCode.parentElement.classList.remove('not-valid');
                zipCode.parentElement.classList.add('valid');
                zipCode.parentElement.lastElementChild.style.display = 'none';
            };

            if (cvvTest.test(cvvNum.value) === false) {
                e.preventDefault();
                cvvNum.parentElement.classList.add('not-valid');
                cvvNum.parentElement.classList.remove('valid');
                cvvNum.parentElement.lastElementChild.style.display = 'block';
            } else {
                cvvNum.parentElement.classList.remove('not-valid');
                cvvNum.parentElement.classList.add('valid');
                cvvNum.parentElement.lastElementChild.style.display = 'none';
            };
        };
    };
});

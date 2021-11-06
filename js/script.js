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

// updates payment info field base on the payment type selected
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
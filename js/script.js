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

// Updates T-shirt color options based on the theme selected
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




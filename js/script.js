// focus on name input field
const nameInput = document.getElementById('name');
nameInput.focus();

// hides other job role input field unless "Other" is selected 
const otherRoleInput = document.getElementById('other-job-role');
const roleSelect = document.getElementById('title');
otherRoleInput.hidden = true;
roleSelect.addEventListener('change', () => {
    if (roleSelect.value === 'other') {
        otherRoleInput.hidden = false;
    } else {
        otherRoleInput.hidden = true;
    };
});



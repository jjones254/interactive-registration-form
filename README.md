# Web Development Techdegree - Project 07 #

## Interactive Registration Form ##

### Project Instructions ###

* [X] The "Name" field
    * Set the `focus` property to `true` on the `<input type="text">` element for the "Name" field.

* [X] "Job Role" section
    * Hide the "text field" with the `id` of "other-job-role" so it is not displayed when the form first loads.
    * Program the "Job Role" `<select>` element to listen for user changes. When a change is detected, display/hide the "text field" based on the user’s selection in the drop down menu.

* [X] "T-Shirt Info" section
    * Disable the "Color" `<select>` element.
    * Program the "Design" `<select>` element to listen for user changes.
        * The "Color" `<select>` element should be enabled.
        * The "Color" `<select>` element should display an available color.
        * The "Color" dropdown menu should display only the color options associated with the selected design.

* [X] "Register for Activities" section
    * Program the "Register for Activities" `fieldset` element to listen for user changes.
        * If an activity is checked, the total cost should increase by the value in the `data-cost` attribute of the activity’s `<input type="checkbox">` element.
        * If an activity is unchecked, the total cost should decrease by that amount.
        * The `<p>` element with the id of "activity-cost" below the activities section should update to reflect the chosen activities' total cost.

* [X] "Payment Info" section
    * Program the "I'm going to pay with" `<select>` element to listen for user changes. When a change is detected, hide all payment sections in the form’s UI except the selected one.

* [X] Form validation
    * Program the `form` element to listen for the `submit` event. When the form submission is detected, each required form field or section should be validated, or checked to ensure that they have been filled out correctly. If any of the following required fields is not valid, the form’s submission should be prevented.
        * The "Name" field cannot be blank or empty.
        * The "Email Address" field must contain a validly formatted email address. The email address does not need to be a real email address, just formatted like one.
        * The "Register for Activities" section must have at least one activity selected.
        * If and only if credit card is the selected payment method:
            * The "Card number" field must contain a 13 - 16 digit credit card number with no dashes or spaces. The value does not need to be a real credit card number.
            * The "Zip code" field must contain a 5 digit number.
            * The "CVV" field must contain a 3 digit number.

* [X] Accessibility
    * Make the focus states of the activities more obvious to all users.
        * Program all of the activity `checkbox input` elements to listen for the `focus` and `blur` events.
            * When the `focus` event is detected, add the ".focus" className to the `checkbox input`’s parent `label` element.
            * When the `blur` event is detected, remove the `.focus` className from the `label` element that possesses it.
    * Make the form validation errors obvious to all users.
        * When the user tries to submit the form, if a required form field or section is invalid:
            * Add the ‘.not-valid’ className to the parent element of the form field or section.
            * Remove the ‘.valid’ className from the parent element of the form field or section.
            * Display the `.hint` element associated with the form field or section.
        * If a required form field or section is valid:
            * Add the ‘.valid’ className to the parent element of the form field or section.
            * Remove the ‘.not-valid’ className from the parent element of the form field or section.
            * Hide the `.hint` element associated with that element.    
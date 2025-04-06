/*
Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback.

Requirements
------------
The form should contain the following elements:
    Name field.
    Email field.
    Message field. Since the message can be long, a <textarea> will be more suitable.
    Submit button
      Contains the text "Send".
      Clicking on the submit button submits the form.

There is no need to do any client-side validation on the fields. Validation will be done on the server side.

Submission API
--------------
Upon submission, POST the form data to https://www.greatfrontend.com/api/questions/contact-form with the following fields in the request body: name, email, message.

If all the form fields are correctly filled up, you will see an alert containing a success message. Congratulations!
*/
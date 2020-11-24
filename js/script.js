//sets first textfield in focus
document.getElementById('name').focus();


/*Job Role” section*/


//functon to show new textfield if other job is selected
function showOtherTextField() {
    //select jobrole and store it in variable
    const otherProfession = document.getElementById('title').value;
    //select the other job inputfield
    const newTextField = document.getElementById('otherJobTextField');
    //if other is selected, the textfield is shown
    if (otherProfession == 'other') {
        newTextField.style.display = 'block';
    //else, the textfield is blocked for other jobs
    } else {
        newTextField.style.display = 'none';
    }
};
//running the function
showOtherTextField();


/*T-Shirt Info section*/


//variables for shirtcolors and designs
const colores = document.getElementById('color');
const design = document.getElementById('design');
//creating new option, giving it text and add it to the DOM
let pleaseSelect = document.createElement('option');
pleaseSelect.textContent='Please select a T-shirt theme first';
colores.appendChild(pleaseSelect);
//hiding Select Theme Option
document.querySelector('[value="Select Theme"]').style.display = 'none';

//loop through colors to hide them all
function hideAllColors(){
    for (let i = 0; i < colores.length; i++){
        colores[i].style.display = 'none';
    }
}
//calling the function
hideAllColors();
//showing the new "select theme" option and select it
colores[6].style.display = 'block';
colores[6].selected = 'true';

//adding a eventlistener to the design selection
design.addEventListener('change' , (event) =>{
    //if js puns is selected, only js puns shirts will be displayed
    if (design.value == 'js puns'){
        colores.innerHTML = `
        <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
        <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
        <option value="gold">Gold (JS Puns shirt only)</option>
        `
    //if heart js is selected, only heart js shirts will be displayed
    } else if ( design.value == 'heart js'){
        colores.innerHTML = `
        <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
        <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
        <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>
        `
    }
});


/*Register for Activities section*/


//declaring variable to target activities
const activityCheck = document.querySelector('.activities');  
// new h3 for price, set it to 0, add it to DOM and display template literal
const priceDiv = document.createElement('h3');  
let totalPrice = 0;
activityCheck.appendChild(priceDiv);
priceDiv.innerHTML = `Total Price: $${totalPrice}`;

//adding eventlistener du activitiy buttons
activityCheck.addEventListener('change', (e) => {
//variable to target checked activities
const datesOfActivities = document.querySelectorAll('.activities input');
//looping through activities
for (i = 0; i <datesOfActivities.length; i++) {
    //if field is checked and other field with same day and time is targeted in the loop
    if (e.target.checked === true && e.target.dataset.dayAndTime === datesOfActivities[i].dataset.dayAndTime && e.target.name !== datesOfActivities[i].name){
        //conflicting activity will be disabled and grey colored
        datesOfActivities[i].disabled = true; 
        datesOfActivities[i].parentNode.style.color = 'grey'; 
    //if activity is unchecked other activities with same day and time are targeted
  } else if (e.target.checked === false && e.target.dataset.dayAndTime === datesOfActivities[i].dataset.dayAndTime){
        //same day activities will active and white again
        datesOfActivities[i].disabled = false;
        datesOfActivities[i].parentNode.style.color = 'white';
    }
}
//variable to store the price, using parseint to convert string to number
const activityPrice = parseInt(e.target.dataset.cost); 
    //if an activity is checked, the price of the activity is added to the total price and will be displayed
    if (e.target.checked) { 
      totalPrice += activityPrice; 
      priceDiv.innerHTML = `Total Price: $${totalPrice}`;
    //if an activity is unchecked, the price of the activity is removed from the total price and will be displayed
  } else if (e.target.checked === false) { 
      totalPrice -= activityPrice; 
      priceDiv.innerHTML = `Total Price: $${totalPrice}`; 
    }
});


/*Payment Info section*/

//creating variables for payment methods
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

//hide select method
document.querySelector("[value='select method']").hidden = true; 
//set credit card to default method
document.querySelector("[value='credit card']").selected = true;
// hiding bitcoin and paypal
paypal.style.display = "none";
bitcoin.style.display = "none";

//adding eventlistener to paymentarea
payment.addEventListener('change', (e) => {
    //showing paypal, hide others
    if (e.target.value == 'paypal') {
        paypal.style.display = 'block'; 
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
    //showing btc, hide others
     } else if (e.target.value == 'bitcoin') {
        bitcoin.style.display = 'block';
        paypal.style.display = 'none';
        creditCard.style.display = 'none';
    //showing CC, hide others
     } else if (e.target.value == 'credit card') {
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
     }
});


/*              --Form validation--
Errors will display different messages and red, highlighted borders
to spot errors immediately
*/

//name 

//declaring name var, creating error, adding it to DOM, hiding it
const name = document.getElementById("name");
const nameError = document.createElement('p'); 
name.previousElementSibling.appendChild(nameError);
nameError.style.display = 'none';
 
//creating validation function
function nameValidation(){
    //if input is empty, display errors
    if (name.value == ''){   
        nameError.innerHTML = "Name field can't be blank!";
        nameError.style.display = 'block';    
        nameError.style.color = 'red'; 
        name.style.borderColor = 'red';
        return false
    //else show success
    } else {
        name.style.borderColor = 'green'
        nameError.style.display = 'block';
        nameError.innerHTML = "&#10004";
        nameError.style.color = 'green';
        return true
    }
}

//email realtime validation

//declaring mail var, creating error, adding it to DOM, hiding it
const mail = document.getElementById("mail");
const mailError = document.createElement('p'); 
mail.previousElementSibling.appendChild(mailError);
mailError.style.display = 'none';

//add eventlistener that reacts to inputs
mail.addEventListener('input', (event) => {
    //if the input is empty, show errors
    if (mail.value == ''){   
        mailError.innerHTML = "Email field can't be blank!";
        mailError.style.display = 'block';    
        mailError.style.color = 'red'; 
        mail.style.borderColor = 'red';
    //if the input does not match the email regex, show errors
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail.value) == false) {
        mailError.innerHTML = "Please add a valid email address!";
        mailError.style.display = 'block';    
        mailError.style.color = 'red'; 
        mail.style.borderColor = 'red';
    //if the input does match the email regex, show success    
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail.value) == true) {
        mail.style.borderColor = 'green'
        mailError.style.display = 'block';
        mailError.innerHTML = "&#10004";
        mailError.style.color = 'green'; 
    }
})

//email validation

//creating validation function, similar to above, other error if input was never used, realtime validation does most of the job
function mailValidation(){
    if (mail.value.length == 0){  
        mailError.innerHTML = "You forgot to add an email!";
        mailError.style.display = 'block';    
        mailError.style.color = 'red'; 
        mail.style.borderColor = 'red'; 
        return false
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail.value) == false) {
        return false
    }else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail.value) == true) {
        return true
}}


//priceDiv line 77, creating error, adding it to DOM, hiding it
const activityError = document.createElement('p'); 
priceDiv.previousElementSibling.appendChild(activityError);
activityError.style.display = 'none';

//creating validation function with activated activities variable
function activityValidation(){
    const activatedActivities = document.querySelectorAll(" [type='checkbox']:checked" );
    // if no activity is selected, show erros
    if (activatedActivities.length == 0){   
        activityError.innerHTML = "Choose at least one activity!";
        activityError.style.display = 'block';    
        activityError.style.color = 'red'; 
        activityCheck.style.borderColor = 'red';
        return false
        //when at least one activity is selected show success
        } else if (activatedActivities.length > 0) {
        activityError.innerHTML = "&#10004";
        activityError.style.display = 'block';    
        activityError.style.color = 'green';
        return true
        }
    }


//Credit Card Number

//declaring cc var, creating error, adding it to DOM, hiding it
const ccNumero = document.getElementById('cc-num');    
const ccError = document.createElement('p'); 
ccNumero.previousElementSibling.appendChild(ccError);
ccError.style.display = 'none';

//creating validation function
function creditCardNumberValidation(){
    //if input is empty show errors
    if (ccNumero.value.length == 0){  
        ccError.innerHTML = "Please enter a credit card number!";
        ccError.style.display = 'block';    
        ccError.style.color = 'red'; 
        ccNumero.style.borderColor = 'red'; 
        return false
    //if input does not match regex, show errors
    } else if (/^\d{13,16}$/.test(ccNumero.value) == false){
        ccError.innerHTML = "Please enter a number that is between 13 and 16 digits long!";
        ccError.style.display = 'block';    
        ccError.style.color = 'red'; 
        ccNumero.style.borderColor = 'red'; 
        return false
    //if input does match regex, show success
    }else if (/^\d{13,16}$/.test(ccNumero.value) == true){
        ccNumero.style.borderColor = 'green'; 
        ccError.style.display = 'none';   
        // ccError.innerHTML = "&#10004";  <-doesn´t look good
        // ccError.style.color = 'green';
        return true
    }
}


//Zip Code


//declaring zip var, creating error, adding it to DOM, hiding it
const zipNumero = document.getElementById('zip');    
const zipError = document.createElement('p'); 
zipNumero.previousElementSibling.appendChild(zipError);
zipError.style.display = 'none';

//creating validation function
function zipNumberValidation(){
    //if input is empty show errors
    if (zipNumero.value.length == 0){  
        zipError.innerHTML = "Please enter a zip number!";
        zipError.style.display = 'block';    
        zipError.style.color = 'red'; 
        zipNumero.style.borderColor = 'red'; 
        return false
    //if input does not match regex, show errors
    } else if (/^\d{5}$/.test(zipNumero.value) == false) {
        zipError.innerHTML = "Please enter a 5 digit zip number!";
        zipError.style.display = 'block';    
        zipError.style.color = 'red'; 
        zipNumero.style.borderColor = 'red'; 
        return false
    //if input does match regex, show success
    }else if (/^\d{5}$/.test(zipNumero.value) == true){
        zipNumero.style.borderColor = 'green'; 
        zipError.style.display = 'none';
        return true
    }
}


//cvv Code


//declaring cvv var, creating error, adding it to DOM, hiding it
const cvvNumero = document.getElementById('cvv');    
const cvvError = document.createElement('p'); 
cvvNumero.previousElementSibling.appendChild(cvvError);
cvvError.style.display = 'none';

//creating validation function
function cvvValidation(){
    if (cvvNumero.value.length == 0){  
        cvvError.innerHTML = "Please enter a cvv number!";
        cvvError.style.display = 'block';    
        cvvError.style.color = 'red'; 
        cvvNumero.style.borderColor = 'red'; 
        return false
    //if input is empty show errors  
    } else if (/^\d{3}$/.test(cvvNumero.value) == false) {
        cvvError.innerHTML = "Please enter a 3 digit cvv number!";
        cvvError.style.display = 'block';    
        cvvError.style.color = 'red'; 
        cvvNumero.style.borderColor = 'red'; 
        return false
    //if input does match regex, show success
    }else if (/^\d{3}$/.test(cvvNumero.value) == true){
        cvvNumero.style.borderColor = 'green'; 
        cvvError.style.display = 'none';
        return true
    }
}



/*adding eventlistener to submit the form, it checks if the validation
functions above all return true, if the credit card is selected, it
checks the three credit card validation fnctions*/
const submitButton = document.querySelector('form');
submitButton.addEventListener('submit',(e) => {
    if (nameValidation() == false ){
        e.preventDefault();}
    if (mailValidation() == false ){
        e.preventDefault();}
    if (activityValidation() == false ){
        e.preventDefault();}
    if (payment.value === 'credit card') {
        if (creditCardNumberValidation() == false ){
            e.preventDefault();}
        if (zipNumberValidation() == false ){
            e.preventDefault();}  
        if (cvvValidation() == false ){
            e.preventDefault();}     } 
})
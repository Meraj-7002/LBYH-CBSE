function subscribe(){
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value;

    console.log(`Subscribed with email :- ${email}`)
    emailInput.value = ''
}
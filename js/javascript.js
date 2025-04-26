
//So, below is an event listener for all "modal-button" buttons that executes a simple function.
//it fetches the ID from the dataset of the button and looks up the table to fetch the title, cooktime, etc.
//dynamically based on the ID of the recipe
// then it updates the values on the modal pop-up and lastly makes it visible. 

var buttons = document.querySelectorAll(".modal-button");

for(var i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", DisplayRecipe);
};

//This is an event listener to make the pop-up invisible.
document.getElementById("closepopup").addEventListener("click", HideRecipe);


function DisplayRecipe(event) {

        const recipes  = [
            {id: 0, title: "Deep Dish Skillet Pizza", cooktime: "20-30", servings: 6, level: "Medium" },
            {id: 1, title: "Saucy Tortelloni Parm", cooktime: "30-40", servings: 3, level: "Easy" },
            {id: 2, title: "Mediterranean Chicken Thights", cooktime: "20-30", servings: 4, level: "Easy" },
            {id: 3, title: "Crispy Pork Katsu & Rice", cooktime: "20-30", servings: 2, level: "Medium" },
            {id: 4, title: "Cheddar Cheese Biscuits", cooktime: "40-50", servings: 6, level: "Medium" },
            {id: 5, title: "Baked Cod & Scalloped Potatoes", cooktime: "30-40", servings: 3, level: "Easy" },
            {id: 6, title: "S'mores Cake", cooktime: "50-60", servings: 4, level: "Medium" }
        ]
    
      var RecipeID = event.currentTarget.dataset.id;
      var currentrecipe = recipes.find(result => result.id == RecipeID)
    
      document.getElementById("title").innerHTML = currentrecipe.title;
      document.getElementById("cooktime").innerHTML = currentrecipe.cooktime + " minutes";
      document.getElementById("servings").innerHTML = currentrecipe.servings;
      document.getElementById("level").innerHTML = currentrecipe.level;

      document.getElementById("recipeModalOne").style.display = "block";

     setTimeout(HideRecipe, 10000);

     //closes the recipe automatically after 10 seconds
    
}; 


//function to make the popup invisible

function HideRecipe() {document.getElementById("recipeModalOne").style.display = "none"; }

//email validation

document.getElementById("contactForm").addEventListener("submit", function(event){

    //overwrites the default browser refresh

    event.preventDefault();


    //variables to validate that each field is filled out

    const FN = document.getElementById("firstName").value;
    const LN = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const msg = document.getElementById("message").value;

    //checks for a valid email format

    const emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //Message to send back

    const valMsg = document.getElementById("validateMsg");
    if(!FN || !LS ||  !email || !phone || !msg){
        valMsg.innerHTML = '<p style="color:red;">Please fill out all empty fields</P>'
    } else if (!emailPattern.test(email)){
        valMsg.innerHTML = '<p style="color:red;">Please enter a valid email</P>'
    } else {
        //if all fields are filled out and email passes check
        '<p style="color:red;">Thank you for submitting!</P>'
    }

    const formData = {
        firstName: FN,
        lastName: LN,
        email: email,
        phone: phone,
        message: message,
        subscribe: document.getElementById("subscription").checked
    };

    console.log(JSON.stringify(formData))
})

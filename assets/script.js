var checkoutBtnEl = document.querySelector('.checkout-btn');
var checkoutCloseEl = document.querySelector('.btn-close');

////nav bar
 //location
  //**assign to local storage for cart
 //name of site
 //cart (icon top right ish.. or link)
 
//body
 //products (look into using a bootstrap form )
  // button that adds product to cart.
  //description of product
  //**two rows of cards. 4-6 items (more if needed, not using a form)
//**store items in storage


//API - link https://bestbuyapis.github.io/api-documentation/#response-format

//variables going to HTML tags
var cardBox = document.getElementById('.all-cards');

var shoppingCart = [];
var product;

//function start(){}
  //call other functions....

//function finalizePerchase(){
    //display thank you/continue shopping.

//};
function generateCards(){
    var sectionContainer = document.createElement("section")
    sectionContainer.setAttribute("class", "all-cards")
    
    

    


   // <div class="card1">
           // <img src="" alt="" ></img>
          //  <h2>Title of Product</h2>
         //   <p>Description of Product</p>
         //   <button>Buy Product</button>
        //</div>
}
generateCards();


// ** TODO ** when we close form, get rid of values entered
// event listener to close the checkout form
checkoutCloseEl.addEventListener('click', function() {
  document.getElementById('card-form').style.display = "none";
});

// event listener to pull up form when clicking checkout button
checkoutBtnEl.addEventListener('click', function() {
  document.getElementById("card-form").style.display = "block";
});


//function weatherAPI(){
    //weather API info
//}


//submitToCartBtn.eventlistener('click',  function(){ //sending to page 2
  //put into variables to local storage to pass to second page
  //sent to second HTML "href= URL or second page"
  //dynamically gen page(depending on HTML)
    //display cart items (from local storage)
    //display form for customer shipping/payment info 
    //call weatherAPI()  **possibly pass through info from form to select data from API;
    //call function to submitBtn() to display display "thank you for perchase" AND potential "home screen"/"continue shopping" button/link
    //finalizePerchase();



  //})
  //addToCartBtn.eventlistener ('click', function(){
    //are things in the cart?
    //push item into an array
    //add item to cart. (shoppingCart and product var.. maybe...)
    


  //} );

function validate() {

    var category = document.getElementById("category");
    document.getElementById("catvalue").innerHTML = category.options[category.selectedIndex].value;
    document.getElementById("bookvalue").innerHTML = document.getElementById("book").value;
    document.getElementById("emailvalue").innerHTML = document.getElementById("email").value;
    document.getElementById("authornamevalue").innerHTML = document.getElementById("authorName").value;
    document.getElementById("publishedvalue").innerHTML = document.getElementById("publish").value;
    document.getElementById("pricevalue").innerHTML = document.getElementById("price").value;
    document.getElementById("div-class").style.display = "none";
    document.getElementById("div-class2").style.display = "block";

}
function validateFeild() {
    //book
    var regx = /^[a-z A-Z]+$/;
    var book = document.getElementById("book").value;
    if (regx.test(book) == true) {
        document.getElementById("book-valid").style.color = "green";;
        document.getElementById("book-valid").style.display = "inline";
        document.getElementById("book-invalid").style.display = "none";
    } else {
        document.getElementById("book-invalid").style.color = "red";
        document.getElementById("book-invalid").style.display = "inline";
        document.getElementById("book-valid").style.display = "none";
    }

    //email
    var regxemail = /^([a-z 0-9]+)@([a-z]+)\.([a-z]{2,20})$/;
    var email = document.getElementById("email").value;
    if (regxemail.test(email) == true) {
        document.getElementById("email-valid").style.color = "green";;
        document.getElementById("email-valid").style.display = "inline";
        document.getElementById("email-invalid").style.display = "none";
    } else {
        document.getElementById("email-invalid").style.color = "red";
        document.getElementById("email-invalid").style.display = "inline";
        document.getElementById("email-valid").style.display = "none";
    }

    //Author Name
    var regxauthor = /^[a-z A-Z \.]+$/;
    var author = document.getElementById("authorName").value;
    if (regxauthor.test(author) == true) {
        document.getElementById("author-valid").style.color = "green";;
        document.getElementById("author-valid").style.display = "inline";
        document.getElementById("author-invalid").style.display = "none";
    } else {
        document.getElementById("author-invalid").style.color = "red";
        document.getElementById("author-invalid").style.display = "inline";
        document.getElementById("author-valid").style.display = "none";
    }

    //Published
    var regxPublish = /^[\d]{4}$/;
    var publish = document.getElementById("publish").value;
    if (regxPublish.test(publish) == true) {
        document.getElementById("publish-valid").style.color = "green";;
        document.getElementById("publish-valid").style.display = "inline";
        document.getElementById("publish-invalid").style.display = "none";
    } else {
        document.getElementById("publish-invalid").style.color = "red";
        document.getElementById("publish-invalid").style.display = "inline";
        document.getElementById("publish-valid").style.display = "none";
    }

    //price
    var regxprice = /^[0-9]+$/;
    var price = document.getElementById("price").value;
    if (regxprice.test(price) == true) {
        document.getElementById("price-valid").style.color = "green";;
        document.getElementById("price-valid").style.display = "inline";
        document.getElementById("price-invalid").style.display = "none";
    } else {
        document.getElementById("price-invalid").style.color = "red";
        document.getElementById("price-invalid").style.display = "inline";
        document.getElementById("price-valid").style.display = "none";
    }

}



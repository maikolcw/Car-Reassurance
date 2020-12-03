//-----------------------------------------------------------------------
// This file contains a collection of demo functions used for comp1800
//
// Uncomment/comment them as needed. 
//-----------------------------------------------------------------------


//-----------------------------------------------------
// This function adds a listener to the Renewal form
// When form is submitted, the values are extracted
// and written into the database
//------------------------------------------------------
function addListener() {
    document.getElementById("myform").addEventListener("submit", function (e) {
        // disable default form handling
        e.preventDefault();

        // console.log("Gello");

        // grab what user typed
        var name = document.getElementById("name").value;
        var lastname = document.getElementById("lastname").value;
        var address = document.getElementById("address").value;
        var phonenumber = document.getElementById("phonenumber").value;
        var driverlicense = document.getElementById("driverlicense").value;
        var carmake = document.getElementById("carmake").value;
        var carmodel = document.getElementById("carmodel").value;
        var caryear = document.getElementById("caryear").value;
        var datesub = document.getElementById("datesub").value;

        // get pointers to the checkboxes
        var check1 = document.getElementById("comprehensive");
        var check2 = document.getElementById("collision");
        var check3 = document.getElementById("ethirdparty");
        var check4 = document.getElementById("eunderinsuredmotor");
        var check5 = document.getElementById("lossofuse");
        var check6 = document.getElementById("luxury");
        var check7 = document.getElementById("specifiedperils");
        var check8 = document.getElementById("rentalvehicle");
        var check9 = document.getElementById("newvehicleprotection");
        var check10 = document.getElementById("optionalinsurance");
        var check11 = document.getElementById("specializedcoverage");

        console.log(name);
        console.log(lastname);
        console.log(check1.checked);
        console.log(check2.checked);

        // write the values into new database document
        db.collection("Renewals")
            .add({ //using the add() function, auto-generated doc ID
                "name": name,
                "lastname": lastname,
                "address": address,
                "phonenumber": phonenumber,
                "driverlicense": driverlicense,
                "carmake": carmake,
                "carmodel": carmodel,
                "caryear": caryear,
                "datesubmitted": datesub,
                "comprehensive": check1.checked, //boolean value
                "collision": check2.checked, //true if checked
                "ethirdparty": check3.checked, //true if checked
                "eunderinsuredmotor": check4.checked, //true if checked
                "lossofuse": check5.checked, //true if checked
                "luxury": check6.checked, //true if checked
                "specifiedperils": check7.checked, //true if checked
                "rentalvehicle": check8.checked, //true if checked
                "newvehicleprotection": check9.checked, //true if checked
                "optionalinsurance": check10.checked, //true if checked
                "specializedcoverage": check11.checked //true if checked
            })
            .then(function() {
                window.location.href="SuccessPage.html";
            }) 
    })
}
addListener();



//-----------------------------------------------------
// This function adds a listener to the brokers form
// When form is submitted, the values are extracted
// and written into the database
//------------------------------------------------------
function addListener2() {
    document.getElementById("brokerform").addEventListener("submit", function (e) {
        // disable default form handling
        e.preventDefault();


        // grab what user typed
        var bname = document.getElementById("bname").value;
        var blastname = document.getElementById("blastname").value;
        var brokerlicense = document.getElementById("brokerlicense").value;
        var company = document.getElementById("company").value;
        var bcity = document.getElementById("bcity").value;
        var bprovince = document.getElementById("bprovince").value;

        // write the values into new database document
        db.collection("Brokers")
            .add({ //using the add() function, auto-generated doc ID
                "Broker Name": bname,
                "Broker Last Name": blastname,
                "Broker License": brokerlicense,
                "Company": company,
                "Broker City": bcity,
                "Broker Province": bprovince
            })
            .then(function() {
                window.location.href="SuccessPage.html";
            })      
    })
}
addListener2();

function addListener3() {
    document.getElementById("brokerformb").addEventListener("submit", function (e) {
        // disable default form handling
        e.preventDefault();


        // grab what user typed
        var bname = document.getElementById("bname").value;
        var blastname = document.getElementById("blastname").value;
        var brokerlicense = document.getElementById("brokerlicense").value;
        var company = document.getElementById("company").value;
        var bcity = document.getElementById("bcity").value;
        var bprovince = document.getElementById("bprovince").value;

        // write the values into new database document
        db.collection("Brokers")
            .add({ //using the add() function, auto-generated doc ID
                "Broker Name": bname,
                "Broker Last Name": blastname,
                "Broker License": brokerlicense,
                "Company": company,
                "Broker City": bcity,
                "Broker Province": bprovince
            })
            .then(function() {
                window.location.href="SuccessPageBroker.html";
            })      
    })
}
addListener3();


//--------------------------------------------------------
// This function reads the "shops" collection from database
// Then cycles thru the collection to
//   - create a DOM element
//   - put name of shop inside DOM
//   - attach this DOM to the display area for shops (id = "shops")
//---------------------------------------------------------
function displayShops() {
    db.collection("shops") //go to the shops collection
        .get() //get whole collection
        .then(function (snap) {
            snap.forEach(function (doc) { //cycle thru collection to get docs

                var n = doc.data().name; //extract the name field
                //console.log (n);

                //create a new div, with name field, attach it to the right slot
                item = document.createElement("div");
                item.innerText = n;
                $("#shops").append(item);

            });
        })
}



//---------------------------------------------------
// This function checks to see if the user is sign in.
// If so, then you can go to the "users" collection,
// look for this person's document id (which would be authentication 
// object ("user")'s uid, and get that document.
// Now you can grab the name, or give a personalized greeting :)
//----------------------------------------------------
function getUser() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("user is signed in");
            db.collection("users")
                .doc(user.uid)
                .get()
                .then(function (doc) {
                    const dataFN = doc.data().name;
                    const dataLN = doc.data()["last name"];
                    const dataA = doc.data().address;
                    const dataPN = doc.data()["phone number"];
                    const dataDL = doc.data()["driver's license"];
                    console.log("Is Admin", doc.data().isAdmin);

                    // console.log(n);
                    $("#username").text(dataFN);
                    $("#name").val(dataFN);
                    $("#lastname").val(dataLN);
                    $("#bname").val(dataFN);
                    $("#blastname").val(dataLN);
                    $("#address").val(dataA);
                    $("#phonenumber").val(dataPN);
                    $("#driverlicense").val(dataDL);
                })
        } else {
            console.log("no user is signed in");
        }
    })
}
getUser();

//---------------------------------------------------------------
// This function will check if the user is signed in.
// If yes, then 
//     1) the "login" text will change to "logout"
//     2) and, the href will go to "index.html" where any logged in 
//        users will be logged out.
//----------------------------------------------------------------
function disableLoginLink() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("change it to logout");
            document.getElementById("loginlink").href = "index.html";
            document.getElementById("loginlink").innerHTML = "Logout";
        }
    })
}
disableLoginLink();

//------------------------------------------------
// Call this function at the begining of index.html
// to logout any users before you do anything else
//-------------------------------------------------
function logout() {
    console.log("logging out user");
    FirebaseAuth.getInstance().signOut();
}

//--------------------------------------------------------------------
// This function is used to change the username and email of the logged in user
// Use authentication SDK functions to change the authenticated user
// 
// Input param:  name, email, address strings
//---------------------------------------------------------------------
function updateUserProfileAuth(name, email, address) {
    firebase.auth().onAuthStateChanged(function (user) {
        console.log("user is signed in: " + user.uid);
        console.log("old display name: " + user.displayName);
        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log("updated authenticated user profile");
            console.log("new display name: " + user.displayName);
            updateUserProfileFirestore(name, email, address);
        }).catch(function (error) {
            console.log("authenticated user profile update failed");
        })
    })
}
//updateUserProfileAuth("Bill Gates", "bill@bill.com", "Kingsway");

function updateUserProfileFirestore(name, elecmail, address) {
    firebase.auth().onAuthStateChanged(function (user) {
        console.log("user is signed in: " + user.uid);
        db.collection("users").doc(user.uid)
            .update({
                "name": name,
                "email": elecmail,
                "address": address
            }).then(function () {
                console.log("updated users database");
            }).catch(function (error) {
                console.log("cannot update users database");
            })
    })
}
// Displays some information on the console.
function getUserProfile() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {
            console.log(user);
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            console.log(name);
            console.log(email);
            console.log(photoUrl);
            console.log(emailVerified);
            console.log(uid);
        }
    })
}
//getUserProfile();

//-----------------------------------------------------------------------
// Assume the HTML has a text input for user to enter location,
// and a "add" button
// This function will listen to the "add" button, then grab the information
// and save it to the database for the authenticated user.
//----------------------------------------------------------------------
function getLocationAndSave() {
    document.getElemenyById("addButton").addEventListener('click', function () {
        var name = document.getElementById("name").value;
        var lastname = document.getElementById("lastname").value;
        var address = document.getElementById("address").value;
        var phonenumber = document.getElementById("phonenumber").value;
        var driverlicense = document.getElementById("driverlicense").value;
        console.log(name);
        console.log(lastname);
        console.log(address);
        console.log(phonenumber);
        console.log(driverlicense);

        // if the current user is signed in, then save it to their document
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid)
                .update({
                    "name": name,
                    "lastname": lastname,
                    "address": address,
                    "phonenumber": phonenumber,
                    "driverlicense": driverlicense
                })
        })
    })
}

//This function gets a list of all the companies that have
//signed up with our app, sorts it by name in ascending order,
// then displays it in the main page.
// This is a read function that sorts the query.
function getCompanies() {
    db.collection("Companies").orderBy('name')
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var m = doc.data().name;
                console.log(m);
                var d1 = $("#companyList").append("<div width: 18rem;'>")
                // var i = d1.append("<img class='card-img-top' src='...' alt='Card image cap'>");
                var d2 = d1.append("<div class='card-body'>")
                d2.append("<div id='companyItems'>" + m + "</div>");
            })
        })
}

// This function updates the information in the database when
// the user hits the "Update Profile" button on the user profile page.
// This is a write function
function submitProfile() {
    document.getElementById("submitC").addEventListener("submit", function (e) {
        // disable default form handling
        e.preventDefault();

        console.log("Gello");

        // grab what user typed
        var profN = document.getElementById("profileFName").value;
        var profLN = document.getElementById("profileLName").value;
        var profA = document.getElementById("profileAddress").value;
        var profE = document.getElementById("profileEmail").value;
        var profPN = document.getElementById("profilePN").value;
        var profDL = document.getElementById("profileDL").value;


        function updateUserProfileFirestore() {
            firebase.auth().onAuthStateChanged(function (user) {
                console.log("user is signed in: " + user.uid);
                db.collection("users").doc(user.uid)
                    .update({
                        "name": profN,
                        "last name": profLN,
                        "address": profDL,
                        "phone number": profPN,
                        "driver's license": profDL
                    }).then(function () {
                        console.log("updated users database");
                    }).catch(function (error) {
                        console.log("cannot update users database");
                    })
            })
        }
        updateUserProfileFirestore();
        

    })
}
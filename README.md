# Car-Reassurance
An application to help renew car insurance

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

Anton Villadolid worked on the profile.html page~
Maikol Chow Wang worked on the index.html page~
Misam Ibrahimi added main.html

--- as of Deceber 2020 --

Anton Villadolid worked on The CSS and some functions.
Maikol Chow Wang worked on the html and some functions.
Misam Ibrahami worked on the research needed for the application.

Not all functions are inside the scripts (User Profile.html) to make it easier to search for (i.e, if we are absoultely sure the function is only relevant in that specific page).

.background and .bottomPadding are empty divs that implement CSS.

.background incorporates a background that remains static on the screen behind every element.

.bottomPadding is a safe way to globally add extra space to the bottom of the page.

-------
Pages:
-------

Broker.html - Contains the broker form for brokers to fill in. 
- Writes data to the database

CoverageOptions.hmtl - Contains the information page about the available Coverage Options.

FAQ.html - Page with Frequently Asked Questions.

index.html - The first page the user meets. You click login to get to the main page.

login.html - Page where you log in.

main.html - Our website's main page. Includes two buttons that lead to the broker form(Broker.html) and the car insurance renewal form(Renewal.html).
- Gets broker company names and sorts by name and displays on bottom of main

Renewal.html - Contains the renewal form. 
- Writes data to the database

SuccessPage.html - This is the page you are directed to after filling in a renewal form.

SuccessPageBroker.html - This is the alternate succes page you are directed to after filling in a broker form.

User Profile.html - This page displays your information and allows you to change them. However, email cannot be changed. 
- Reads the data from database and displays it in the fields. 
- Can also update data in the fields to database when button is pressed


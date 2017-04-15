# BankingApplication

Final Year Project
===================

**Students: Shane Gleeson, Alan Niemiec, Dara Starr**<br>
**Student no: G00311793, G00313177, G00209787**<br>
**Course: Software Development**<br>
**Module: Applied Project and Minor Dissertation**<br>
**Galway-Mayo Institute of Technology**

Banking Application <br>
===================
This final year project is a banking application for multiple devices based on the current trends in the Finance-Technoloy sector.<br>
We have chosen this type of application as it offers a steep learning curve suitable for a level 8 final year project, utilising many different frameworks and
programming languages.<br> Since this kind of application has to offer a high degree of security we have felt like it would be a interesting topic to pursue. <br>

Technology Overview <br>
===================
### Front End <br>
* Ionic Framework - The application is packaged as an Ionic 1 project, allowing for it to be exported to many different devices. <br>
Ionic has many useful options allowing us to create a user friendly GUI and then mock it on all three of our targeted devices: browser, Android and IOS.<br>
We have originally planned to use Ionic 2 but after some issues decided to use the more tested first version.<br>
The other resources described in this section are mainly connected to this central piece of software.<br>
* HTML language - HTML is used as a part of the Ionic framework to design the backbone of the pages.<br> We use templating and Ionic to create versatile web pages.<br>
* AngularJS language - This layer is used to control the behaviour of the web pages from the creation of the app all the way to the controllers and routes. It also calls on our hosted API, through HTTP requests to query the database for the required data.<br>
* Auth0 Framework - We have configured a login as a service framework to handle the user sign in.<br> This is a addon that we have applied on the Heroku side of the application giving us a huge amount of customisation options, such as user creation and editing, user location, a dedicated database for the users and much more. We only had a limited time to interact with and there is still a lot of options that have not been implemented in our application.<br>
<br>
<br>

### Architecture <br>
![Project Architecture](https://cloud.githubusercontent.com/assets/8806515/25058260/6a9c0d68-216f-11e7-9f4f-8ce77f293d76.png)

### Report <br>
For a full and comprehensive outline of what we have done in our mock GMIT Banking Application you can read our full report  [GMIT Cross-Platform mobile Banking Application.](https://github.com/sinderpl/BankingApplication/blob/master/Final%20Year%20Project%20Dissertation/Final%20Year%20Project%20Dissertation.pdf) 

### Middleware - API <br>
* NodeJS language - From our research Ionic cannot be connected directly to MongoDB and most people use SQL databases as their data layer.<br> We have decided to create a dedicated REST API server hosted on Heroku which can take in requests to the database through HTTP.<br>
<br>
<br>

### Backend <br>
#### Database <br>
* MongoDB database - This database has also been provisioned from Heroku, it stores user info and account data. It can be reached through the REST API we created.<br>
<br>
<br>

#### Hosting <br>
* Heroku hosting - Heroku hosts our REST API server and provisions and connects the Auth0 and MongoDB.<br> It is connected to our REST API branch of the project, building and hosting the newest version whenever we push to the GIT repository.<br>
* Auth0 hosting - Auth0 provides its own database for the user login data as well as providing a interface for database modification.<br>
* MongoDB hosting - MongoDB provides its own limited (50 MB) sandbox server space for us to store our data on.<br>
<br>
<br>

### Additional Resources <br>
* Google Maps API - Our app features a 'Location' page which utilises the Google Maps API on which we have marked the location of our bank.<br>


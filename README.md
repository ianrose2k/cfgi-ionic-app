# CFGI

CFGI Mobile App. The purpose of this project is to help Community For Global Innovation (CFGI) create a mobile application that helps international students stay in the United States through financial assistance and inexpensive legal consultation. This was prototyped, developed, and implemented from October 2021 - March 2022 for the Senior Design class at UCI.

- https://cfgi.world/

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

### Installing<br/>
Clone the repository<br/>
We built our app using Ionic. Make sure your machine has Ionic installed. <br/>
Run 'expo start' in the root directory, from terminal to start the project. <br/>
Install dependencies that the project requires.<br/><br/>


### Deployment

### Built With

- Ionic Framework using AngularJS

### Versioning
<br/>
Version 0.01 - March 18 2022 <br/><br/>

### Authors
Ionic Application development (October 2021 - March 2022):<br>
Ian Rose<br/>
Sydney Gibbs<br/>
Armin Abaye<br/>
Gabby Tom<br/>
Amy Steinmetz<br/>
<br/>
Figma Protoype and previous React Native Application development (January - June 2021):<br/>
Zongyao Wang <br />
Ashley Zhou <br />
Victoria Rong <br />
Stephanie Kim <br />
Archita Bathole <br />
Will Gunadi <br />

#### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

### Acknowledgments

We would like to thank Professor Matthew Bietz and Yang Yu for their guidance during development of our app. We would also like to thank Seth Finberg, Sophie Alcorn, and David Val Verde Vargas for believing in us and shaping our vision of the app.

## Overview of the App

The following sections will describe the flow of the app from both the front-end and back-end users perspective, what each of the components do, and future features that we would like implemented in the future.

### Navigation (Tablinks)

The navigation bar at the bottom of the screen is the main way the user accesses the major components, which are Home, Jobs, Legal, Financial, and Donate. Each major component, along with its sub-components, is placed under its respective stack navigator, which defines the order that the components can be navigated to. For example, the Home component and the Profile component are placed under HomeStack because when the user selects the "Home" tab in the bottom tab navigator, they are taken to the HomeStack, which sets HomeScreen as the main component, and because the user can only access their Profile via the HomeScreen. It's easier to see this hierarchial structure by reading through the code than reading this document. In every screen, there will always be a header that will display the logo, a back button, and a logout symbol. The back button will take the user to the previous component they were on. <br/>

Beyond including new components and subsequently adding new or changing each of the stack navigators, there isn't much more to add to the navigation.

##### Code Sources

- Ionicons: [https://ionic.io/ionicons]

### Login, Signup, and Password Resetting ("sign-up","login","forgot-password")

First time users would navigate to the sign up page by clicking on the “sign up” link on the login screen, where they would create their account by inputting their first and last name, their email address, their desired username and password to sign up. The backend for this feature is not currently implemented, but the screens are designed and navigatable. Version 1 will not include the sign up feature. To implement this feature, change the redirect path from "home" to "login" and uncomment the code for the sign out button on the tablinks header.

### Financial Aid

Users can apply for emergency financial aid for things such as emergency food, housing, travel expenses, etc. This aid can be anywhere from $200 to $1000. In the current iteration, assuming that they've read and agreed to the terms and conditions, users must fill out every field of the application and fully justify why they need the expenses. Once they submit their application, their information is saved to a database, where the CFGI admins can review their answers. If the CFGI admins accept their answers, they will reach out the users via email and ask the users for financial documents that support their justification. Assuming that the users have legitimate proof and the admins have accepted it, they will receive the aid. <br/>
The Financial Aid is made of 2 main pages:

- request-aid - The landing page of the financial aid application, which briefly describes what financial aid is for and links the user to both the actual application and the terms and conditions.
- apply-aid - The actual application itself, this will have its own description down below.

#### apply-aid

This component is where the user will fill out their financial aid application. It's a very long document, but it essentially asks the user for personal information, such as their name, email, and their current visa status, and why they need the aid money.  <br/>

Future features this feature could or should have, from most to least important:

- The ability to save the current application so the user can resume their progress
- The view of the application's current status
- The ability to upload an unlimited number of files to the database, specifically financial documents, and for CFGI admins to view the files so the approval process is automated as much as possible
- A measure to prevent users from spamming and abusing the financial aid application, maybe block them until their status is accepted or rejected?
- An email confirmation that is sent once the user submits their application
- Have a calendar picker that picks today's date to track the application <br/>

These are just a few ideas, feel free to add more as you further develop the app. <br/>

### Donation (app/donate)

Users can donate to CFGI through PayPal, and our application acts as a connector between the user and PayPal. When the donate button is clicked, users will be directed to an in app browser of the PayPal donation page, where users can directly donate to CFGI through PayPal.

### Jobs (screens.js)

The original main purpose of the job page is to let users view a list of jobs from companies which offer sponsorship for international students. Due to the time limitation, we cannot fully deploy the functionality of this feature. The page is made at app/find-jobs . To add the page back in, go to the tablinks folder and uncomment the find jobs button from the .html file. <br/>

Future features this feature could or should have, from most to least important:

- The ability to save the sign up form information to the database
- Let CFGI admin be able to view the saved information and reach out to companies through either email or phone number
- The original main functionality - let users view a list of jobs with sponsorship for international students

These are just a few ideas, feel free to add more as you further develop the app. <br/>

### Home Page (home.js)

The main purpose is to provide users quick access to general information about CFGI, its mission, and the founders of the organization.

The top right should have an icon for the logout feature which takes users back to the sign in page when it is implemented. <br/>

Future features this feature could have:

- display more personalized information for users such as:
  - Saved Financial Assistance Applications so users can  
    progressively work on their applications and quickly access them
  - Upcoming appointments with attorneys to notify users about booked
    appointments <br/>

### Legal Consultation with CFGI Attorney (schedule)

The main purpose of this feature is to help international students get the legal help they need by scheduling a consultation with a CFGI networked attorney. Composed of three components/screens:

- schedule – When the user arrives on the page, the page will show the user a list of CFGI networked attorneys and the number of results. Users can search lawyers using the search bar above. Each lawyer card shows a profile picture, name, city, expertise, hours, phone number, description, languages, Linkedin and Avvo links, and their Calendly link.

Future features this feature could or should have, from most to least important:
- A filter feature for lawyers
- Restrict users to making one appointment at a time
- The ability to view current appointments and past appointments
- An FAQ for commonly asked questions
- A legal resource library e.g., guides or helpful links
- Allow for multiple expertise dropdown selection search

##### How to get the specific link for CalendlyScreen:
1. Get the attorney’s embedded Calendly link code. The directions on how to get this link is provided within a short video located in the CFGI INF 191 Capstone Google Drive, in ‘Final Deliverable’ under “Other Resources”.
2. To use the WebView component, first create an external html file with the embedded Calendly link within the body tag of the html file.
3. Then, using the Amazon AWS web hosting service, create a bucket and upload the html file within. Make sure to make the bucket’s permissions and restriction to public so that the app can have access to the link. 
4. Then, AWS will provide an external link that points to the hosted html file.
5. Within the source code, under appointments.js, set the ‘calendly’ attribute of the respective attorney object with that AWS link.

## Future of the App

As of writing this, the app has yet to be deployed on the Apple App Store and Google Play Store. CFGI is a verified Google Play Store Developer, so we can actually deploy the app right now on Android. However, the app needs be user-tested first before that happens. We also still need to be verified Apple Store Developers, which is unfortunately much more difficult due to the whopping $99 a year we have to pay. <br/>
We're also working on fully integrating the backend database with the front end, in hoping we can continue to futher the development of the application, and deploy on app stores.<br/><br/>
To the future developers, these future changes described both here and earlier for each component seem like a lot (and there are). But we believe you can do it! We hope that you're able to learn Ionic faster than we did through this README and existing code, and we hope that you can make the app a lot better than what we have right now.

### Privacy Policy
https://www.gdprprivacynotice.com/live.php?token=MY2nZE9ibLK8ThWkeyJiWHLzbYUFzZDB 

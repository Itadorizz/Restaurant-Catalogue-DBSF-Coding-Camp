
# Restaurant-Catalogue-DBSF-Coding-Camp

This project has been created to fulfill submission 1-3 in the DBSF Coding Camp Front-End Web Developer program. This project has the following requirements. 

## Submission 1

Features that must be present in the application: 

- ### App Bar (Navigation Bar)
Requirement:
Display the app name or brand logo of the restaurant catalog app (choose the app name or brand logo yourself).
There is a navigation menu:
Home → takes you to the root domain.
Favorite → the target URL is simply "#" (as a placeholder to be used in the next submission).
About Us → points to your LinkedIn/Github/social media profile or personal web/blog.
There is a navigation drawer feature that works well when accessed on a mobile screen.

- ### Hero Item (Jumbotron Item)
Requirements:
To display a hero element with a predefined image, please select one of the assets provided in the project starter, src → public → images → hero. Unused images may be deleted.
The hero image must be full-width or meet the following requirements 
Display with a minimum width of 1000px when the viewport width >= 1200px.
If the viewport width is < 1200px, the hero element will be displayed full-width.

- ### Restaurant List
Requirement:
Display a list of restaurants based on the data provided in the starter project, located in src → public → data → DATA.json. It can be hardcoded-written directly in HTML-or DOM manipulated using JavaScript.
It is mandatory to display the name, image, and at least one of the city, rating, and/or description of the restaurant.

- ### Footer
Requirement:
A footer is displayed at the bottom of the page.
There is free text content according to your creativity. For example, copyright content that includes the year and name of the application. Example: "Copyright © 2020 - Hunger Apps".

- ### Show responsibility
Display requirements:
The web application must be responsive on all screen sizes (mobile - tablet - desktop). Prioritize mobile first.
Use CSS grid or flexbox techniques to organize the layout. If there are floats, we will reject your submission.
Dynamically resize the viewport based on the screen of the device being used.

- ### Website Accessibility
Requirements:
All site functionality can be accessed using the keyboard. For example, access to the hamburger button, access to existing links, etc.
Use the Skip to Content technique to skip focus on the navigation menu.
All displayed images have alternative text. If there is an image that has no meaning, simply provide the alt attribute with an empty value. 
The touch target dimension on touch-interactive elements must have a minimum element size of 44x44px. Some examples of these elements are buttons, anchors, input text, and textareas.
Make sure there is also space between these elements so that the dimensions of the touch target do not accumulate.
Use semantic elements to structure and markup HTML.

## Submission 2
Features that must be present in the application:

- ### Main Page (Restaurant List)
Requirement:
Display a list of restaurants whose data is retrieved from the restaurant-api.dicoding.dev API. See the documentation on this page.
Must display the name, image, and at least one of the restaurant's city, review, and/or description.
There is a link/CTA that leads to the restaurant details on each item.
The hero element is retained.
- ### Restaurant Details Page
Requirement:
Displays the details of the selected restaurant from the main page (restaurant list) or restaurant favorites page.
- The restaurant details page should include: 
      
      Name of the restaurant
      An image
      Street address
      City name 
      Restaurant description
      Food menu
      Beverage Menu
      Customer reviews
There is a favorite button to add or remove favorite restaurants from the database. This store uses IndexedDB.
- ### Favorite Restaurants List Page
Requirements:
The restaurant list page is accessible from the Favorites navigation menu.
Displays restaurants that are the user's favorites (data retrieved from indexedDB).
Must display the name, image, and at least one of the restaurant's city, rating, and/or description.
There is a link/CTA that leads to the restaurant details on each item.
- ### Native Capability
Requirement:
The application can be accessed offline without any assets failing to load, including data retrieved from the API. You are free to use any caching strategy, including the use of a workbox.
The application must display the "Add to Home Screen" icon.
The application has a custom icon that is displayed on the home screen and splash screen.
- Code Quality
Requirements:
Use ESLint as your JavaScript code linter. You MUST include a config file as proof.
Include our ESLint sharable config in your ESLint configuration: eslint-config-dicodingacademy.
Double-check before submitting your project. Satisfy all the conditions defined in your linter configuration. Satisfaction is indicated by no errors when running eslint.

## Submission 3

Features that must be present in the application:

- ### Integration Test
Requirement:
Implement integration tests for the restaurant like and dislike functionality.
- ### End-to-end test
Requirement:
Implement the end-to-end test with the scenario:
Liking a restaurant.
Disliked the restaurant.
- ### Image optimization
Requirement:
Compress the hero image used. The image size must be less than 200kb.
Apply responsive image technique to the hero image. The image resolution on mobile and desktop must be different.
Apply lazy loading technique to the displayed restaurant list image.
- ### Bundle optimization
Requirements:
Install Bundle Analyzer on the submission project.
Use code splitting technique to separate vendor code from original code written by you.
Keep the existing requirements from the previous submission. Such as PWA implementation, display responsibility, website accessibility and so on.





## Installation

Install with npm

```bash
  npm install 
```
    
## Deployment

To deploy this project run

```bash
  npm run build
  npm run serve
```


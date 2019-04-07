# SwanPan Travel App
This is a progressive web app that is designed to help you plan and budget your next vacation.

## Initial Feature
- Users can login, logout, and register an account.
  - Will start with local strategy and then add others later
  - Data that we will require: first/last name, email, DOB, gender.
  - Data to maintain: last login, number of plans made, number of budgets made.
- Users will have a dashboard that displays all their current plans and budgets. Budgets that are generated will be paired with their respective plan. Users will be able to merge independent budgets with plans.
- Users can create a trip. Trips of comprised of plans. Plans can be general ideas, like 'visit Italy', and you can fill in that idea with more specific ideas, like 'roadtrip through from Milan to Rome'.
  - Users can share this trip with their friends to view or collaborate, like Google docs.
    - Three levels of access: Owner, members, and viewers.
  - At any point, users can convert the plan to a budget sheet.
- The budget will be displayed like an outlook or Google calendar, with some items spanning multiple days, like a car rental, and other items being specific to one day, like a one night accommodation.
  - Budgets can be created from plans or from scratch.



## How to Install
1. Clone this repo.
2. Run `npm start` to launch the app.
  - The app will run on port 8080 by default.

## Tech Used
- Node.js
- Express.js
- React.js
- React-router-dom
- MongoDB
- Mongoose
- Passport, for user
- Body Parser
- Helmet

## Further down the road...
Other ideas
- Plans will be able to be superimposed on a map
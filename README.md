# React + TypeScript + Vite + Zod + ReactRouter v6.4

## Main Page
Here there are 2 buttons, Sign In and Sign Up, these buttons use react-router to route to the respective URL the user is trying to reach
There is also an admin button that takes you to the admin login screen and prompts the user for the Admin password
## Admin Functions
There is admin functionality with this program where after the password is put in and confirmed you are brought to an admin screen where all the current users signed up in local storage are shown
each user balance can be changed as well as you can clear all users from this screen
## Sign Up Page
This screen uses Zod for form validation as seen in my other repo where I learned how to do that
all fields need to follow the guidelines set in signup.tsx using Zod and then the users are put into an array of current users for their data to be changed and displayed
## Sign-In Page
This page has a username and password form inputs and once the user submits the entries the database of users is searched for and if there is a match then they are brought to the balances page
if there is not a match then nothing happens and the user must put in a correct entry or go back to the main page and sign up with new info.
## Balances Page
On the balances page, a page is made for the user who logged in 
this page displays their name and balance
below their balance, there are withdrawal and deposit buttons with values from 10-1000 for user adjustability 

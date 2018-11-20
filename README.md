# UtahPocketMonsters

## Trilogy Boot-Camp Project 2

### Objective: 
Create a RPG (with a monster theme) using various technologies.

### About the Game:

From the home screen, the user logs into the game with either a username and password or their google account. 

![Login Page](./public/images/login-page.png?raw=true "Login Page")

Once logged in, the user can select a new character to play (or keep their previous selection). 

![Character Page](./public/images/character-page.png?raw=true "Character Page")

After selecting a player, a map of the U.S. is displayed. The user is asked to pick their battleground (select states only). This initiates an API query that returns the state's population. The opponent (monster) is determined based on the population range; more heavily populated states equal more advanced monsters. (In-progress. Currently using randomization)

![Map Page](./public/images/map-page.png?raw=true "Map Page")

After the opponent is determined, the fight begins with attacks and counter-attacks until one of the players is defeated. The fight logic is based on the two opponents' accuracy, dodging ability, attack power, and life points with randomization at specific points. After a round, the user can choose to play another round, pick a new character, or exit the game. 

![Fight Page](./public/images/fight-page.png?raw=true "Fight Page")

### Installation Instructions:
1. NPM Install 
2. Add an ENV file with your Google Client keys for OAuth (Passport) & a session secret key
3. Create the pocketMonstersDB in MySQL
4. Run node server.js in terminal to initiate tables
5. Insert data for Character & Monster tables using the schema file in the Models folder
6. Play the game!

### Technologies Used:
* HTML
* CSS
* Materialize
* JavaScript
* JQuery
* Node.js
* Express 
* Express Handlebars
* Sequelize
* Passport.js (Google OAuth & Local Strategy)
* DataUSA API
* CreateCLickableMap.com
* MySQL
* Travis CI
* Heroku

#### Built Using:
Visual Code

#### Authors:
Erick Garcia, Talon Harmon, Carolyn Michael, & Christopher Self

#### Acknowledgements
Jason Alexander (Instructor)

#### Website:
https://fierce-beyond-38744.herokuapp.com/

We built a **React Navtive** companion-app to Coup D'etat, a board game that requires deception and teamwork in order to help your side win. The rebel's job is to infiltrate the loyalist group, and enact rebel laws in order to overthrow the existing government.

The game starts in the Start Screen. Players will enter their names into the app. Once they have entered a minimum of 6 participants, the Begin Game button will render on the screen.

<div align="center">
    <img src= "/imagefolder/startscreen.jpg"  width="160" height="250" > <img src= "/imagefolder/startscreen2.jpg" width="160" height="250" > 
</div>

Once the game is begun, the app using **React Navigation** to visit the Game Screen. Two key features to point out is the ImageOrTimer component, and the Scoreboard. ImageOrTimer component doubles as the header, and as a timer for heated debate between players. The game is played through deception, so the timer keeps players from debating endlessly (one of the perks of using this to play). The other is the Scoreboard. This tracks state of Loyalist and Rebel Laws enacted, and interactively guides the game as it progresses.

<img src= "/imagefolder/gamescreen1.jpg" width="160" height="250" > <img src= "/imagefolder/gamescreentimer.jpg" width="160" height="250" >

The King must nominate a Duke in order to enact a Law. The Debate button is pressed, and the ImageOrTimer component switches to a timer that counts down from 5 minutes. If debate is over before then, simply press the debate button again. The vote button uses React Navigation to navigation through two screens: the pass/fail screen, then choosing the Duke.

<img src= "/imagefolder/motionpassed.jpg" width="160" height="250" > <img src= "/imagefolder/chooseduke.jpg" width="160" height="250" > <img src= "/imagefolder/gamescreenduke.jpg" width="160" height="250" >

By implementing **Redux** in the app, we are able to track the players' throughout the game. That includes whether or not they have been killed and if they hold a position of power. The PlayerCard components are widely reused in several screens, each with a specific "purpose" prop. Pressing a player card can mean several different things are happening in the game- the purpose prop determines what Redux action is dispatched.

The King switches once a law is enacted, just as the boardgame prompts players to do. Once one of the plus buttons are pressed, the roles are reset for the next round. Later in the game, it gets a bit more interesting.

For example, when the Rebels enact the 4 and 5 Rebel Laws, the King must kill a player. On the 4th Rebel law, the Game Screen transitions to the Kill Player Screen using React Navigation. The players' name and status are all stored in Redux; they are retrieved and rendered in the PlayerList component on this screen.

<img src= "/imagefolder/killscreen.jpg" width="160" height="250" >

When a player is killed, a Redux action is dispatched in the Player Reducer. The player's "alive" field is changed to false, and their PlayerCard is rendered with a different styling.

<img src= "/imagefolder/deadplayer.jpg" width="160" height="250" >

The game will continue until either the Rebels reach 5 points, or the Loyalists reach 6 points. An alert will pop up on the screen, prompting the players to reset the game.

React allowed us to recycle several components with embedded logic that drive the game. With Redux, we could track state and access it from several different screens. In doing this, the game display offers a great user experience, not cluttered with information. It's interactive, but also doesnt demand constant attention while the players focus on the game.

Overall, it was a great first project using **React Native** and **Redux**- looking forward to the next project!

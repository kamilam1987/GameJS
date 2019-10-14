Note
Game was developed and tested using java script on windows 10 platform computer
Server side was developed in node js
Not tested on other operating systems

It is recommended to open this project in VS Code (Other editors not tested)
Client browser used was google chrome, no other browsers were tested
Game and server were wrote in VS Code editor with live server plugin.

Prerequisites:
VS Code installed with:
- live server plugin for VS Code,
- node + npm installed; https://nodejs.org/en/download/

Following packages below:
(node + npm has to  be already installed) - install from vs code or terminal;
- nodemon
- express
- ejs
- body parser

Open VS Code terminal: to open on windows [CTR + '] or click on terminal tab - > new terminal
	>npm install -g nodemon
	>npm install express -save
	>npm install ejs -save
	>npm install body-parser

 
How to run the game:
1 Download and extract GameJS folder
2 Open VS Code go to file -> open folder and select GameJS directory
3 Start VS Code terminal [CTR + '] or click on terminal tab - > new terminal
4 In terminal type> nodemon app.js -> server should be running
5 Open your internet browser and type http://localhost:3000/
6 Game should be running now

Alternative way to run the game (live server)
1 Open VS Code go to file -> open folder and select GameJS directory
2 Click on game.html - make sure it's opened in text editor area
3 Right click anywhere in text editor area and click on 'Open with Live Server'
4 New internet browser window will open with player name prompt


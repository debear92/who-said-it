![Mock ups](readme/am-i-responsive.PNG)

[View the live project here](https://debear92.github.io/who-said-it/)

Who Said It it's quiz game where users are presented with a prompt that could either be a Taylor Swift's lyric or a Shakespeare's quote. The user will have to choose the right answer and get a score of 6 or beyond to win the game.

# Table of Contents
- [User Experience](#user-experience)
 - [User Stories](#user-stories) 
 - [Design](#design)
- [Features](#features)
  - [Responsivness](#responsivness)
  - [Features to implement](#features-to-implement)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
  - [Validator](#validator)
  - [Lightouse](#lighthouse)
  - [Accessibility](#accessibility)
- [Bugs/Issues](#bugsissues)
  - [Fixed](#fixed)
  - [Unfixed](#unfixed)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Media](#media)
  - [Content](#content)
  - [Code](#code)
- [Acknowledgements](#acknowledgements)

# User Experience

## User Stories

| ID | ROLE | ACTION | GOAL |
|-----------------|:-------------|:---------------:|:---------------:|
| 1 | USER | As a user, I want to be able play the Who Said It Quiz| So I can test my knowledge|
| 2 | USER | As a user, I want to be able to navigate around the interface easily | so that the game doesn't become a frustrating experience|
| 3 | USER | As a user, I want to be able to play the quiz across all devices | So I can play the quiz while on the go or in different locations |
| 4 | USER | As a user, I want to be able to start the game when I am ready | So I can be ready |
| 5 | USER | As a user, I want to see the right answer highlighted if I answer wrong | So I can see where I went wrong |
| 6 | USER | As a user, I want to be able to start a new game when the current one ends | So I can see if I can beat my score|

## Design

- To guide the development of the website wireframes were designed through [Balsamiq](https://balsamiq.com/). These wireframe were only an initial guide and some features appear different in the final product.
![Homepage Wireframe](readme/welcome-page.png)
![Quiz Page Wireframe](readme/game.png)
![Results Page Wireframe](readme/congratulations.png)
![Mobile Wireframes](readme/mobile-wireframes.png)

- A color pallet was generated using [ColorSpace](https://mycolor.space/). I started from the color #80000, Maroon, the title of a Taylor Swift song that I really like.

![Color Pallet](readme/color-pallet.PNG)

- Two fonts were paired togheter for the website. Playfair Display was used for the logo, while Quattrocento Sans was used in the text of the page. The two fonts were chosen on [Google Fonts](https://fonts.google.com/)

# Features

## Homepage

- The homepage provide the user with the purpose of the game

![Homepage](readme/homepage.PNG)

## Footer

- In this section of the page the user can find a link to the Github profile of the author of the website
- In this section the user is informed that the website has been created for educational purposes only

![Footer](readme/footer.PNG)

## Quiz Page 

- This page is the core of the application. The user will be asked to answer 10 questions. 
- For each question the user will be presented with two options: Taylor Swift or Shakespeare. Once the user select an option they won't be able to change it.
- If a user answer a question correctly a correct answer sound will be played and the selected option will turn green. The score will increment by one.
- If a user answer a question incorrectly a wrong answer sound will be played and the selected option wil turn red. The score will remain the same.
- On top of the question, the user will find a bar that will show their current score and will allow the user to restart the game from the beginning and toggle on or off the audio.

![Quiz Page](readme/quiz-page.PNG)

## Results Screen

- After answering all the 10 questions users will be able to see their total score. 
- If the audio is switched on a Taylor Swift song will play while the scores are displayed.
- The user can start the game again from the start and reset their score.

![Results](readme/results-page.PNG)

## Responsivness

- The website was built to be fully responsive on screens from 300px wide and above.
- The responsivness has been reached with the use of different methods, mainly media queries and the use of flexbox.

## Features To Implement

- Add different levels of difficulties that the user can choose from so that the game become more challenging
- Option to store the results for returning users so that they can see if they improved their scores since the previous time they played the game

# Technologies Used 

- Wireframes were designed in [Balsamiq](https://balsamiq.com/).
- The website is built only using HTML, CSS and Javascript.
- [Gitpod](https://gitpod.io/) - to write the code.
- [Github](https://github.com/) - to store the repository of the website.
- [Github Pages](https://pages.github.com/) - to deploy and host the website.
- [Google Dev Tools](https://developer.chrome.com/docs/devtools/) - to troubleshoot issues and test responsivness through various screen sizes.
- [Convertio](https://convertio.co/webp-jpg/) - to convert all images to webp..
- [Favicon](https://favicon.io/) - to create favicon of the website.
- [Canva](https://www.canva.com/) - to design the favicon, logo and 404 image.
- [ColorSpace](https://mycolor.space/) - to generate color pallet.
- [Google Fonts](https://fonts.google.com/) - to import the fonts used in the website.
- [Am I Responsive?](https://ui.dev/amiresponsive) - to show responsivness of the website across multiple devices.

# Testing

To test my website I have opened it on different devices, to see if it was working as expected.

- Browser tested:
  - Chrome
  - Firefox
  - Edge
  - Safari

- Operating systems:
  - Windows
  - Android
  - iOS

## Validator

## Lighthouse

Every page was tested through Lighthouse for both desktop and mobile.

- CSS
  - No errors were found when passing the final version through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/)

## Accessibility

All pages were tested through [Wave](https://wave.webaim.org/) for accessibility

<p>
<a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>
        
# Bugs/Issues

## Fixed

## Unfixed

# Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab.
  - From the source section drop-down menu, select the Master Branch.
  - Once you've selected your branch and root directory, click "Save" to deploy your website. GitHub will generate a URL where your website will be hosted (usually in the format username.github.io/repository-name).

The live link can be found here - [Live Website](addlink).

# Credits

## Media

## Content

## Code

# Aknowledgments
# teamPicker
repository for my team picker app project.

Project Notes

Project Wireframe Notes

I decided to use the Balsamiq application because I like the flexibility it provides and the speed at which you can create detailed wireframes.

I thought that the best approach for my Team Picker app would be to keep it as simple as possible. My reasoning behind this was to make things easy for myself when it came to making the site responsive, and to avoid unnecessary layers of code and files.

In order to keep things simple I decided to make the app a one page web app for ease of use and design. 

The wireframe includes a simple form on the left of the page with 10 text and number inputs for selecting the players and their skill levels. When the form is submitted the ten names are split into two teams of five in a random order which is displayed on the right of the page.

I decided against a login page or contact page and in order to make the user experience as slick as possible. 

Wireframing my app allowed me to properly visualise the way that the app would look on the screen. It also allowed me to think about any potential hurdles that I might face during the build faze. I drew up wireframes for the app on desktop, tablet and smart phone which helped me to understand what I needed to do to make the app responsive.

Finally the process of wireframing gave me confidence when thinking about the build faze of the project. Before drawing out my designs I was unsure how how long the project was going to take and how I would go about completing the app. Wireframing allowed me to visualise the project and get everything that I needed to do clear in my head.


Project Build Notes

When approaching the build phase of this project I decided that the best approach would be to keep the design very basic and get the functionality working first.

After much consideration I came to the conclusion that Angular JS would be the best language to write the app in. There were a couple of reasons for my choice. The primary reason was the option of using the ng-model method that is built in the Angular. I decided that this would be the most efficient way for me to capture the data I would require to shuffle and print out my two teams of players.

The second reason was the fact that using Angular meant that I didn’t have to write any server-side code to deal with my data. This has allowed me to write a streamlined web-app that works very quickly. However the downside of this choice is that the teams that my app makes cannot be saved anywhere. Once the page is refreshed the old data is lost.

My first goal when creating my App was to create my form and capture the data in an array of objects that I could then manipulate. As mentioned above I did this with the use of the ng-model Angular method. By putting a different ng-model class on each of my inputs and declaring an empty array named players in my controller module, I was able to populate that empty array with objects filled with whatever I typed in to my inputs. 

Once I had this array of objects my next goal was to find a way to print this array out on the page as two lists with five players on each side at the click of a button. The way that I achieved this was through the use of a function to split my array of objects, an ng-repeat method to compile my two lists and an ng-show method to show those two lists on the page. The splitting function and the ng-show method were then carried out with the use of an ng-click method on my submit button.

Once I had achieved this step I next needed to find a function that would allow me to shuffle the array of players before they were split. For this I used a function called shuffle that I came across on Stack Overflow. The function takes an array of any kind and loops through that array with a while loop. It then generates a random number no longer than the length of the array that you feed in and swaps the current index with the randomly generated number. When this while loop has been completed the function returns the array that is passed in as a randomly shuffled array. After I had shuffled my players array I used the array.slice() method to split the players array into two evenly sized arrays and then displayed them on the page with the angular ng-if method.

I now had a list of two teams, randomly shuffled that were being displayed on my page at the click of my submit button. My final goal was then to write a function that would sort the teams into two teams of even skill level and attach that function to a pick even teams button with an ng-click.

The method I settled on for sorting my teams into two even teams was quite a simple one. I decided to sort my array into ascending order based on the skill level of each player. I did this by writing a sort function and passing in two variables (a and b). This function then subtracted b.skill from a.skill to specify the skill levels of each player. When the function was run on my players array it sorted the array into ascending order based on skill level.

Once I had my array sorted into ascending order based on skill I then wrote another function that set my two variables called playersOne and playersTwo to empty arrays. It then looped through the players array with a for loop and assigned even indexes to playersOne and odd indexes to playersTwo with the array.push method. This approach gave me to evenly matched teams with only a small difference in skill level. However this approach is dependent on the skill levels of the individual players being widely spread. In the instance that you input one player of a very high skill level and the rest of low level skill the difference becomes much larger. This is something to consider fixing in the future.

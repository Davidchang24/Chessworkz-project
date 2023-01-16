I’m going to use the c4 model, starting from c2 to conceptualise my needs on a higher to lower level. C2 can help me understand my data needs.
(Thinking about adding an external api that handles accounts, need to look further into this).
The application is built of 3 different tiers, the front-end is made with react, the back-end with Java spring boot and the database is MySQL. It is designed this way so that all the tiers are separately deployable and can be exchangeable.

## C2-Level
![Blank diagram](https://user-images.githubusercontent.com/57895305/205592080-2cf16fcf-b081-4f29-93a0-e63ef13b58fb.png)

## C3-Level
For the C3 model we dive to a lower level, where we can logically describe the functionality of the application. We can group some of the functionality together when they have the same responsibility. For example, the requirements of having an account and to be able to log in can be grouped as the account component.

![C3 Model (1)](https://user-images.githubusercontent.com/57895305/208393720-fdf20403-267b-42d9-b979-2d9ca5f418cf.png)


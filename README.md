# Find My Train ![alt text](https://travis-ci.org/whatsrupp/train-spotter.svg?branch=master 'travis build stamp')
## An app to find out which train you're on

# Overview
It's hard to explain the functionality of the app in words so here's a user experience flowchart of'Find My Train':

![alt text](/docs/images/flowchart.png 'mockup')

Hopefully, that gives you the gist of what we're aiming to do. This app was conceptualised from the following key problem statement:

#### 'I need to tell friends when I'll arrive but I don't have that information to hand'

### Setup
Currently there is no app to look at, it's all one enormous thought baby but we're currently working towards our MVP (minimum viable product).
![alt text](/docs/images/mvp.png 'mvp function list')

### Developers
We're a small team of 4 aiming to build this product in a week. Fingers crossed!

- [Alice Cheung](https://github.com/Alicespyglass)
- [Ruan Odendaal](https://github.com/ruanodendaal)
- [Nick Rupp](https://github.com/whatsrupp)
- [Edward Ward](https://github.com/edwardwardward)

### Approach
#### 1) Brainstorm:
To start thing off we outlined our key problem statement and brainstormed some features we would want to include in the app. The useful output from that session is shown below

![alt text](/docs/images/mindmap.png 'mindmap')

#### 2) Research:
"I'd say our research was thorough, in-depth and useful" (Absolutely No One On Our Team - 2017 )

Key focuses on:
- Which platform to deploy on?
- Which APIs for messaging, trains and geolocation already exist?

#### 3) User Stories:

```
As a commuter
I want the app to find out the nearest station
so that I don't have to input it myself
```
```
As a commuter
I want the app to tell me what train I'm currently on
so that I can inform my friends
```
```
As a commuter
I want to tell the app where I'm going
so that it can tell me the estimated arrival time
```
```
As a commuter
I want the ability to send my travel details to my friend
so that they know when I'd due to arrive
```
```
As a commuter
I want the app to inform my friends of any delays to my journey
so that they know I'm delayed en route
```
```
As a commuter
I want...
```

### Technology
- Node.js: Handy for single page web app deployment to Heroku
- Javascript: Goes without saying
- Jasmine: Unit testing
- Travis: Nah this one's a lie. Maybe one day the green build stamp will be there
- Geolocator: Inbuilt into most browsers, pretty handy really
- Transportapi.com: Pretty much holds up our entire app
- Whatsapp API: Spamming all your contacts with train info can be oddly rewarding.


### Set Up
It could be live on Heroku [here](https://find-my-train.herokuapp.com/) but, to be honest, probably isn't. If you want to check this out locally follow these steps!
##### An Aside
We're assuming you are on a Mac set up for development, are more competent than us and that you have Homebrew installed. If not the following links might help:
Install Homebrew [here](https://brew.sh/).
Set up for development [here](http://www.preparetocode.io/)

#### 1) Install Node

This cracking installation needs Node.
In your terminal run:
```
$ brew install node
```

#### 2) Download Required Node Packages

```
$  cd file/location/of/train-spotter
$  npm install
```

#### 3) Start the local server
```
$ node index.js
```
#### 4) Open in your browser
Check out the following into your URL bar in your browser:
```
http://localhost:5000/
```

# Post Project Review
## Wins
### Passion
[I like trains](https://www.youtube.com/watch?v=hHkKJfcBXcw). It was brilliant to work solidly on a week on a project of our choosing.
### Live Deployment
We tested the app on an actual commute! It worked!
Getting the whatsapp integration and sending out actual messages was brilliant too.
### Styling
It doesn't look half bad, although leaning on the design crutch that is bootstrap did help with that enormously.
### API Wizardry
All of us now feel comfortable with (and possibly even excited about) tackling API calls and writing asychronous Javascript.
## Struggles
### Asynchronous Javascript
Standalone API calls are fine but when you're chaining 4+ it starts to get a bit challenging, set back the project timeline by about a day. Thorough doc review and youtube research set us on the straight and narrow though!
### Overreach
As can be expected from any one week project we were too overambitious on the minimum viable product. The features we wanted to implement were slightly beyond our reach in the timeframe of 4 days. After day 2 we realised we needed to largely scale back the app in order to put a nice looking product!
### Testing
'What's a feature test?'    (Rupp, N 2017)

'Spike for life'    (Odendaal, R 2017)

The first two days were spent wrestling with Asynchronous Javascript. This meant numerous overhauls of the codebase which left the testing somewhat to be desired. We didn't manage to get Travis working but to be honest, when you're working to a deadline it's hard not to be impatient with setting up that friendly code miner.
### Error Catching
Our programme almost exclusively relies on the perfect user. The interface doesn't give feedback to the user to let it know what it's doing and won't let them know whether it's a slow API call or one that's just flat out broken.

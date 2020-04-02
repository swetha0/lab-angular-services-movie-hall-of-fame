![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | Hall of Fame
## Introduction

These days movies all are streamed online in no time. The internet is definitely damaging the movie industry, allowing people to search, download and watch movies without having to pay for them directly. 

A movie theatre has contacted ProGrad to help them. Their idea is to redo their website using Angular. They think using the latest technologies will change the perspective of people and bring in more customers.

The theatre has 5 different rooms, where people watch 5 different movies. Their latest proposal is to show people's favorite movies instead of the latest ones! Your task will be to help them decide which movies to show.

## Learning Goals

After this lab, you will be able to:

- Create an Angular service to share information with all the components in your application.
- Create Angular routes with parameters.
- Create different components that are connected to each other.

## Requirements

- Fork this repo.
- Clone this repo.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a pull request from your master branch to the original repository's master branch. In the pull request name, add your ProGrad id, name, and last name separated by a dash "-".

## Deliverables

You need to generate the starter code and fill it with the necessary code to satisfy the requirements described below.


## Starter Code

To generate the starter code, follow the steps given below

- To create a new application,
    - Open your ubuntu or cmd terminal and execute the following command
      - ```ng new app-name```
      - for example, ng new super-wars
    - To create a new component, execute the command 
      - ``` ng generate component component-name```
      - example, ng generate component contacts
      
## How to run

- To run the project go to your ubuntu terminal or VScode editor
    - open the ubuntu or cmd terminal or inside the vscode editor
    - run the command following command
    - ```ng serve --open or ng serve -o```
    
## Progression 1 | Service Creation

First, we are going to create an Angular Service to contain all of the movies' information. This service is going to have the following:

#### Movies

`movies` will be an array of objects, that will contain one item per each movie room. Each object inside the array will have the following information:

- **`id`** (Number) - A unique number used to distinguish between movies.
- **`title`** (String) - Contains the movie title.
- **`poster`** (String) - A URL of a poster image for the movie.
- **`synopsis`** (String) - A brief description about the movie.
- **`genres`** (Array of Strings) - The genre of a movie, such as "Adventure", "Action", "Romantic Comedy" etc.
- **`year`** (Number) - Movie's release year.
- **`director`** (String) - Director of the movie.
- **`actors`** (Array of Strings) - The actors' names, using one string per actor.
- **`hours`** (Array of Strings) - Movie timings. i.e. `Wednesday 19:30, 22:30` would be an element of this array to indicate that you can watch a movie on wednesday at 19:30h and 22:30h.
- **`room`** (Number) - Room number in which the movie is running. This will be a value between 1 and 5.

In the `movies` array you will have to create an element for each movie, and fill the different fields we just defined. **We've provided a list of sample movies in src/sample-movies.js**. Copy the code from this file into your service, you only have to fill in the hours and room numbers.

#### Methods

The movies service will also have two different methods that will be used later on the project. The methods you have to create are the following:

- **`getMovies()`** - Returns the array of movies.
- **`getMovie(id)`** - Will receive a movie's id number as a parameter, and will return correct movie.

#### Tasks

- Create a `Cinema` service.
- Add `movies` array of objects to the service. Each object will have the following properties:
  - `id`, number.
  - `title`, string.
  - `poster`, string.
  - `synopsis`, string.
  - `genres`, array of strings.
  - `year`, number.
  - `director`, string.
  - `actors`, array of strings.
  - `hours`, array of strings.
  - `room`, number.
- Add a `getMovies()` method, that will return the array of movies.
- Add a `getMovie(id)` method, that receives a number id as a parameter and returns an object from the `Movies` array.

## Progression 2 | Routes

In the second iteration of this exercise, we will create two different routes to show the details of our cinema.

In the main page of the application, we will show a list with all the movies in the theatre. Once you click on one of the movies, you will see the movie's details.

We will create the components that will be used to show the information: `MyHomeComponent` and `MyMovieComponent`. Once we have created all the components we need, we have to create two different routes:

- `/home`, that will render the `MyHomeComponent` component.
- `/movie/:id`, that will render the `MyMovieComponent` component.

Remember, we also have to add the `<router-outlet></router-outlet>` tag in the `app.component.html` file to be able to load the different information depending on the indicated route.

#### Tasks

- Create two components:
  - `MyHomeComponent`
  - `MyMovieComponent`
- Create the different routes to show each component:
  - `/home`, to show `MyHomeComponent`
  - `/movie/:id`, to show `MyMovieComponent`
- Add `<router-outlet></router-outlet>` tag to `app.component.html` file

## Progression 3 | Home Page

We are going to work on the `MyHomeComponent` component we created in the iteration above. We have to use the `Cinema` service to load all the movies' information that's contained in the `movies` array.

In the home page, we will show a list of all the movies. In addition, we will add a link to view the details of a movie.

Remember, we're trying to stand out in the cinema world and attract all the millenials. Add some styling to the home page suitable to our audience.

#### Tasks

- Load the movies from the `Cinema` service, with the `getMovies()` method we've previously defined.
- Display the movies on the `/home` page.
- Create a link for each movie that directs the user to `/movie/:id`.
- Style the page.

## Progression 4 | Movie Page

Once the user visits a movie page, we have to show them the movie's details. Again, we need to use the `Cinema` service to load the information of one movie. On this page, display *all* of the movie's details, and create a back button to return to the home page.

In addition, add a bit of styling to make the details page look good.

#### Tasks

- Load the movie from the `Cinema` service, with the `getMovie()` method defined on it. Use the `:id` parameter in the URL to get the correct movie.
- Show the movie's details in the view.
- Add a "Go back" button, that takes the user to the home page.
- Style the page.

Happy Coding ProGrad ❤️

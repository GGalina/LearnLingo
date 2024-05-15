# LearnLingo Project

Welcome to the LearnLingo project! This web application allows users to search for teachers, view their rates, languages that they teach, and other important information, and save their favorite teachers as well as book trial lessons. The project was developed using React, styled-components, Firebase database, and others.

LivePages: https://ggalina.github.io/LearnLingo/


## Getting Started

To run the project on your local machine, follow these steps:

### Clone the Repository:

```shell
git clone https://github.com/GGalina/LearnLingo.git
```

### Navigate to the Project Directory:

```shell
cd Coctails
```

### Install Dependencies: 
Make sure you have Node.js and npm installed.

```shell 
npm install
```

### Start the Development Server: 
To start the project, run the following command:

```shell 
npm start
```


## Features

***Registration / Login:*** Users can create their account for the platform to add teachers to their "Favorites".

***Teachers:*** Page shows a list of teachers available for booking.

***Teacher Details:*** Clicking on a "Read more" button will display detailed information, including a summary of the teacher's experience and student reviews.

***Teachers Filter:*** Users can filter teachers by selecting one or more filter options at the top of the page. Teachers can be filtered based on languages they teach, level of knowledge, and price.

***Load More:*** Clicking the "Load more" button will load a new set of teachers (pagination).

***Book trial lesson:*** Users can book a trial lesson by clicking "Read more - Book trial lesson" and filling out the form.

***Favorite Teachers:*** Users can mark a teacher as a favorite by clicking the heart icon in the corner of the teacher card. A second click on the heart will remove the teacher from the favorites list. The teacher added to favorites can be viewed in the "Favorites" tab.


## Technologies Used

***REACT:*** Frontend library for building user interfaces.

***React Context:*** For managing global state.

***React Hooks:*** For state management and side-effects in functional components.

***AXIOS:*** For making HTTP requests.

***Libraries:***

* react-responsive: For building responsive web application.

* react-icons: For including icons.

* styled-components: For styling React components.

* formik: For building forms.

* react-toastify: For displaying toast notifications.

* react-select: For building custom dropdowns.

* react-router-dom: For declarative routing in application.

* react-loading-icons: For displaying loading indicators.

* yup: For form validation.

* firebase: For backend services and hosting.

* normalize.css: For consistent rendering across browsers.


## Project Structure

***src/:*** This directory contains the source code for the project.

***src/assets/:*** Assets of the application including images and fonts.

***src/components/:*** React components of the application.

***src/context/:*** React Context for the application (includes auth, color, favorites, and modals contexts).
***src/pages/:*** Pages of the application.
***src/services/:*** Contains Firebase configuration file and API.


## Material

LivePages: https://ggalina.github.io/LearnLingo/

Repository: https://github.com/GGalina/LearnLingo.git

Figma design: https://www.figma.com/design/E1DcdF62O0enSSIH2S8dEj

Technical requirements: https://docs.google.com/document/d/1ZB_MFgnnJj7t7OXtv5hESSwY6xRgVoACZKzgZczWc3Y 

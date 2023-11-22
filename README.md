# Getting Started with Create React App

# Steps to run this app.

# 1. clone the Github link using below command

- git clone [link]

# 2. once you cloned the project use the command (npm install) to get the all packages.

- npm install

# 3. npm run start or yarn start to run the application.

- npm run start or yarn start

# 4. Once you start the application you can able to see the Login page.

# Please enter these user name and password (Username: test , Password:Test@1#3) then you can able to navigate to the images page

# There you can see search field and list of images, i displayed only 10 per page, you can able to see pagination buttons under images list.

# With using pagination we can see images until total images, and with using search input we can search image based on title and description.

# Story Book

- npm run storybook or yarn storybook

# Unit test cases to run

- npm run test or yarn test

coming to folders

1. In src folder, there are two main folders frontend and server

Frontend is for UI purpose that contains pages and components
Main three pages routing is there such as Login page, Images page, Not found page
Pages and components folders containing main component tsx, style, stories(story book), test files are there.

Server folder is for backend where i developed rest APIs for

1. Login purpose (/api/login)
2. getting images (/api/images)
   these two endpoints were developed in Node and express JS (I did not used any outside endpoints, i implemented my self using node and express js)

here i used just sample data to login and images, i did not used any DB connection

My Understanding about the Task:
What is the Task?

After I read the Instructions in the mail, I did understand about the task very detailed step by step.

Build A React application to fulfil following requirements:

- REACT framework (functional components)
- Typescript
- Storybook
- testing frameworks (vitest / jest)
- usability, accessibility and responsive
- design patterns and best practices (please justify if possible)

- develop application having protected route asking for credentials
- In case of 500 errors, please show the generic error
- build photo viewer page having capabilities (can be public API or your own)
  - dynamic loading of images from API
  - paged results
  - page navigation to show loader
  - search image having meta data
  - each photo to show meta data as key value pair

My System Design for this Task:

General Thinking and my plan frontend and Backend

Server side

1. First I have implemented into 2 end points one is for /login end point another one is /images to display.
2. login endpoint is post method, it will accept username and password as request (i can use query params but used request body) and responses i considered 200 success code, 400, 401, 500 error codes
3. /images endpoint is get method, 200 and 500 codes

Frontend side

1. created three pages Login, Images, and Not found pages
   For login, called /login endpoint to verify user authentication
   For Images, called /images endpoint to display images
   and implemented pagination and search functionality in frontend side

Functional Requirements UI/UX:
Compulsory action plan to do:

1. To view images user should be authorized person for that, user should be asked for login
2. If user is not authorized person error message should be displayed.
3. otherwise Images should be displayed with pagination(when we give limit the images per page if more images are there )
4. Loader should be visible while page navigation.
5. Search input should be visible to user, with search input user can able to search the image as user preference.
6. Testing and stories should be done for components
7. Usability, accessibility, responsiveness should be there for pages.

My Action Plans to Implement:

1. My action plan divide into components and pages Front end side and implemented Search and Pagination.
2. Implemented REST API's endpoints for Login and Images.
3. Each component contains tsx, styles, stories and test files.

- Unit Testing Jest and React testing library
- Stories with StoryBook
- Accessibility Done for components.

- Extra Functionality:
- I did not use outside Endpoints (API), implemented my self server.js with Node JS and Express JS.

- Data Entities:
- images: Image[];
  success: boolean;
  total_images: number
- url: string;
  title: string;
  description: string;
  id: number;

- DataAPI:
- api/login
- api/images

MY Output:

# MainPage

- ![Reference Screenshot](src\refimages\MainPage.png)

# MainPage 1

- ![Reference Screenshot](src\refimages\MainPage1.png)

# Story Book

- ![Reference Screenshot](src\refimages\StoryBook1.png)
- ![Reference Screenshot](src\refimages\StoryBook2.png)
- ![Reference Screenshot](src\refimages\StoryBook3.png)
- ![Reference Screenshot](src\refimages\StoryBook4.png)

# Unit Test Cases

- ![Reference Screenshot](src\refimages\AllTestcasespassed.png)

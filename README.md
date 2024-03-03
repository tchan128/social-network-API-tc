<div id="readme-top" align="center">
    <a href="https://github.com/tchan128/social-network-API-tc"><img src="./assets/social-media.png" alt="Logo" width="80" height="80"></a>
    <h3 align="center">Social Network API</h3>
    <p align="center">
        The motivation for this project is to create a platform so that users can add friends, share their thoughts, and react to each other's thoughts. Nowadays, the world is connected via the network and a part of human nature is to connect with each other no matter where each other is. I built this project because I want to help others easily connect with each other in the digital world and share experiences with friends, family, and loved ones.
        This platform is a solution for individuals who is looking for a easy-to-use app where they can connect with their friends easily. You can quickly and easily see other's thoughts and react to them, keep up with their latest doings. Through this project, I learned how to develop a backend using NoSQL and further my understanding of Express.js and working with local servers. 
        <br/>
        <br/>
        <a href="https://github.com/tchan128/social-network-API-tc"><strong>Explore the docs »</strong></a>
    </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#visuals">Visuals</a></li>
    <li><a href="#credits">Credits</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About the Project

This project is a social network API. The API is built with Javascript, Mongoose, ExpressJS, and nodeJS. The MongoDB was used and to build and visualize the functionality and the localhost server, Insomnia and Studio 3T was used. In this system, the main components are being able to:

- Create, update, and delete user
- View all users and view a single user
- Create, update, and delete thoughts
- View all thoughts and view a single thought
- Add and remove friends
- Add and remove reactions from thoughts

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

To be able to use this application, you need to git clone this repository into your local machine. 

You can then make your own `.env` file with the following information:

```
MONGODB_URI=mongodb://127.0.0.1:27017/networkDB
```

Once that's completed you can connect on Studio 3T

Next, you install packages that are needed to work this program:

```
npm init -y
npm install
npm install mongoose
npm install mongoDB
npm install express
npm install dotenv
```

Once those are installed, you can go ahead and run this command to start the system

```
npm run start
```

You should now be able to test out the functionality on Insomnia and see the database on Studio 3T. 
 
<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
## Usage

In this project, a social network API is created to build a platform where users can share their thoughts, react to thoughts, and also add friends in the network. As described there are many functionalities with this backend, but below are the main usages and explanation when testing on Insomnia:

- Accessing `api/users`
  - GET route will display all users
  - POST route will create a new user when with the body `userName` and `email`
- Accessing `api/users/:userId`
  - GET route will display a single user
  - PUT route will allow the user to edit their username and email
  - DELETE route will allow the user to delete the user
- Accessing `api/users/:userId/friends/friendId`
  - POST route will allow the user with `userId` to add friend with `friendId`
  - DELETE route will allow the user with `userId` to delete friend with `friendId`
- Accessing `api/thoughts`
  - GET route will display all thoughts
  - POST route will create a new a new thought when with the body `thoughtText` `userName` and `userId`
- Accessing `api/thoughts/thoughtId`
  - GET route will display a singular thought with `thoughtId`
  - PUT route will allow the user to edit their thought 
  - DELETE route will allow the user go delete their thought
- Accessing `api/thoughts/:thoughtId/reactions`
  - POST route will add a reaction to the thought with `thoughtId`
  - DELETE route will delete a reaction to the thought with `thoughtId`

To see the system in action please visit this link: 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Visuals

1. GET all users

<img width="1409" alt="Screenshot 2024-01-31 at 10 31 38 PM" src="https://github.com/tchan128/ecommerce-backend-tc/assets/56553374/72708fae-20f6-433a-849c-c0c260c7d819">

2. Get all thoughts

<img width="1414" alt="Screenshot 2024-01-31 at 10 31 47 PM" src="https://github.com/tchan128/ecommerce-backend-tc/assets/56553374/e56c21d6-39d7-4ce8-a165-be87e7e25a3f">

3. CREATE user

<img width="1411" alt="Screenshot 2024-01-31 at 10 32 01 PM" src="https://github.com/tchan128/ecommerce-backend-tc/assets/56553374/71e8c699-224f-4fc6-9494-1f761afb6489">

4. CREATE thought
   
<img width="1409" alt="Screenshot 2024-01-31 at 10 32 10 PM" src="https://github.com/tchan128/ecommerce-backend-tc/assets/56553374/b1fa679d-2b03-4401-9266-70eb6e54d351">

5. DELETE category

<img width="1415" alt="Screenshot 2024-01-31 at 10 32 19 PM" src="https://github.com/tchan128/ecommerce-backend-tc/assets/56553374/7176e302-7c07-4b58-bc59-b9f6a3b731f9">

## Credits

This e-commerce backend was improved upon from the starter code. The starter code is cloned from here: https://github.com/coding-boot-camp/fantastic-umbrella

In addition to that, some websites that helped with the build of this e-commerce backend include:

- Sequelize Model Instances: https://sequelize.org/docs/v6/core-concepts/model-instances/
- Sequelize Model Basics: https://sequelize.org/docs/v6/core-concepts/model-basics/
- Sequelize Associations: https://sequelize.org/docs/v6/core-concepts/assocs/
- Sequelize Validation & Constraints: https://sequelize.org/docs/v7/models/validations-and-constraints/#:~:text=Using%20the%20%40NotNull%20decorator%2C%20you,the%20query%20to%20the%20database.
- Sequelize Model Querying: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

README icon is found here: <a href="https://www.flaticon.com/free-icons/marketing" title="marketing icons">Marketing icons created by Freepik - Flaticon</a>

The README template is found here: https://github.com/othneildrew/Best-README-Template

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Please refer to the LICENSE in the repo.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Tiffany Chan - tchan12899@gmail.com

Project Link: https://github.com/tchan128/social-network-API-tc

<p align="right">(<a href="#readme-top">back to top</a>)</p>
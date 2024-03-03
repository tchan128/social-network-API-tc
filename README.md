<div id="readme-top" align="center">
    <a href="https://github.com/tchan128/social-network-API-tc"><img src="./asset/ecommerce.png" alt="Logo" width="80" height="80"></a>
    <h3 align="center">Social Network API</h3>
    <p align="center">
        The motivation for this product is to improve upon a starter code to make a functioning e-commerce backend. This functioning system allows users to search via category, tags, and products and allows them to create, update, and delete items. I built this project because as we move into a more digital world, it is something that helps customers shop online with ease. Additionally, it allows businesses to expand their experience and scope. This is a system that physical stores can use to help organize their inventory and organize the products they have on a database. This app is a solution for individuals who want to easily access and modify information in their inventory. It allows them to stay organized and pull up the information they need right away. Through this project, I learned how to develop my skills in Sequelize and further my understanding of Express.js.  
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

This project is a social network API. The API is built with Javascript, Mongoose, ExpressJS, and nodeJS. The MongoDB was used and to build and visualize the functionality and the localhost server, Insomnia was used. In this system, the main components are being able to:

- Create, update, and delete user
- View all users and view a single user
- Create, update, and delete thoughts
- View all thoughts and view a single thought
- Add and remove friends
- Add and remove reactions from thoughts

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

To be able to use this application, you need to git clone this repository into your local machine. 

Afterward, you need to make an `.env` file with the following information :

```
DB_NAME = 'ecommerce_db'
DB_USER = YOUR USERNAME
DB_PW = YOUR PASSWORD
```

Afterward, you can use the commands in `schema.sql` to build your database on WorkBench. Once those are completed, you can install packages that are needed to work this program:

```
npm install -y
npm install sequelize
npm install mysql
npm install express
npm install dotenv
```

Once those are installed, you can go ahead and run this command to start the system

```
npm run seed
```

Once seeded, please go ahead and run this command:

```
npm run start
```

You should now be able to test out the functionality on Insomnia. 
 
<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
## Usage

In this project, an e-commerce backend is improved to help customers and businesses to engage in online buying and selling with ease. As described there are many functionalities within this backend, but below are the main usages and explanations when using on Insomnia:

- Accessing `api/categories`
  - GET route will display all categories with their associated product & tags
- Accessing `api/categories/:id`
  - GET route will display the specific category with its associated product & tag for a category that is entered in place of `:id` 
  - PUT route will allow the user to edit the specific category's name
  - DELETE route will allow the user to delete the specific category
- Accessing `api/products`
  - GET route will display all products with their associated categories and tags
- Accessing `api/products/:id`
  - GET route will display the specific product with its associated category & tag
  - PUT route will allow the user to edit the specific product's properties
  - DELETE route will allow the user to delete the specific product
- Accessing `api/tags`
  - GET route will display all products with their associated categories and products
- Accessing `api/tags/:id`
  - GET route will display the specific category with its associated product & category
  - PUT route will allow the user to edit the specific tag's name
  - DELETE route will allow the user to delete the specific tag

To see the system in action please visit this link: https://share.vidyard.com/watch/9eCJY9rikzQRKRzBZCveb7?

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Visuals

1. GET all categories

<img width="1409" alt="Screenshot 2024-01-31 at 10 31 38 PM" src="https://github.com/tchan128/ecommerce-backend-tc/assets/56553374/72708fae-20f6-433a-849c-c0c260c7d819">

2. Get category by ID

<img width="1414" alt="Screenshot 2024-01-31 at 10 31 47 PM" src="https://github.com/tchan128/ecommerce-backend-tc/assets/56553374/e56c21d6-39d7-4ce8-a165-be87e7e25a3f">

3. CREATE category

<img width="1411" alt="Screenshot 2024-01-31 at 10 32 01 PM" src="https://github.com/tchan128/ecommerce-backend-tc/assets/56553374/71e8c699-224f-4fc6-9494-1f761afb6489">

4. UPDATE category
   
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

README icon is found here: <a href="https://www.flaticon.com/free-icons/ecommerce" title="ecommerce icons">Ecommerce icons created by DinosoftLabs - Flaticon</a>

The README template is found here: https://github.com/othneildrew/Best-README-Template

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Please refer to the LICENSE in the repo.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Tiffany Chan - tchan12899@gmail.com

Project Link: https://github.com/tchan128/social-network-API-tc

<p align="right">(<a href="#readme-top">back to top</a>)</p>
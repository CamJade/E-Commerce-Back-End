# E-Commerce-Back-End [![license](https://img.shields.io/badge/license-MIT-orange)](https://shields.io)
 
## Table of Contents 
[Description](#description)  
[Installation](#installation)  
[Usage/Link](#usage/link)  
[License](#licensing)  
[Questions](#questions)  
 
## Description
This is a back-end application for an E-commerce site. It uses Sequelize to interact with a MySQL database through an Express.js API.  

## Installation
Begin by ensuring you have node and MYSQL installed on your computer. Next, clone this repository into a folder, navigate to the folder and open the code. In the terminal, run npm install.  

Once installing all the necessary tools and files, find the .env.EXAMPLE file. Rename this file to .env and add your user and password information as well as the database you'd like to use.  

Create the database by accessing the mysql shell(type mysql -u root -p in the terminal, then enter your password) and create database by copying the contents of the schema folder here.  

After exiting the mysql shell, run npm run seed to populate the database.  

Now everything is installed and we can move on to the usage. Installation is also shown in the walkthrough video linked below.

## Usage
Begin by typing npm start in your terminal. This will start the server and result in the terminal console logging that it is listening on the 3002 port.

You can now create GET requests for products, categories, and tags as well as GET by id, POST, PUT, and DELETE.  

Each of these are demonstrated in the walkthrough video linked [![here](https://drive.google.com/file/d/1pKhfM20bwz4NOr-i0p04QBJNFPUYmCSe/view)].

## Licensing:
Licensed under [MIT license](LICENSE).

## Questions
Feel free to direct questions to the author by emailing here: whitcam20@gmail.com

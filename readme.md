# Post App
## Simple CRUD App

## Features:
* creating posts
* editing or deleting posts
* commenting posts
* editing or deleting posts

## Tech Stack:
* Next.js
* Laravel
* Laravel Sanctum
* MySQL
* PHP
* TailwindCSS
* Chakra UI
* CSS

## Setup
1. Install node.js
2. Install php and mysql
3. Clone repo
4. Configure server:
* Install npm and composer dependencies:
```bash
  npm install
  composer install
```
* Create a copy of your .env file:

```bash
    cp .env.example .env
```

* Generate an app encryption key

```bash
    php artisan key:generate
```

* Create an empty database for our application
* In the .env file, add database information to allow Laravel to connect to the database
* Migrate the database

```bash
    php artisan migrate
```

* Run Laravel Project

```bash
    php artisan serve
```
5. Configure client:
* Install dependencies:
```bash
  npm install 
```
* Run local server
```bash
  npm run dev 
```
# RestManage Web App (Frontend)

## Developer:

  Toni Sanchez

# [Link to backend repo](https://github.com/Tonisg91/restmanage-backend)

## Description

Restmanage is an app for manage restaurants.

##IMPORTANT:
If you want to access the administration part, you have to enter the / admin / login path and enter with my account (toni@toni.com Toni123) or create one in / admin / signup (The root password is ironhack)

## User Stories
### Client
- **home** - As a client I want to see the homepage of the restaurant
- **login** - As a client I want to be access to login form
- **signup** - As a client I want to be access to signup form and create my account
- **profile** - As a client I want to see and edit my profile data
- **menu** - As a client I want to see the menu.
- **:productId** - As a client I want to see the product details
- **dailymenu** - As a client I want to see the daily menu
- **cart** - As a client I want to see the cart with my current order

### Admin
- **admin home** - As a Admin I want to see the home page with statistics and information
- **admin login** - As a Admin I want to see the login form
- **admin menu** - As a Admin I want to add products and manage them
- **admin :productId** - As a Admin I want to see product details and manage them
- **admin dailymenu** - As a Admin I want to manage the daily menu
- **admin orders** - As a Admin I want to see the order view
- **admin config** - As a Admin I want to see the config of my business and manage them
- **admin customize** - As a Admin I want to manage the client view (theme, font, images...)

## Routes for Clients

| URL                                           | Description                                                                   |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| '/'                                           | Render Restaurant Homepage                                                    |
| '/login'                                      | Render Login form                                                             |
| '/signup'                                     | Render signup form                                                            |
| '/profile'                                    | Render account data (private)                                                 |
| '/menu'                                       | Render the menu of restaurant                                                 |
| '/menu/category'                              | Render a product category                                                     |
| '/:productid'                                 | Render product details                                                        |
| '/dailymenu                                   | Render daily menu                                                             |
| '/cart'                                       | Render current order & pay method                                             |


## Routes for Owner/Admin

| URL                                           | Description                                                                   |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| '/admin'                                      | Render Admin Homepage (Protected)                                             |
| '/admin/signup'                               | Render Admin Signup form (rootPassword == ironhack)                           |
| '/admin/login'                                | Render Login form                                                             |
| '/admin/menu'                                 | Render the menu of restaurant                                                 |
| '/admin/:productid'                           | Render product details                                                        |
| '/admin/dailymenu                             | Render daily menu                                                             |
| '/admin/orders'                               | Render Orders component                                                       |
| '/admin/config'                               | Render data & config of restaurant                                            |
| '/admin/customize'                            | Render customization options                                                  |




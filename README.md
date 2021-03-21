# IBM Hashtag Track - Twitter Microservice (Frontend)

This app can measure the performance of the campaign as well as the locations to which this campaign is being most commented.


## Tecnologies used

- Angular 10
- Angular Google Maps (AGM)

## How to use

To test this architecture you will need to have: **Node.js** installed or **Docker** with **docker-compose**.

- Clone this repo and enter it

- Run the in the `cmd` or `terminal` a command `npm install`
- After npm install is complete, enter the command `ng serve`

In the default configuration you will have:

- **hashtag-tracker-frontend** running on port `4200`

After running the containers or excecute in terminal, head to `http://localhost:4200` to make sure that the service (**Hashtag Track API Server**) are registered in the **Discovery Server**, when they're all registered you can test the application using swagger through the following link: `http://localhost:8082/swagger-ui.html`

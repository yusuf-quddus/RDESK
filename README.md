# RDESK Website
Website for RDesk IT Services. 

## Live Demo
To see demo, go to [https://rdesk.onrender.com/](https://rdesk.onrender.com/)

``` Note: Demo is deployed on free service and may load slowly. ```

## See Production Deployed Site
``` Coming Soon ```

## Technologies Used
List the main technologies and libraries used:

### Frontend (React)
* React
* React Router
* Axios (for API calls)
* CSS
* Bootstrap
  
### Backend (Node.js)
* Node.js
* Express.js
* Postgres

## Setup and run

install code locally
```shell
git clone git@github.com:yusuf-quddus/RDESK.git
cd RDESK
```

install dependencies
```shell
cd frontend
npm install

cd backend
npm install
```

environment variables to connect to DB
```
RDS_HOSTNAME=your_db_hostname
RDS_USERNAME=your_db_username
RDS_PASSWORD=your_db_password
RDS_PORT=your_db_port
```


build and run:
```shell
cd backend
npm run build:ui
npm run start
```


## Folder Structure
```
project-name/
├── frontend/          # Frontend code
│   ├── public/
│   │   ├── images/
│   ├── src/
│   │   ├── components/
│   │   ├── css/
│   │   ├── data/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
├── backend/            # Backend code
│   ├── .env            # Environment variables
│   ├── package.json
│   └── server.js
└──  README.md
```

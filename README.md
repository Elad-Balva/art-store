# Art Store

Art Store is a web application where users can browse and purchase art items. The application is built with a React frontend and an Express backend.
## Tech Stack

- **Frontend:** React, TypeScript, MUI, Tailwind CSS
- **Backend:** Express, TypeScript, Sequelize
- **Database:** PostgreSQL

## Project Structure

The project structure is as follows:

```plaintext
art-store/
├── client/                     # React front-end application
│   ├── public/                 # Public assets
│   ├── src/                    # Source files
│   │   ├── components/         # React components
│   │   ├── pages/              # React pages
│   │   ├── services/           # React services
│   │   ├── App.tsx             # Main App component
│   │   ├── main.tsx            # Entry point of the application
│   │   └── ...                 # Other files and folders
│   ├── package.json            # Client dependencies and scripts
│   └── ...                     # Other configuration files
├── server/                     # Express back-end application
│   ├── src/                    # Source files
│   │   ├── controllers/        # Controller functions
│   │   ├── middlewares/        # Middlewares functions
│   │   ├── models/             # Data models
│   │   ├── routes/             # API routes
│   ├── migrations/             # Database migrations
│   ├── seeders/                # Database seeders
│   ├── models/                 #  Sequelize models
│   ├── index.ts                # Entry point of the server
│   ├── package.json            # Server dependencies and scripts
│   └── ...                     # Other files and folders
├── README.md                   # Project documentation
└── ...                         # Other files

## Project Setup

Follow these steps to set up the project locally:

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>=14.x.x)
- npm (>=6.x.x) or yarn (>=1.x.x)
- PostgreSQL (>=12.x.x)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/art-store.git
    cd art-store
    ```

2. Install dependencies for the client:
    ```sh
    cd client
    npm install
    ```

3. Install dependencies for the server:
    ```sh
    cd ../server
    npm install
    ```

### Setting Up the Database

1. Install PostgreSQL from the [official website](https://www.postgresql.org/download/).

2. Create a new database for the project:
    ```sh
    createdb art_store_db
    ```

3. Configure Sequelize:
    - Create a `.env` file in the `server` directory with the following content:
        ```env
        DATABASE_URL=postgres://username:password@localhost:5432/art_store_db
        JWT_SECRET=your_jwt_secret_key
        ```
      Replace `username` and `password` with your PostgreSQL credentials and set your JWT secret key.

    - Ensure you have the required Sequelize CLI installed:
        ```sh
        npm install -g sequelize-cli
        ```

    - Generate the Sequelize configuration file:
        ```sh
        npx sequelize-cli init
        ```

    - Update the `config/config.json` file with your database configuration:
        ```json
        {
          "development": {
            "username": "your_db_username",
            "password": "your_db_password",
            "database": "art_store_db",
            "host": "127.0.0.1",
            "dialect": "postgres"
          },
          "test": {
            "username": "your_db_username",
            "password": "your_db_password",
            "database": "art_store_test_db",
            "host": "127.0.0.1",
            "dialect": "postgres"
          },
          "production": {
            "username": "your_db_username",
            "password": "your_db_password",
            "database": "art_store_prod_db",
            "host": "127.0.0.1",
            "dialect": "postgres"
          }
        }
        ```

4. Run the Sequelize migrations to set up the database schema:
    ```sh
    npx sequelize-cli db:migrate
    ```

### Running the Project

1. Start the server:
    ```sh
    cd server
    npm run build
    npm start
    ```
    By default, the server will run on `http://localhost:5000`.

2. Start the client:
    ```sh
    cd ../client
    npm run dev
    ```
    By default, the client will run on `http://localhost:3000`.

3. Access the application:
    Open your web browser and navigate to `http://localhost:3000` to use the application.

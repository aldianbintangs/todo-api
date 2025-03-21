# To-Do List API with Bun and Hono.js

![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![Hono.js](https://img.shields.io/badge/Hono.js-%23000000.svg?style=for-the-badge&logo=hono&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

A simple and efficient To-Do List API built with **Bun** (a fast JavaScript runtime) and **Hono.js** (a lightweight web framework). This project is designed to showcase backend development skills and is suitable for portfolios.

---

## Features

- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Validation**: Request validation using **Zod**.
- **Lightweight**: Built with Bun and Hono.js for high performance.
- **Environment Variables**: Secure configuration using `.env`.
- **Modular Code**: Organized into controllers, models, and routes for scalability.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-api.git
   cd todo-api
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following variable:
     ```env
     PORT=3000
     ```

4. **Run the server**:
   ```bash
   bun run src/index.js
   ```

5. **Access the API**:
   - The server will run at `http://localhost:3000`.

---

## Usage

### API Endpoints

#### 1. **Get All Tasks**
- **Method**: `GET`
- **URL**: `/api/todos`
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "Belajar Hono.js",
      "completed": false
    },
    {
      "id": 2,
      "title": "Buat proyek portfolio",
      "completed": false
    }
  ]
  ```

#### 2. **Create a New Task**
- **Method**: `POST`
- **URL**: `/api/todos`
- **Body**:
  ```json
  {
    "title": "Belajar Bun"
  }
  ```
- **Response**:
  ```json
  {
    "id": 3,
    "title": "Belajar Bun",
    "completed": false
  }
  ```

#### 3. **Update a Task**
- **Method**: `PUT`
- **URL**: `/api/todos/:id`
- **Body**:
  ```json
  {
    "title": "Update judul",
    "completed": true
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Update judul",
    "completed": true
  }
  ```

#### 4. **Delete a Task**
- **Method**: `DELETE`
- **URL**: `/api/todos/:id`
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Belajar Hono.js",
    "completed": false
  }
  ```

---

## Environment Variables

The following environment variables are used in this project:

| Variable | Description               | Default Value |
|----------|---------------------------|---------------|
| `PORT`   | Port for the server to run on | `3000`        |

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Bun](https://bun.sh/) for the fast JavaScript runtime.
- [Hono.js](https://hono.dev/) for the lightweight web framework.
- [Zod](https://zod.dev/) for schema validation.

---

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Name**: Aldiansyah Bintang Setiawan
- **Email**: abintangs26@gmail.com
- **GitHub**: https://github.com/aldianbintangs

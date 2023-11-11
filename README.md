# CRUD CashControl

This README provides instructions on how to use the CRUD (Create, Read, Update, Delete) API implemented using Express.js and Prisma. The API supports three entities: Category, Dish, and Revenue.

## Prerequisites
- Node.js installed on your machine
- NPM (Node Package Manager) installed

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your/repository.git
   cd repository
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Database:**

   - Ensure you have a running database server (e.g., PostgreSQL).
   - Configure the database connection in the `prisma/client` file.
   - Run Prisma migrations:

     ```bash
     npx prisma migrate dev
     ```

4. **Run the Server:**

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:8888`.

## API Endpoints

### Category

- **Read All Categories:**
  - Endpoint: `GET /category`
  - Response: Array of categories.

- **Create a Category:**
  - Endpoint: `POST /category`
  - Request Body: JSON with `name` property.
  - Response: Created category.

- **Update a Category:**
  - Endpoint: `PUT /category/:id`
  - Request Body: JSON with updated `name`.
  - Response: Updated category.

- **Delete a Category:**
  - Endpoint: `DELETE /category/:id`
  - Response: Deleted category.

### Dish

- **Read All Dishes:**
  - Endpoint: `GET /dish`
  - Response: Array of dishes.

- **Create a Dish:**
  - Endpoint: `POST /dish`
  - Request Body: JSON with `name`, `price`, `category_id`, and `date`.
  - Response: Created dish.

- **Update a Dish:**
  - Endpoint: `PUT /dish/:id`
  - Request Body: JSON with updated `name`, `price`, `category_id`, and `date`.
  - Response: Updated dish.

- **Delete a Dish:**
  - Endpoint: `DELETE /dish/:id`
  - Response: Deleted dish.

### Revenue

- **Read All Revenues:**
  - Endpoint: `GET /revenue`
  - Response: Array of revenues.

- **Create a Revenue:**
  - Endpoint: `POST /revenue`
  - Request Body: JSON with `name`, `price`, `category_id`, and `date`.
  - Response: Created revenue.

- **Update a Revenue:**
  - Endpoint: `PUT /revenue/:id`
  - Request Body: JSON with updated `name`, `price`, `category_id`, and `date`.
  - Response: Updated revenue.

- **Delete a Revenue:**
  - Endpoint: `DELETE /revenue/:id`
  - Response: Deleted revenue.

## Tips

- Use tools like [Postman](https://www.postman.com/) to interact with the API.
- Customize the database connection in the Prisma configuration for your specific database.

Feel free to explore and modify the code as needed for your specific use case!
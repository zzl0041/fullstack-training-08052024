Based on hw1 in lecture 9, you are required to implement authentication and authorization for the APIs.

1. Create a new API for login

   - `/api/login`, returning JWT token for authentication and authorization
   - you can use `firstName` as username and `lastName` as password or any other combination that make sense to you

2. Modify existing APIs to accomodate authentication and authorization as following:
   - only logged-in user can have access to get all information from employees, e.g.: logged-in user can retrieve all the fields of employees, while the anonymous can only get `firstName` and `lastName`
   - only logged-in user can have access to get all employees of it's own company, e.g.: employees with company A have access to get employees of company A, ONLY

# Design and Implementation Overview
This project adds authentication and authorization to APIs for managing companies and employees. There are two types of users: anonymous users and logged-in users.

## User Roles

### Anonymous Users
- Can only see `firstName` and `lastName` of employees.
- Cannot create, update, or delete companies or employees.
- Cannot access detailed employee data.

### Logged-In Users
- Must log in using `/api/login` to get a JWT token.
- Can access all employee details for their own company.
- Can create, update, and delete companies and employees

## API Endpoints

### Authentication
- **Login**: `/api/login`
  - Returns a JWT token for authentication.
  
### Company APIs
- **Create a Company**: `/api/companies` (POST) - Logged-in users only.
- **Get a Company**: `/api/companies/:id` (GET) - Available to everyone.
- **Update a Company**: `/api/companies/:id` (PUT) - Logged-in users only.
- **Delete a Company**: `/api/companies/:id` (DELETE) - Logged-in users only.
- **Get All Companies**: `/api/companies` (GET) - Available to everyone.
- **Get Company Employees**: `/api/companies/:id/employees` (GET) - Logged-in users only, employees of it's own company only.

### Employee APIs
- **Create an Employee**: `/api/employees` (POST) - Logged-in users only.
- **Get an Employee**: `/api/employees/:id` (GET) - Anonymous users see names, logged-in users see all info.
- **Update an Employee**: `/api/employees/:id` (PUT) - Logged-in users only.
- **Delete an Employee**: `/api/employees/:id` (DELETE) - Logged-in users only.
- **Get All Employees**: `/api/employees` (GET) - Anonymous users see names, logged-in users see all info.
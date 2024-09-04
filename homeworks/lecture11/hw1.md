Based on hw1 in lecture 9, you are required to implement authentication and authorization for the APIs.

1. Create a new API for login

   - `/api/login`, returning JWT token for authentication and authorization
   - you can use `firstName` as username and `lastName` as password or any other combination that make sense to you

2. Modify existing APIs to accomodate authentication and authorization as following:
   - only logged-in user can have access to get all information from employees, e.g.: logged-in user can retrieve all the fields of employees, while the anonymous can only get `firstName` and `lastName`
   - only logged-in user can have access to get all employees of it's own company, e.g.: employees with company A have access to get employees of company A, ONLY

## API Endpoints

### Authentication

POST /api/login: User login

### Employee APIs

- GET /api/employees: Get all employees, **Logged-in users can get all user information, Anonymous can only get `firstName` and `lastName`**
- GET /api/employees/:id: Get employee by ID
- POST /api/employees: Create a new employee
- PUT /api/employees/:id: Update employee details
- DELETE /api/employees/:id: Delete an employee

### Company APIs

- GET /api/companies: Get all companies
- GET /api/companies/:id: Get company by ID
- POST /api/companies: Create a new company
- PUT /api/companies/:id: Update company details
- DELETE /api/companies/:id: Delete a company
- GET /api/companies/:id/employees: Get all employees of a company, **ONLY for logged-in users, ONLY have access to employees of their own company**

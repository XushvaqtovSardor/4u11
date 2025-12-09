# CRM System API Documentation

## Overview
Complete CRM system with role-based access control, JWT authentication, OTP verification, and Cloudinary image uploads.

## Super Admin Credentials
- **Username:** `superadmin`
- **Password:** `admin10`

## Features
- ✅ JWT Authentication
- ✅ Role-Based Access Control (SuperAdmin, Admin, Teacher, Student)
- ✅ Permission-Based Authorization
- ✅ OTP Email Verification for Teachers & Students
- ✅ Cloudinary Image Upload
- ✅ Password Change for all users
- ✅ Soft Delete Support

## Roles & Permissions

### SuperAdmin
- Full access to all endpoints
- Can create Admins and assign permissions
- Can change own password

### Admin
- Access based on assigned table permissions (read, write, update, delete)
- Permissions defined per table (branches, courses, groups, teachers, students, etc.)
- Can change own password

### Teacher
- Can view own information
- Can view assigned groups and students
- Can change own password
- Must verify email via OTP after registration

### Student
- Can view own information
- Can view assigned groups and teachers
- Can change own password
- Must verify email via OTP after registration

---

## Authentication Endpoints

### 1. Login
**POST** `/auth/login`

**Request Body:**
```json
{
  "identifier": "superadmin",
  "password": "admin10",
  "role": "staff"
}
```

**Role Options:**
- `staff` - For SuperAdmin/Admin (uses username)
- `teacher` - For Teachers (uses email)
- `student` - For Students (uses email)

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "fullName": "Super Admin",
    "role": "staff",
    "staffRole": "SuperAdmin",
    "permissions": []
  }
}
```

### 2. Verify OTP (Teacher)
**POST** `/auth/verify-otp/teacher`

**Request Body:**
```json
{
  "email": "teacher@example.com",
  "otp": "123456"
}
```

### 3. Verify OTP (Student)
**POST** `/auth/verify-otp/student`

**Request Body:**
```json
{
  "email": "student@example.com",
  "otp": "123456"
}
```

### 4. Change Password
**PUT** `/auth/change-password`

**Headers:**
```
Authorization: Bearer <access_token>
```

**Request Body:**
```json
{
  "oldPassword": "admin10",
  "newPassword": "newpassword123"
}
```

---

## Branch Endpoints

### Create Branch
**POST** `/branches`

**Headers:**
```
Authorization: Bearer <access_token>
```

**Request Body:**
```json
{
  "name": "Main Branch",
  "logo": "https://example.com/logo.png",
  "address": "123 Main St, City",
  "status": "ACTIVE"
}
```

### Get All Branches
**GET** `/branches`

### Get Branch by ID
**GET** `/branches/:id`

### Update Branch
**PATCH** `/branches/:id`

### Delete Branch (Soft Delete)
**DELETE** `/branches/:id`

---

## Room Endpoints

### Create Room
**POST** `/rooms`

**Request Body:**
```json
{
  "name": "Room 101",
  "capacity": 30,
  "branchId": 1,
  "status": "ACTIVE"
}
```

### Get All Rooms
**GET** `/rooms`

### Get Room by ID
**GET** `/rooms/:id`

### Update Room
**PATCH** `/rooms/:id`

### Delete Room (Soft Delete)
**DELETE** `/rooms/:id`

---

## Course Endpoints

### Create Course
**POST** `/course`

**Request Body:**
```json
{
  "name": "JavaScript Basics",
  "price": 150.00,
  "durationMonth": 3,
  "durationHours": 120.5,
  "level": "Beginner",
  "branchId": 1,
  "status": "ACTIVE"
}
```

**Level Options:** `Beginner`, `Intermediate`, `Advanced`

### Get All Courses
**GET** `/course`

### Get Course by ID
**GET** `/course/:id`

### Update Course
**PATCH** `/course/:id`

### Delete Course (Soft Delete)
**DELETE** `/course/:id`

### Hard Delete Course
**DELETE** `/course/hard/:id`

---

## Group Endpoints

### Create Group
**POST** `/group`

**Request Body:**
```json
{
  "name": "JS-101",
  "branchId": 1,
  "roomId": 1,
  "courseId": 1,
  "startDate": "2025-01-15T00:00:00Z",
  "startLesson": "2025-01-15T09:00:00Z",
  "endDate": "2025-04-15T00:00:00Z",
  "status": "ACTIVE"
}
```

### Get All Groups
**GET** `/group`

### Get Group by ID
**GET** `/group/:id`

### Update Group
**PATCH** `/group/:id`

### Delete Group (Soft Delete)
**DELETE** `/group/:id`

---

## Teacher Endpoints

### Create Teacher (with OTP)
**POST** `/teachers`

**Headers:**
```
Authorization: Bearer <access_token>
Content-Type: multipart/form-data (if uploading photo)
```

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "teacher@example.com",
  "password": "password123",
  "branchId": 1,
  "status": "ACTIVE"
}
```

**With Photo Upload:**
```
fullName: John Doe
email: teacher@example.com
password: password123
branchId: 1
photo: [file]
```

**Response:**
```json
{
  "message": "Teacher created. OTP sent to email",
  "id": 1
}
```

### Get All Teachers
**GET** `/teachers`

**Teacher can only see own data. Staff/Admin can see all.**

### Get Teacher by ID
**GET** `/teachers/:id`

### Update Teacher
**PATCH** `/teachers/:id`

**Can include photo upload**

### Delete Teacher (Soft Delete)
**DELETE** `/teachers/:id`

---

## Student Endpoints

### Create Student (with OTP)
**POST** `/students`

**Headers:**
```
Authorization: Bearer <access_token>
Content-Type: multipart/form-data (if uploading photo)
```

**Request Body:**
```json
{
  "fullName": "Jane Smith",
  "email": "student@example.com",
  "password": "password123",
  "phone": "+998901234567",
  "branchId": 1,
  "status": "ACTIVE"
}
```

**Response:**
```json
{
  "message": "Student created. OTP sent to email",
  "id": 1
}
```

### Get All Students
**GET** `/students`

**Student can only see own data. Staff/Admin can see all.**

### Get Student by ID
**GET** `/students/:id`

### Update Student
**PATCH** `/students/:id`

### Delete Student (Soft Delete)
**DELETE** `/students/:id`

---

## Staff Endpoints

### Create Staff (Admin)
**POST** `/staff`

**Headers:**
```
Authorization: Bearer <SuperAdmin Token>
```

**Request Body:**
```json
{
  "fullName": "Admin User",
  "username": "admin1",
  "password": "password123",
  "phone": "+998901234567",
  "role": "Admin",
  "branchId": 1,
  "status": "ACTIVE"
}
```

### Get All Staff
**GET** `/staff`

### Get Staff by ID
**GET** `/staff/:id`

### Update Staff
**PATCH** `/staff/:id`

### Delete Staff (Soft Delete)
**DELETE** `/staff/:id`

---

## Permission Management

Permissions are automatically managed through the Permission table.

### Permission Structure
```json
{
  "staffId": 2,
  "tableName": "teachers",
  "canRead": true,
  "canWrite": true,
  "canUpdate": false,
  "canDelete": false
}
```

**Table Names:**
- `branches`
- `rooms`
- `courses`
- `groups`
- `teachers`
- `students`
- `staff`

---

## Image Upload (Cloudinary)

When creating/updating Teacher or Student with photo:

**Headers:**
```
Content-Type: multipart/form-data
Authorization: Bearer <access_token>
```

**Form Data:**
```
photo: [file]
fullName: John Doe
email: teacher@example.com
...
```

Images are automatically uploaded to Cloudinary and URL is saved.

---

## Error Responses

### 401 Unauthorized
```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### 403 Forbidden
```json
{
  "statusCode": 403,
  "message": "Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "statusCode": 404,
  "message": "Resource not found"
}
```

### 409 Conflict
```json
{
  "statusCode": 409,
  "message": "Email already exists"
}
```

---

## Testing Flow

### 1. Login as SuperAdmin
```bash
POST /auth/login
{
  "identifier": "superadmin",
  "password": "admin10",
  "role": "staff"
}
```

### 2. Create Admin with Permissions
```bash
POST /staff
{
  "fullName": "Admin User",
  "username": "admin1",
  "password": "admin123",
  "phone": "+998901234567",
  "role": "Admin",
  "branchId": 1
}
```

### 3. Create Teacher
```bash
POST /teachers
{
  "fullName": "Teacher Name",
  "email": "teacher@test.com",
  "password": "teacher123",
  "branchId": 1
}
```

### 4. Verify Teacher Email
```bash
POST /auth/verify-otp/teacher
{
  "email": "teacher@test.com",
  "otp": "123456"
}
```

### 5. Login as Teacher
```bash
POST /auth/login
{
  "identifier": "teacher@test.com",
  "password": "teacher123",
  "role": "teacher"
}
```

---

## Environment Variables

Create `.env` file:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/crm_2"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
CLOUD_NAME=dwudphzif
CLOUD_SECRET=nRerSQZJmXPuDRKosWF7WicwdpQ
API_KEY=481142186146699
```

---

## Installation

```bash
# Install dependencies
pnpm install

# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed SuperAdmin
npx ts-node prisma/seed.ts

# Run development server
pnpm start:dev
```

---

## Tech Stack
- **Framework:** NestJS
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT + Passport
- **File Upload:** Cloudinary
- **Email:** Nodemailer + Handlebars
- **Validation:** class-validator

---

## Project Structure
```
src/
├── common/
│   ├── cloudinary/      # Image upload service
│   └── email/           # Email service
├── modules/
│   ├── auth/            # Authentication & authorization
│   ├── branch/          # Branch management
│   ├── room/            # Room management
│   ├── course/          # Course management
│   ├── group/           # Group management
│   ├── teacher/         # Teacher management
│   ├── student/         # Student management
│   └── staff/           # Staff management
└── prisma/
    └── prisma.service.ts # Prisma client service
```

---

**All endpoints are protected with JWT authentication and role-based authorization!**

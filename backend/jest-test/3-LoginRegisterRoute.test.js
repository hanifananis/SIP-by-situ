import request from 'supertest';
import app from '../index.js';
import { response } from 'express';
import { loginUser, registerUser } from '../controllers/LoginRegisterController.js';

const authAPI = describe('Authorization API', () => {
    it('should register a new user', async () => {
        const registerUser = {
            "name": "Testing Register",
            "email": "register@example.com",
            "no_telp": "01234567890",
            "password": "regis123",
            "confirmPassword": "regis123"
        }
        const response = await request(app)
            .post('/register')
            .send(registerUser)

        expect(response.status).toBe(201)
        expect(response.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("User registered successfully")
        }))
    }, 15000)

    it('should not register a duplicate user', async () => {
        const registerUser = {
            "name": "Testing Register",
            "email": "register@example.com",
            "no_telp": "01234567890",
            "password": "regis123",
            "confirmPassword": "regis123"
        }
        const response = await request(app)
            .post('/register')
            .send(registerUser)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("E11000 duplicate key error collection: sip_db.users index: email_1 dup key: { email: \"register@example.com\" }")
        }))
    }, 10000)

    it('should not register a user with empty string name or whitespace only', async () => {
        const registerUser = {
            "name": "",
            "email": "register@example.com",
            "no_telp": "01234567890",
            "password": "regis123",
            "confirmPassword": "regis123"
        }
        const response = await request(app)
            .post('/register')
            .send(registerUser)

        expect(response.status).toBe(400)
        expect(response.body).toEqual(
            {
                "message": "Name cannot be empty or consist only of whitespace."
            }
        )
    }, 3000)

    it('should not register a new user without email', async () => {
        const registerUser = {
            "name": "Testing Register",
            "no_telp": "01234567890",
            "password": "regis123",
            "confirmPassword": "regis123"
        }
        const response = await request(app)
            .post('/register')
            .send(registerUser)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Users validation failed: email: Path `email` is required.")
        }))
    }, 3000)

    it('should not register a new user with invalid email', async () => {
        const registerUser = {
            "name": "Testing Register",
            "email": "registerexample.com",
            "no_telp": "01234567890",
            "password": "regis123",
            "confirmPassword": "regis123"
        }
        const response = await request(app)
            .post('/register')
            .send(registerUser)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Users validation failed: email: Invalid email address")
        }))
    }, 3000)

    it('should not register a new user without phone number', async () => {
        const registerUser = {
            "name": "Testing Register",
            "email": "register@example.com",
            "password": "regis123",
            "confirmPassword": "regis123"
        }
        const response = await request(app)
            .post('/register')
            .send(registerUser)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Users validation failed: no_telp: Path `no_telp` is required.")
        }))
    }, 3000)

    it('should not register a new user with invalid phone number', async () => {
        const registerUser = {
            "name": "Testing Register",
            "email": "register@example.com",
            "no_telp": "01234567",
            "password": "regis123",
            "confirmPassword": "regis123"
        }
        const response = await request(app)
            .post('/register')
            .send(registerUser)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Users validation failed: no_telp: Invalid phone number")
        }))
    }, 3000)

    it('should not register a new user without password', async () => {
        const registerUser = {
            "name": "Testing Register",
            "email": "register@example.com",
            "no_telp": "012345678910"
        }
        const response = await request(app)
            .post('/register')
            .send(registerUser)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Users validation failed: password: Path `password` is required.")
        }))
    },3000)

    it('should not register a new user with weak password', async () => {
        const registerUser = {
            "name": "Testing Register",
            "email": "register@example.com",
            "no_telp": "01234567890",
            "password": "regis",
            "confirmPassword": "regis"
        }
        const response = await request(app)
            .post('/register')
            .send(registerUser)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Users validation failed: password: Password is not strong enough")
        }))
    }, 3000)

    it('should not register a new user with different password', async () => {
        const registerUser = {
            "name": "Testing Register",
            "email": "register@example.com",
            "no_telp": "01234567890",
            "password": "regis123",
            "confirmPassword": "regis456"
        }
        const response = await request(app)
            .post('/register')
            .send(registerUser)

        expect(response.status).toBe(400)
        expect(response.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Passwords do not match")
        }))
    }, 3000)


    it('should login, get user info, change password, and then logout', async () => {
        // Login by email
        const loginUser = {
            "email": "register@example.com",
            "password": "regis123"
        }
        const loginResponse = await request(app)
            .post('/login')
            .send(loginUser)

        expect(loginResponse.status).toBe(200)
        expect(loginResponse.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Login successful")
        }))

        // Extract token
        const token = loginResponse.body.token

        // Get user info by token
        const getUserInfo = await request(app)
            .get('/user-info')
            .set('Authorization', `${token}`)

        expect(getUserInfo.status).toBe(200)
        expect(getUserInfo.body.userinfo).toEqual(
            expect.objectContaining({"name": expect.stringContaining("Testing Register")}),
            expect.objectContaining({"email": expect.stringContaining("register@example.com")}),
            expect.objectContaining({"no_telp": expect.stringContaining("01234567890")})
        )

        // Change password
        const changePassword = {
            "currentPassword": "regis123" , 
            "newPassword": "regis1234", 
            "confirmPassword": "regis1234"
        }
        const changePasswordResponse = await request(app)
            .post('/change-password')
            .set('Authorization', `${token}`)
            .send(changePassword)

        expect(changePasswordResponse.status).toBe(200)
        expect(changePasswordResponse.body).toEqual(
            {
                "message": "Password updated successfully"
            }
        )

        // Logout using the token
        const logoutResponse = await request(app)
            .post('/logout')
            .set('Authorization', `Bearer ${token}`)

        expect(logoutResponse.status).toBe(200)
        expect(logoutResponse.body).toEqual(
            {
                "message": "User logged out successfully"
            }
        )
    }, 25000)

    it('should not login with unregistered account', async () => {
        const loginUser = {
            "email": "unregister@example.com",
            "password": "regis123"
        }
        const loginResponse = await request(app)
            .post('/login')
            .send(loginUser)

        expect(loginResponse.status).toBe(400)
        expect(loginResponse.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("User not found")
        }))
    }, 3000)

    it('should not login with invalid email', async () => {
        const loginUser = {
            "email": "registerexample",
            "password": "regis123"
        }
        const loginResponse = await request(app)
            .post('/login')
            .send(loginUser)

        expect(loginResponse.status).toBe(400)
        expect(loginResponse.body).toEqual(
            {
                "message": "User not found"
            }
        )
    }, 3000)

    it('should not login without email', async () => {
        const loginUser = {
            "email": "",
            "password": "regis123"
        }
        const loginResponse = await request(app)
            .post('/login')
            .send(loginUser)

        expect(loginResponse.status).toBe(400)
        expect(loginResponse.body).toEqual(
            {
                "message": "User not found"
            }
        )
    }, 3000)

    it('should not login with wrong password', async () => {
        const loginUser = {
            "email": "register@example.com",
            "password": "password"
        }
        const loginResponse = await request(app)
            .post('/login')
            .send(loginUser)

        expect(loginResponse.status).toBe(401)
        expect(loginResponse.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Invalid password")
        }))
    }, 3000)

    it('should not login without password', async () => {
        const loginUser = {
            "email": "register@example.com",
            "password": ""
        }
        const loginResponse = await request(app)
            .post('/login')
            .send(loginUser)

        expect(loginResponse.status).toBe(401)
        expect(loginResponse.body).toEqual(
            {
                "message": "Invalid password"
            }
        )
    }, 3000)

    it('should not get user info by invalid token', async () => {
        const getUserInfo = await request(app)
            .get('/user-info')
            .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTgyNzQwODJkZGYwNzBiZmY4ZDM3YjciLCJlbWFpbCI6InJlZ2lzdGVyQGV4YW1wbGUuY29tIiwicm9sZXMiOiJ1c2VyIiwiaWF0IjoxNzAzMDQ4NzcyLCJleHAiOjE3MDMwNTIzNzJ9.ruXqM2OBOtcfl1Nz8w1t0r36LpHRLhwVS8p9kSjpE7U')

        expect(getUserInfo.status).toBe(401)
        expect(getUserInfo.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Invalid token.")
        }))
    }, 3000)

    it('should not get user info without token', async () => {
        const getUserInfo = await request(app).get('/user-info')

        expect(getUserInfo.status).toBe(401)
        expect(getUserInfo.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Access denied. No token provided.")
        }))
    }, 3000)

    it('should not change password by invalid token', async () => {
        const changePassword = {
            "currentPassword": "regis1234" , 
            "newPassword": "regis123", 
            "confirmPassword": "regis123"
        }
        const changePasswordResponse = await request(app)
            .post('/change-password')
            .set('Authorization', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThkMjg2ZGZkYjA5YTQwZGM0ZjBkMzYiLCJlbWFpbCI6InJlZ2lzdGVyQGV4YW1wbGUuY29tIiwicm9sZXMiOiJ1c2VyIiwiaWF0IjoxNzAzNzUwODExLCJleHAiOjE3MDM3NTQ0MTF9.v45LMky2kjwKRuhKhr9VfDrK-b5-aBKxrUdQcVNuGum`)
            .send(changePassword)

        expect(changePasswordResponse.status).toBe(401)
        expect(changePasswordResponse.body).toEqual(
            {
                "message": "Invalid token.",
                "error": "invalid signature"
            }
        )
    }, 3000);
    
    it('should not change password without token', async () => {
        const changePassword = {
            "currentPassword": "regis1234" , 
            "newPassword": "regis123", 
            "confirmPassword": "regis123"
        }
        const changePasswordResponse = await request(app)
            .post('/change-password')
            .send(changePassword)

        expect(changePasswordResponse.status).toBe(401)
        expect(changePasswordResponse.body).toEqual(
            {
                "message": "Access denied. No token provided."
            }
        )
    }, 3000);
})

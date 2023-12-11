import request from 'supertest';
import app from '../index.js';
import { response } from 'express';
import { loginUser, registerUser } from '../controllers/LoginRegisterController';

const loginAPI = describe('Login API', () => {
    it('should register a new user', async () => {
        const registerUser = {
            "name": "Testing Register",
            "email": "register@example.com",
            "no_telp": "1234567890",
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
    })

    it('should login by email and then logout', async () => {
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
    })
})

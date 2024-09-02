import express from 'express';
import {registerController,loginController,testController} from '../controllers/authController.js';

const router = express.Router();

// Route to get all users
// routing
// REGISTER || METHOD:POST
router.post("/register", registerController);

// LOGIN || POST(New Route)
router.post("/login", loginController);

// Test Routes
router.get("/test", testController);

// Route to create a new user

export default router;

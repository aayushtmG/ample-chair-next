import express from 'express'
import * as userController from '../controllers/userController.js'
import * as authController from '../controllers/authController.js'

const router = express.Router();

router.get('/',userController.getAllUsers);
router.patch('/:id',userController.updateUser);
router.delete('/delete/:id',userController.deleteUser);

router.post('/create-user',authController.signUp);
router.post('/signin',authController.signIn)
router.patch('/updatePassword/:id',authController.updatePassword);



export default router
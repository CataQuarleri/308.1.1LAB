import express from 'express';
import {getAllUsers, getOneUser, createOneUser, updateOneUser, deleteUser} from '../controller/users.js'
const router = express.Router();

router.get('/allUsers', getAllUsers)
router.get("/:id", getOneUser)
router.post('/addUser', createOneUser)
router.patch('/updateUser/:name', updateOneUser)
router.delete('/deleteUser/:name', deleteUser)

export default router 
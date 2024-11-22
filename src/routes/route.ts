import { Router} from 'express';
import { deleteUser, getAllUsers, getUser, postUser, updateUser } from '../controllers/controller';
const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:idUser', getUser);
router.post('/users', postUser);
router.put('/users/:idUser', updateUser);
router.delete('/users/:idUser', deleteUser);


export default router;



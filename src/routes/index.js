import express from 'express';
import user from './user';
import { ensureLogin } from './privilege';

const router = new express.Router();

router.get('/', async (req, res) => {
  res.send({ msg: 'HELLO WORLD' });
});


router.use(ensureLogin);
router.use('/user', user);

export default router;

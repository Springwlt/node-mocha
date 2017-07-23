import express from 'express';
import { User } from 'models';

const router = new express.Router();

router.get('/', async (req, res) => {
  const users = await User.find();
  return res.send({ users });
});

router.post('/login', async (req, res, next) => {
  const { name } = req.body;
  try {
    const user = await User.findOne({
      name,
    });
    if (user) {
      return res.send(user);
    }
    next({ msg: 'wrong username or password', status: 401 });
  } catch (err) {
    next(err);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    console.log('调用成功');
    const { mobilephone, nickname, sex } = req.body;
    if (!mobilephone || !nickname || !sex) throw new Error('参数错误');
    let user;
    user = new User({
      mobilephone,
      nickname,
      sex,
      salt: 'abcdefghijklmnopqrstuvwxyz',
      hash: 'abcdefghijklmnopqrstuvwxyzjdjfgjdfdjjdo439t9re090r9e904ioeriorjeiojrijidjgfdjljrg',
    });
    user = await user.save();
    return res.send(user);
  } catch (err) {
    next(err);
  }
});
export default router;

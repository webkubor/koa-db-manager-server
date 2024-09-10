import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import UserController from './controllers/users';
import RecommendsController from './controllers/recommends';
const router = new Router();
router.use(bodyParser());

router.get('/', async (ctx) => {
  ctx.body = 'Hello come webkubor local node server';
});

router.post('/', async (ctx) => {
  console.log('POST 请求参数:', ctx.request);
  ctx.body = ctx.request.body;
});


router.get('/recommends', RecommendsController.getRecommends);

router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUserById);
router.delete('/users/:id', UserController.deleteUserById);

const getRouter = () => router;

export default getRouter;
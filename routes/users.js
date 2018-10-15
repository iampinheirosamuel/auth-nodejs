import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* GET register users. */
router.get('/register', (req, res, next) => {
  res.render('register', {
    title: 'Register',
  });
});

/* GET member views. */
router.get('/member', (req, res, next) => {
  res.render('member', {
    title: 'Member Area',
  });
});

/* GET login views. */
router.get('/login', (req, res, next) => {
  res.render('login', {
    title: 'Login',
  });
});

module.exports = router;

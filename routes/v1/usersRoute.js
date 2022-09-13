const express = require('express');
const { getrandomUser } = require('../../controllers/users.controller');
const router =express.Router();

router.route("/").get(getrandomUser)


module.exports = router;
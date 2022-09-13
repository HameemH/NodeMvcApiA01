const express = require('express');
const { getrandomUser, getAllUser } = require('../../controllers/users.controller');
const router =express.Router();

router.route("/random").get(getrandomUser)
router.route("/all").get(getAllUser)


module.exports = router;
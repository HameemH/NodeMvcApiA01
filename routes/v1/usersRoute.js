const express = require('express');
const { getrandomUser, getAllUser, addAUser } = require('../../controllers/users.controller');
const router =express.Router();

router.route("/random").get(getrandomUser)
router.route("/all").get(getAllUser)
router.route("/save").post(addAUser)


module.exports = router;
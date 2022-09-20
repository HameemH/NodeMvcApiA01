const express = require('express');
const { getrandomUser, getAllUser, addAUser, removeAUser, updateAUser } = require('../../controllers/users.controller');
const router =express.Router();

router.route("/random").get(getrandomUser)
router.route("/all").get(getAllUser)
router.route("/save").post(addAUser)
router.route("/delete").delete(removeAUser)
router.route("/delete").patch(updateAUser)


module.exports = router;
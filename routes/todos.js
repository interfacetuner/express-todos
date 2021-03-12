const express = require("express");
const router = express.Router();

const todosCtrl = require('../controllers/todos');

//when the request makes it to this file, already at /todos..append to / automatic

router.get("/", todosCtrl.index);
router.get("/new", todosCtrl.new);
router.get("/:id", todosCtrl.show);
router.post("/", todosCtrl.create);
router.delete("/:id", todosCtrl.delete);
router.get("/:id/edit", todosCtrl.edit);
router.put("/:id/", todosCtrl.update);

module.exports = router;

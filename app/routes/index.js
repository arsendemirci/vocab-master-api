// const { getList } = require("../controllers/list.js");
const router = require("express").Router();

// middleware that is specific to this router
router.use("/list", require("./list.js"));

// middleware that is specific to this router
router.use("/word", require("./word.js"));

module.exports = router;

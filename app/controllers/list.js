const listService = require("../services/list.js");

module.exports = {
  getListById: async (req, res) => {
    try {
      console.log("getList method is triggered", req.params.listId);
      const id = req.params.listId;
      const response = await listService.getListById(id);
      res.json(response);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getListsAll: async (req, res) => {
    try {
      console.log("getListsAll method is triggered");
      const response = await listService.getListsAll();
      res.json(response);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

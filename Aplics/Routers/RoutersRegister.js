const express = require('express'); // chamando express
const router = express.Router(); // Fazendo rota
const controllerPeoples = require('../Controllers/ControllerRegister');

router.get("/all", controllerPeoples.listAll);
router.get("/", ( request, response ) => { response.send('TESTE DE ROTA INICIAL')});
router.get("/:identity", controllerPeoples.findPeopleForIdentity);

router.post("/add", express.urlencoded({extended:true}), controllerPeoples.addPeople);
router.post("/", express.json(), controllerPeoples.addPeople);// Rota para adicionar por JSON

router.delete("/:id", controllerPeoples.removePeople);
router.delete("/", express.json(), controllerPeoples.removePeople);

module.exports = router;
const express = require('express'); // chamando express
const router = express.Router(); // Fazendo rota
const controllerPeoples = require('../Controllers/ControllerRegister');


router.get("/", controllerPeoples.listAll);
router.get("/add", ( request , response ) => { response.render('add' ,{ erro:false ,body:{} })});
router.get('/edit/:id' , controllerPeoples.loadRegister); 
// router.get("/:identity", controllerPeoples.findPeopleForIdentity);

router.post("/" , express.urlencoded({extended:true}), controllerPeoples.addPeople);
router.post("/edit/:id" , express.urlencoded({extended:true}),controllerPeoples.editRegister);


router.post("/", express.urlencoded({extended:true}), controllerPeoples.addPeople);
router.post("/", express.json(), controllerPeoples.addPeople);// Rota para adicionar por JSON

router.delete("/:id",  controllerPeoples.removePeople);
router.delete("/", express.json(), controllerPeoples.removePeople);

router.patch("/:id",express.json(), controllerPeoples.updatePeople);

module.exports = router;
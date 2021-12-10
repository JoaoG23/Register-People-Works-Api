
const People = require('../Models/ModelRegister');

const listAll = async ( request, response ) => {
    
    try{
        let doc = await People.find({});
            response.send( doc );
            
        } catch ( erro ) {
            console.log( erro );
            response.send( erro );
            
        }     
  
}

const findPeopleForIdentity = async ( request, response ) => {
    
    let identityPeople = request.params.identity;

    try{
        let doc = await People.findOne({ identity:identityPeople });

        if(!doc){
            response.status(404).send('The document not exists');
        }
            response.send( doc );
            console.log( doc );
        } catch ( erro ) {
            console.log( erro );
            response.status(404).send( erro );
            
        }     
  
}

const addPeople = async ( request, response ) => {
    
    let theNewPeople = new People(request.body);

    try {
        let doc = await theNewPeople.save();
        response.send('Success! The new People Registed! 💾✔️');
        console.log( doc );

    } catch ( erro ) {
        response.status(404).send( erro );
        console.log( erro );
    }

    
}

const removePeople =  async ( request , response ) => {
    
    let idFound = request.params.id;

    if(!idFound){
        idFound = request.body.id;
    }
    if(idFound === undefined){

        response.status(404).send('Id undefined?');
    }

    try {

        await People.findByIdAndDelete(idFound);
        response.send('Deletado com sucesso ! X');
        console.log(idFound);
        
    } catch ( erro ) {
        console.log( erro );
        response.status(404).send( erro );
    }
}

module.exports = { listAll , findPeopleForIdentity , addPeople , removePeople };
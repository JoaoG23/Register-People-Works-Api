
const People = require('../Models/ModelRegister');

const listAll = async ( request, response ) => {
    
    try{
        let docs = await People.find({});

            
            response.render( 'all', { docs } );

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
            return response.status(404).send('The document not exists'); // O 'Return' e para que ele não exerculta a requisiçao para por aqui.
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
        response.redirect('/');
        

    } catch ( erro ) {
        response.render('add',{ erro , body: request.body });
        console.log( erro );
    }

    
}

const loadRegister = async ( request , response ) => {

    let idFound = request.params.id;
    try {
        let loadedRegister  = await People.findById(idFound);
        response.render('edit', { erro :false , body: loadedRegister });// Para rendenizar pelo servidor. EJS
        
    } catch ( erro ) {
        response.send( erro );
    }
} 

const editRegister = async ( request, response ) => {
    
    let people = {};

        people.yourName = request.body.yourName;
        people.age = request.body.age;
        people.identity = request.body.identity;
        people.weight = request.body.weight;
        people.size = request.body.size;
        people.profession = request.body.profession;
        people.nationality = request.body.nationality;
        people.street = request.body.street;
        people.country = request.body.country;



    let idFound = request.params.id;
    if(!idFound){
        idFound = request.body.id;
    }

    try {
        let doc = await People.updateOne({ _id: idFound },people);
        console.log( doc );
        response.redirect('/');

    } catch (erro) {
        response.render('edit',{ erro , body: request.body});
    }

}


const removePeople =  async ( request , response ) => {
    
    let idFound = request.params.id;

    if(!idFound){
        idFound = request.body.id;
    }

    try {

        await People.findByIdAndDelete(idFound);
        response.send(idFound);// ATENCÃO = ISSO O QUE SERA ENVIADO PARA O FECTH NO Front-end, por isso não mude essa isso! Lembre disso Att: Joao!
        console.log(idFound);
        
    } catch ( erro ) {
        console.log( erro );
        response.status(404).send( erro );
    }
}


const updatePeople =  async ( request , response ) => {
    
    let idFound = request.params.id;

    const {yourName,age,identity,weight,size,profession,nationality,street,country} = request.body;

    const infoPeople = {
        yourName,
        age,
        identity,
        weight,
        size,
        profession,
        nationality,
        street,
        country
    }

    try {

        const updatedPeople = await People.updateOne({_id:idFound},infoPeople);

        if(updatedPeople.matchedCount === 0) {
            response.status(422).json({message: 'Not found Register of The people! X'}); 
            return
        }
        response.status(200).send(infoPeople);

    } catch ( erro ) {
        response.status(500).send( erro );
    }



}


module.exports = { listAll , findPeopleForIdentity , addPeople , removePeople , updatePeople , loadRegister , editRegister };
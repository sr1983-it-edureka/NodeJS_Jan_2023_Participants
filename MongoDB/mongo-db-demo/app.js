

const mongoose = require("mongoose");

const MONGODB_URL = `mongodb+srv://root:mypassword@cluster1.6ygaca6.mongodb.net/demo?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URL)
  .then( () => {
    console.log("MongoDB Connected Successfully....");
  })
  .catch( (error) => {
    console.log("Connection failed " + error);
  })

const gitHubCloudProvider = {
  id: "1",
  name : "GitHub",
  owner : "Microsoft",
  services: ["Storage for Source code", "Version Control Operations on Source Code"]
}

const cloudProviderSchemaStructure = {
  id: String,
  name: String,
  owner: String,
  services: [String],
  freeSubsciptionApplicable: Boolean,
  tag2: String,
}

const CloudProvider = mongoose.model("cloudProvider", cloudProviderSchemaStructure);

// CloudProvider [Class]
// gitHub, dropbox, aws, azure

// Employee [Class]
// john, jenny, michael [objects]


async function createSampleCloudProvider(){

  const gitHubCP = new CloudProvider({
    name : "GitHub",
    owner : "Microsoft",
    services: 
    ["Storage for Source code", "Version Control Operations on Source Code"],
    freeSubsciptionApplicable: true   
  });

  const result = await gitHubCP.save();
  console.log("Result is " + result);
}


async function createSampleCloudProvider2(){

  const azureCP = new CloudProvider({
    name : "Azure",
    owner : "Microsoft",
    services: 
    ["Cloud Storage Service for Network/Security", "Cloud Services DevOps", "Cloud Services for Database Instances"],
    freeSubsciptionApplicable: false  
  });

  const result = await azureCP.save();
  console.log("Result is " + result);
}


async function createSampleCloudProvider3(){

  const azureCP = new CloudProvider({
    name : "Google Photos",
    owner : "Google",
    services: 
    ["Storage Service for Photos/Albums", "Photo Editing Tools"], 
    tag2: "Tag2 Test",
    freeSubsciptionApplicable: true
  });

  const result = await azureCP.save();
  console.log("Result is " + result);
}

/*
save(obj);

save({id: 1, name: 'hello'});
save({id: 1, name: 'hello', firstName: '', lastName: ''});
*/


// createSampleCloudProvider();
// createSampleCloudProvider2();
// createSampleCloudProvider3();


async function listAll(){

  const cloudProviderInstances = await CloudProvider.find();

  // cloudProviderInstances.forEach( (cloudProviderInstance) => {

  //   console.log(cloudProviderInstance._id);
  //   console.log(cloudProviderInstance.__v);
  //   console.log(cloudProviderInstance.tag3);

  // })

  console.log(cloudProviderInstances);
}

// listAll();


async function listAllBasedOnFilters(){

  const cloudProviderInstances = await CloudProvider.find(
    {
      freeSubsciptionApplicable : false
      // , tag2: false
    }
  );

  console.log(cloudProviderInstances);
}

// listAllBasedOnFilters();

async function updateDocument(id){

  const cloudProviderDocument = await CloudProvider.findById(id);

  cloudProviderDocument.set(
    {
      name: "Photo Service by Google",
      freeSubsciptionApplicable : false,
      services: [
        "Migrate photos from other accounts", 
        ...cloudProviderDocument.services, 
        "Photos Export Feature"]
      /*newAttr1: "New Attr1 Value",
      newAttr2: "New Attr2 Value"*/
    }
  )

  const operationResult = await cloudProviderDocument.save();

  console.log("Operation Result->" + operationResult);

}
// updateDocument("63df0ba83bac56fd070c8296");



async function updateDocument2(id){

  console.log("Update Document v2 is called...")

  const updatedDocument = await CloudProvider.updateOne(
    {
      _id: id
    },
    {
      // $addToSet
      $set : {
        name: "Photo Service by Google - 3",
        newAttr1: "New Attr1 Value",
        newAttr2: "New Attr2 Value"
      }
    },
    // {upsert : false}
  )

  console.log("Operation Result->" + JSON.stringify(updatedDocument));
}

// Update (1) -> 1 NOT EXISTING -> FAIL
// Insert (1) -> 1 EXISTING - FAIL
// Upsert [Update / Insert] Upsert(1) -> 1

// updateDocument2("63df0ba83bac56fd070c8296");


async function deleteDocument(id){


  // Delete Variation 1

  const outcome = await CloudProvider.deleteOne({
    _id : id
  })

  console.log("Delete Operation Outcome->" + JSON.stringify(outcome));


  CloudProvider.deleteMany()

  const multipleDocuments = CloudProvider.deleteMany({
    freeSubsciptionApplicable : true
  })
}

// deleteDocument("63df0ba83bac56fd070c8296");


async function deleteDocuments(ids){

  /*const  id1 = "1e23232323";
  const id2 = "434343333";
  const ids = ["3434343", "43434343"];*/

  const deleteQuery = {_id : {
    $in : ids
  }};


  const outcomes = await CloudProvider.deleteMany(
    deleteQuery, (error) =>{
      if (error){
        console.log("Error is " + error);
      }
    });

  console.log("Outcome ->" + JSON.stringify(outcomes));

}

deleteDocuments(["63df2865dd5fdb5901e811ef", "63df2875a7236808e1e48c45"])

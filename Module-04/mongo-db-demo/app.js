

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
  tag1: String,
  tag2: String,
}

const CloudProvider = mongoose.model("serviceProvider", cloudProviderSchemaStructure);

// CloudProvider [Class]
// gitHub, dropbox, aws, azure

// Employee [Class]
// john, jenny, michael [objects]

async function createSampleCloudProvider(){

  const gitHubCP = new CloudProvider({
    name : "GitHub",
    owner : "Microsoft",
    services: 
    ["Storage for Source code", "Version Control Operations on Source Code"]    
  });

  const result = await gitHubCP.save();
  console.log("Result is " + result);
}


async function createSampleCloudProvider2(){

  const azureCP = new CloudProvider({
    name : "Azure",
    owner : "Microsoft",
    services: 
    ["Cloud Storage Service for Network/Security", "Cloud Services DevOps", "Cloud Services for Database Instances"]    
  });

  const result = await azureCP.save();
  console.log("Result is " + result);
}


async function createSampleCloudProvider3(){

  const azureCP = new CloudProvider({
    name : "Azure",
    owner : "Microsoft",
    services: 
    ["Cloud Storage Service for Network/Security", "Cloud Services DevOps", "Cloud Services for Database Instances"], 
    tag2: "Tag2 Test"
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


async function getAll(){

  const cloudProviderInstances = await CloudProvider.find();

  cloudProviderInstances.forEach( (cloudProviderInstance) => {

    console.log(cloudProviderInstance._id);
    console.log(cloudProviderInstance.__v);
    console.log(cloudProviderInstance.tag3);

  })

  // console.log(cloudProviderInstances);

}

getAll();
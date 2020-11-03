// Create a database named patients
use patients or use hospital (better name)

// Verify that the database was created
show dbs

// Insert 3 Patient Records with at least 1 history entry per patient
db.patients.insertMany([
  {"firstName": "Aaron",
  "lastName": 'Carpenter',
  "age": 33,
  "history": [
    { "disease": "cold",
      "treatment": 'zpack'}
  ]},
    {"firstName": "Tony",
    "lastName": 'Soprano',
    "age": 55,
    "history": [
      { "disease": "cold",
        "treatment": 'cocaine'}
    ]},
    {"firstName": "Big",
    "lastName": 'Pussy',
    "age": 50,
    "history": [
      { "disease": "cold",
        "treatment": 'meth'}
    ]}
])

// Verify the records are in correctly
db.patients.find().pretty()

// Update patient data of 1 patient with new age, name, and history entry
db.patients.updateOne({ firstName: 'Big' }, {$set: {firstName: 'HoodFame Go Yayo', age: 27, 
        "history": [{
          bigDiseases: 'The Clap',
          percocetPopper: 'Yes'
        }]}})


// Find all patients who are older than 50
db.patients.find({age: {$gt: 50}}).pretty()

// Delete all patients who got a cold as a disease
db.patients.deleteMany({"history.disease": 'cold'});






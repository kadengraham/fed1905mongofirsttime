const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    const db = client.db("KadenDB");

    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoBD Server!!');

    //Create

    // db.collection('MyTestingApp').insertOne({
    //     taskName: 'Get some food',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         console.log('There was an issur when inserting data!');
    //     }
    // })
    // db.collection('MyTestingApp').insertMany([{
    //     taskName: 'Complete task 12',
    //     completed: true
    // },{
    //     taskName: 'Complete task 2',
    //     completed: false
    // },{
    //     taskName: 'Complete task 3',
    //     completed: false
    // },{
    //     taskName: 'Complete task 4',
    //     completed: false
    // }], (err, result) => {
    //     if(err){
    //         console.log('There was an issue when inserting Many!');
    //     }
    // })

    //Delete
    //deleteOne
    // db.collection('MyTestingApp').deleteOne({taskName: "Get some food"}).then((result) => {
    //     console.log(result);
    // });
    //deleteMany
    // db.collection('MyTestingApp').deleteMany({completed: false}).then((result) => {
    //     console.log(result);
    // });
    // db.collection('MyTestingApp').deleteMany({taskName: "Complete task 2"}, {taskName: "Complete task 12"}, {taskName: "Complete task 4"}).then((result) => {
    //        console.log(result);
    //     });

    //Update
    db.collection('MyTestingApp').updateOne({taskName: "Complete task 2"}, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result);
    });



    client.close();
})
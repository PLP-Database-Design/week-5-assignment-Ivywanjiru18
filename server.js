// Declare dependecies/variables

const express=require('express');
const app=express();
const mysql=require('mysql2');
const dotenv=require('dotenv');
const cors=require('cors');


app.use(express.json());
app.use(cors());
dotenv.config();

// Connect the the database ***

const db=mysql.createConnection(
    {
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME
    });


    //Check if db connection works
    db.connect((err) => {
        
        //GET METHOD
        app.set('view engine','ejs');
        app.set('views',_dirname+'/views');
        //question one
        app.get('/data',(req,res)=> {
            //Retrieve data from database
            db.query('SELECT patient_id,first_name,last_name,date_of_birth patients FROM patients;',(err,results)=>{
                if(err){
                    console.log(err);
                    res.status(500).Send('Error retrieving data');
            
                }else{
                    //Display the records to the browser
                    res.render('data',{results:results});
                }
            });
        });
        //question two
        app.get('/providers', (req,res) =>{
            const providers = 'SELECT first_name, last_name, provider_specialty FROM providers';
    
            // Query from the database
            db.query(providers, (err, results) =>{
                if(err){
                    console.log(err);
                    return res.status(500).send('Failed to get patients');
                }else{
                    // Display results to the browser
                    res.render('providers', {results: results})
                }
            })
        })
    //question threee

        app.get('/patients' , (req,res) =>{
            const patients = 'SELECT first_name FROM patients';
    
            // Query from the database
            db.query(patients, (err, results) =>{
                if(err){
                    console.log(err);
                    return res.status(500).send('Failed to get patients');
                }else{
                    // Display the results to the browser
                    res.render('patients', {results: results})
           }
        });
    });
    app.get('/specialty', (req,res) =>{
        const specialty = 'SELECT provider_specialty FROM providers';

        // Query from the database
        db.query(specialty, (err,results) =>{
            if(err){
                console.log(err);
                return res.status(500).send('Failed to get specialty');
            }else{
                // Display the reults to the browser
                res.render('specialty', {results: results})
            }
        });
    });
});




    // No wedding today
        if(err) return console.log("Error connecting to mysql db");
        //Yes wedding connected
        console.log("Connected to mysql successfully as id:" ,db.threadId)
// listening to server
        app.listen(process.env.PORT,()=>{
            console.log(`Server listening on port${process.env.PORT }`);

            // Send a message to the browser
            console.log('Sending message to broswer...');
            app.get('/',(req,res)=>{
                res.send('Server started successfully!Wedding can go ON!!!')
            });

        });

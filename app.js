const express = require('express');
const app = express();
const bodyparser=require('body-parser');
const port = 8000;
const library=require('./Model/model')
const cors = require('cors');
const { Sequelize } = require('sequelize');
const mysql=require('./util/database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.post('/add', async (req, res) => {
   // const entries={bookName,currentDate,returnDate,fine};
    const bname = req.body.bookName;
    const cdate= req.body.currentDate;
    const rdate = req.body.returnDate;
    const fine=req.body.fine;
    console.log(`bname: ${bname}, cdat: ${cdate}, rdate: ${rdate} fine${fine}`);
  
    try {
      const user = await library.create({
        bookname: bname,
        currentdate: cdate,
        returndate: rdate,
        fine:Number(fine)

      });
      console.log(user); // Log the created user
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error creating the expense');
    }
  })
  app.get('/get',async(req,res)=>{
    try{
        const books=await library.findAll()
        // const difference=new Date(entry.returndate)-new Date();
        // difference=difference/1000*60*60;

      
        console.log(books);
        res.status(200).send(books);

    }
    catch(error){
        console.log(error)
        res.status(500).send("Can not be fatch")

    }
  })

  mysql.sync({force:false})
  .then(res=>{
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    
  })
  .catch(err=>{
    console.log(err);
  })



  



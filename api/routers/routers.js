import { Router } from "express";
import passport from "passport";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import { initClient } from "../db/mongo.js";
import { createUserData, hash } from "../middleware/auth/hash.js";
import { ExtractJwt } from "passport-jwt";

//Initialize MongoDB client and database:
const client = await initClient();
const db = client.db();

const registerRegularRoutes = (app) => {

    app.post("/login", (req, res, next) => {
        passport.authenticate("local", (err, user) => {
          if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
          }
          if (!user) {
            return res.status(401).json({ error: "No user found" });
          }
          if(user) {

              const givenPassword = hash(user, req.body.password)
              if(givenPassword !== user.password) {
                return res.status(401).json({ error: "Invalid username or password" });
              }
              
          }

          const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN_HOURS * 60 * 60 }
          );

          delete user.password
          delete user.salt
          delete user.saltParam
          return res.json({ token, ...user });
        })(req, res, next);

      });
      
    app.post("/register", async (req, res) => {
      // deze dingen zijn ook nodig email: "",
//     birthdate: "",
//     phone: "",
//     address_street: "",
//     address_number: "",
//     address_postalcode: "",
//     address_city: "",
//     role: "gebruiker"
        const { username, password, email, birthdate, phone, address_street, address_number, address_postalcode, address_city, role} = req.body;
        try {
          // Check if the username already exists
          const existingUser = await db.collection("users").findOne({ username });
          if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
          }

          // Create a new user
          const newUser = createUserData({ username, password , email, birthdate, phone, address_street, address_number, address_postalcode, address_city, role})

          // Insert the user into the database
          await db.collection("users").insertOne(newUser);
      
          // Generate a new token for the registered user
          const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN_HOURS * 60,
          });

          delete newUser.password
          delete newUser.salt
          delete newUser.saltParam
          res.json({ token, ...newUser });
          
        } catch (error) {
          console.log(error)
          res.status(500).json({ error: "Internal Server Error" });
        }
      });
      
}

const registerMakelaarRoutes = (app) => {
    const adminRouter = Router();

    adminRouter.use(passport.authenticate("jwt", { session: false, failWithError: true }));

    adminRouter.post("/makelaar", async (req, res) => {
        const makelaar = {
          ...req.body,
          };
          
        await db.collection("panden").insertOne(makelaar);

        res.json(makelaar);
    });


    adminRouter.get("/huizen", async (req, res) => {

        const huizen = await db.collection("panden").find().toArray();
        res.json(huizen);
    });
    
    adminRouter.get("/huizen/:id", async (req, res) => {
        const id = req.params.id;
        const huis = await db.collection("panden").findOne({
          _id: ObjectId(id),
        });
        
        if (huis) {
          res.json(huis);
        } else {
          res.status(404).json({ error: "Not found" });
        }

    });
    

    adminRouter.get("/todos", async (req, res) => {

        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.id;

        console.log(userId)

        const todos = await db.collection("todos").find({ creator: userId }).toArray();
        res.json(todos);
      });

    adminRouter.post("/todos", async (req, res) => {
        const todo = {
          ...req.body,
        };      
        await db.collection("todos").insertOne(todo);
      
        res.json(todo);
      });
      
    adminRouter.patch("/todos/:id", async (req, res) => {
        const id = req.params.id;
        const todo = await db.collection("todos").findOne({
          _id: ObjectId(id),
        });


        if (todo) {
          const { _id, ...data } = req.body;
          const newData = { ...todo, ...data };
          await db.collection("todos").replaceOne(
            { _id: ObjectId(id) },
            newData
          );
      
          res.json(newData);
        } else {
          res.status(404).json({ error: "Not found" });
        }
      });

    adminRouter.get("/todos/:id", async (req, res) => {
      const id = req.params.id;
      const todo = await db.collection("todos").findOne({
        _id: ObjectId(id),
      });

      if (todo) {
        res.json(todo);
      } else {
        res.status(404).json({ error: "Not found" });
      }
    });
      
    adminRouter.delete("/todos/:id", async (req, res) => {
        const id = req.params.id;
      
        await db.collection("todos").deleteOne({
          _id: ObjectId(id),
        });
      
        res.json({});
      });

    app.use(adminRouter);

}


const registerRoutes = async (app) => {

    registerRegularRoutes(app)

    registerMakelaarRoutes(app)

    //// Custom error handler middleware to handle JWT authentication errors
    app.use((err, req, res, next) => {
        if (err.name === 'AuthenticationError') {
        res.status(401).json({ error: 'Token expired' });
        } else {
          console.log(err)
        res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}

export { registerRoutes };
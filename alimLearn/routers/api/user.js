const express = require('express');
let app = express();
const router = express.Router();
let uuid = require('uuid');
let users = require("../../users");

// get all users
router.get('/', function(req, res) {
    res.json(users)
})

// get user by id
router.get("/:id", (req, res) => {
    let found = users.some(user => user.id === parseInt(req.params.id))
    if (found){
        res.json(users.filter(user =>user.id === parseInt(req.params.id)))
    }else {
        res.sendStatus(400)
    }
})

// add new users

router.post("/", (req, res) => {
    let newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }
    if(!newUser.name || !newUser.email) {
        res.sendStatus(400)
    }

    users.push(newUser)
    res.json(users);
})

//  update users

router.put("/:id", (req, res)=>{
    let found = users.some(user => user.id === parseInt(req.params.id));
    if(found) {
        let updatedUser = req.body;
        users.forEach(user => {
            if (user.id === req.params.id) {
            user.name = updatedUser.name ? updatedUser.name : user.name;
            user.email = updatedUser.email ? updatedUser.email : user.email;
            res.json({msg: "User updated", user})
            }
        })
    }
})

// delete users

router.delete("/:id", (req, res) => {
    let found = users.some((user) => user.id === parseInt(req.params.id));
    if (found) {
       users = users.filter((user) => user.id !== parseInt(req.params.id));
        res.json({msg: "User deleted", users});
    }else{
        res.sendStatus(400);
    }
})

module.exports = router;


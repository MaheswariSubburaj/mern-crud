const db = 'mongodb://mern:mern@mongo1:27017/reactdb?authSource=reactdb&replicaSet=rs0';

export default db;

// db.createUser({user:"mern",pwd:"mern",roles:[{role:"readWrite",db:"reactdb"}]});
// mongosh -u localRoot -p localRootPassword --authenticationDatabase admin
// docker exec -it mongo1 mongosh -u localRoot -p localRootPassword --authenticationDatabase admin --eval 'db.createUser({user:"test",pwd:"mern",roles:[{role:"readWrite",db:"test"}]});'
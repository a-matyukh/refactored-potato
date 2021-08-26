import { MongoClient } from "mongodb"
const uri = "mongodb+srv://gomon28:kAm=EMltM4BY@cluster0.agwkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export let SuperUser = {
    async registration(newClinic) {
        await client.connect()
        await client.db("my_db").collection("clinics").insertOne(newClinic)
        await client.close()
    },
    async create(collection, doc) {
        await client.connect()
        await client.db("skydent").collection(collection).insertOne(doc)
        await client.close()
    }
}

export let Admin = {
    create(collection, doc) {
        client.connect(err => {
            const coll = client.db("skydent").collection(collection)
            coll.insertOne(doc, (err, res) => {
                if (err) console.log(err)
                console.log(res)
                client.close()
            })
        })
    },
    async edit(name, payload) {
        await client.connect()
        const res = await client.db("skydent").collection("bills").findOneAndUpdate(name, payload)
        console.log(res)
        await client.close()
    }
}
// let newClient = {name: "Fedia", age: 35}
// // Admin.create("clients", newClient)
// let newBill = {name: "Fedia", age: 35}
// // Admin.create("bills", newBill)

//4. Врач принимает и лечит
let Doctor = {
    edit(name, payload) {
        client.connect(err => {
            const coll = client.db("skydent").collection("clients")
            coll.findOneAndUpdate(name, payload, (err, res) => {
                if (err) console.log(err)
                console.log(res)
                client.close()
            })
        })
    }
}
// Doctor.edit({name: "Huedia"}, { $set: {name: "Ebedia"}})

// 5. Админ принимает бабло и закрывает заказ
// Admin.edit({name: "Fedia"}, {$set: {status: "paid"}})
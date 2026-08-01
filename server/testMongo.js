const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
"mongodb://sapnassm62062_db_user:Sapna123@ac-lzygecz-shard-00-00.v5lueik.mongodb.net:27017,ac-lzygecz-shard-00-01.v5lueik.mongodb.net:27017,ac-lzygecz-shard-00-02.v5lueik.mongodb.net:27017/DreamAspirant?tls=true&authSource=admin&retryWrites=true&w=majority";


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run(){

    try{

        await client.connect();

        await client.db("admin").command({ ping: 1 });

        console.log("MongoDB Connected Successfully ✅");

    }
    catch(error){

        console.log("MongoDB Error ❌");
        console.log(error.message);

    }
    finally{

        await client.close();

    }

}


run();
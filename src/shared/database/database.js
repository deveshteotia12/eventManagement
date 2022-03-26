import {mongoClient} from 'mongodb';
import config from '../../config';

let db;

const intializeClient=async ()=>{
    const client = await MongoClient.connect(config.databaseURL);
    return client.db();
}

export default async () =>{
    if(!db)
    {
        db=await intializeClient()
    }
    return db;
}
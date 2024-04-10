// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
try{
  const databaseName = await central(id)
  const result = await Promise.all([dbs[databaseName](id), vault(id)])
  .then(([result1, result2])=>{
    return {id: id, ...result1, ...result2}
  })
  return result
}catch (e){
  console.log('err', e)
}}

getUserData(10)
.then(userData => console.log(userData))
.catch(error => console.error("Error", error))

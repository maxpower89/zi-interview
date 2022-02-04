const service= require("./hierarchy.service")

async function getHierarchyForId(id) {
   let parents=await service.getParentsForId(id);
   const result=parents.join(" -> ")
   console.log( result );
}


const id = 9;
getHierarchyForId(id);

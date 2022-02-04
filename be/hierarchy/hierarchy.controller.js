const service= require("./hierarchy.service")

async function getHierarchyForId(id) {
   let parents=await service.getParentsForId(id);
   const result=parents.join(" -> ")
   return result;
}


module.exports = {
   getHierarchyForId
};
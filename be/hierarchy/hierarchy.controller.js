const service= require("./hierarchy.service")

async function getHierarchyForId(id) {
   let parents=await service.getParentsForId(id);
   return {parents};
}


module.exports = {
   getHierarchyForId
};
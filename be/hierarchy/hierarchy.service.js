const dbService= require("../db/db.service")

async function getParentsForId(id) {
   const parents=[];
   let root=await dbService.getHierarchyItemById(id)
   for(let current=root.level>1?await dbService.getHierarchyItemById(root.parentMemberId):undefined;
       current!=undefined;
       current=current.level>1?await dbService.getHierarchyItemById(current.parentMemberId):undefined
   ){
      parents[current.level-1]= {memberId:current.memberId,name:current.name};
   }
   return parents;

}

module.exports = {
   getParentsForId
};

const dbService= require("../db/db.service")

module.exports = async function (req, res, next) {
    const id=req.params.id;

    if(  res.locals.account.id==id){
        return next();
    }
    let root=await dbService.getHierarchyItemById(id)
    for(let current=root.level>1?await dbService.getHierarchyItemById(root.parentMemberId):undefined;
        current!=undefined;
        current=current.level>1?await dbService.getHierarchyItemById(current.parentMemberId):undefined
    ){
        if(res.locals.account.id==current.memberId){
            console.log("eq",res.locals.account.id,current.memberId)
            return next();
        }
    }
    res.status(403).json({message: 'error occurred during hierarchy restriction', error: "Permission denied"});
}
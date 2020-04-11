
GarrisonHolder.prototype.GetGarrisonedEntitiesCount = function() {


    let count = 0;
    for(let ent of this.entities) {

        count += Engine.QueryInterface(ent, IID_Cost).populationCost;

        let cmpGarrisonHolder = Engine.QueryInterface(ent, IID_GarrisonHolder);
        if(cmpGarrisonHolder) {
            count += cmpGarrisonHolder.GetGarrisonedEntitiesCount();
        }
    }
    return count;
};

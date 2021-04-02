
UnitAI.prototype.DefaultAttackEntitiesByPreference = UnitAI.prototype.AttackEntitiesByPreference;

UnitAI.prototype.AttackEntitiesByPreference = function(ents)
{
	if (this.stance == "violent")
	{
		return this.RespondToTargetedEntities(ents);
	}

	return this.DefaultAttackEntitiesByPreference(ents);
}

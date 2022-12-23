const Error = require('../components/schemas/Error');
const Entity = require('../components/schemas/Entity');
const EntityModel = require('../components/schemas/Entity');
const data = require('../sample/data.json');

const message = Error({ Error: "No se encuentra data en ese rango" });

function filterEntity(req, res) {
    const { startId, endId } = req.body;
            let entities = data.filter(entity => (entity.entityId >= startId && entity.entityId <= endId)).sort(
                (a, b) => {
                    return a.name.localeCompare(b.name);
                }
            );
            if (entities.length != 0) {
                res.status(200).json({ status: 200, message: "OK", data: entities });
            } else {
                res.status(404).json({ status: 404, message: message.Error });
            }
}

module.exports = {
    filterEntity
}
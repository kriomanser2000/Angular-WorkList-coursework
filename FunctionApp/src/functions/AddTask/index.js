const cosmos = require('@azure/cosmos');
const { CosmosClient } = cosmos;

module.exports = async function (context, req) 
{
  const client = new CosmosClient(process.env.COSMOSDB_CONNECTION_STRING);
  const database = client.database('TasksDb');
  const container = database.container('TasksContainer');
  const task = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    tags: req.body.tags,
    priority: req.body.priority,
    projectId: req.body.projectId || null
  };
  await container.items.create(task);
  context.res = {
    status: 200,
    body: task
  };
};
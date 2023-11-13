const { Deta } = require("deta");

const deta = Deta(process.env.DETA_PROJECT_KEY);

export const users = deta.Base("users");
export const projects = deta.Base("projects");
export const documents = deta.Base("documents");
export const histories = deta.Base("history");
export const payments = deta.Base("payment");

import * as azdev from "azure-devops-node-api";
import * as tl from "azure-devops-node-api/TaskApi";
import * as c from "azure-devops-node-api/CoreApi";
import preferences from "./utils/preferences";

// your collection url
const orgUrl = `https://dev.azure.com/${preferences.orgName.toLowerCase()}`;

if (!preferences.orgName) {
  throw new Error("ENV VAR ORG NAME is not set");
}

if (!preferences.token) {
  throw new Error("ENV VAR PAT is not set");
}

const authHandler = azdev.getPersonalAccessTokenHandler(preferences.token);
const connection = new azdev.WebApi(orgUrl, authHandler);

export async function getTaskAPI(): Promise<tl.ITaskApi> {
  return await connection.getTaskApi();
}

export async function getCoreAPI(): Promise<c.ICoreApi> {
  return await connection.getCoreApi();
}

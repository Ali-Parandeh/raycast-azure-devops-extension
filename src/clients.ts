import * as azdev from "azure-devops-node-api";
import * as tl from "azure-devops-node-api/TaskApi";

// your collection url
const orgName = process.env.AZURE_ORG_NAME?.toLowerCase() || "";
const orgUrl = `https://dev.azure.com/${orgName}`;
const token: string = process.env.AZURE_PERSONAL_ACCESS_TOKEN || "";

if (!orgName) {
  throw new Error("ENV VAR AZURE_ORG_NAME is not set");
}

if (!token) {
  throw new Error("ENV VAR AZURE_PERSONAL_ACCESS_TOKEN is not set");
}

const authHandler = azdev.getPersonalAccessTokenHandler(token);
const connection = new azdev.WebApi(orgUrl, authHandler);

export async function getTaskAPI(): Promise<tl.ITaskApi> {
  return await connection.getTaskApi();
}

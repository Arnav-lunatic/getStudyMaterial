import { Client, Account, Databases} from 'appwrite';
import { projectId } from '../constants/constant';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(projectId);

export const account = new Account(client);
export const databases = new Databases(client);

export { ID } from 'appwrite';
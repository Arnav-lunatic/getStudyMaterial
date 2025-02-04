import { Client, Account} from 'appwrite';
import { projectId } from '../constants/constant';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(projectId);

export const account = new Account(client);
export { ID } from 'appwrite';
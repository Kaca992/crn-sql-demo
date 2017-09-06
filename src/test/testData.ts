import {ISQLServer} from '../data/model/ISQLServer';
import {ICredential} from '../data/model/ICredential';

export const TestServers: string[] = ["0","1","2"];

let TestServersById: {[sqlServerId: string]: ISQLServer} = {};
TestServersById["0"] = {id: "0",
                    fqdn: 'Dino-SQL.test.local',
                    credentialId: "0"}; 
TestServersById["1"] = {id: "1",
                      fqdn: 'SQL2014.test.local',
                      credentialId: "0"}; 
TestServersById["2"] = {id: "2",
                      fqdn: 'sqldev.test.local',
                      credentialId: "0"}; 

export const TestCredentials: string[] = ["0"];

let TestCredentialsById: {[credentialId: string]: ICredential} = {
    "0" : {
        id: "0",
        userName: 'sqltest',
        passWord: 'pass@word1'
    }
};


export {TestServersById, TestCredentialsById};
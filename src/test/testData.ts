import {ISQLServer} from '../data/model/ISQLServer';

export const TestServers: string[] = ['Dino-SQL.test.local', 'SQL2014.test.local', 'sqldev.test.local']

let TestServersById: {[sqlServerId: string]: ISQLServer} = {};
TestServersById['Dino-SQL.test.local'] = {id: 'Dino-SQL.test.local',
                    sqlInstance: 'Dino-SQL',
                    domainName: 'test.local'}; 
TestServersById['SQL2014.test.local'] = {id: 'SQL2014.test.local',
                    sqlInstance: 'SQL2014',
                    domainName: 'test.local'}; 
TestServersById['sqldev.test.local'] = {id: 'sqldev.test.local',
                    sqlInstance: 'sqldev',
                    domainName: 'test.local'}; 

export {TestServersById};
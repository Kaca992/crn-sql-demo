import {ISQLServer} from '../data/model/ISQLServer';

export const TestServers: ISQLServer[] = [
    {
        id: 'Dino-SQL.test.local',
        sqlInstance: 'Dino-SQL',
        domainName: 'test.local'
    },
    
    {
        id: 'SQL2014.test.local',
        sqlInstance: 'SQL2014444',
        domainName: 'test.local'
    },

    {
        id: 'sqldev.test.local',
        sqlInstance: 'sqldev',
        domainName: 'test.local'
    },
    {
        id: 'Dino-SQL.test.local1',
        sqlInstance: 'Dino-SQL',
        domainName: 'test.local'
    },
    
    {
        id: 'SQL2014.test.local1',
        sqlInstance: 'SQL2014',
        domainName: 'test.local'
    },

    {
        id: 'sqldev.test.local1',
        sqlInstance: 'sqldev',
        domainName: 'test.local'
    },
    {
        id: 'Dino-SQL.test.local2',
        sqlInstance: 'Dino-SQL',
        domainName: 'test.local'
    },
    
    {
        id: 'SQL2014.test.local2',
        sqlInstance: 'SQL2014',
        domainName: 'test.local'
    },

    {
        id: 'sqldev.test.local2',
        sqlInstance: 'sqldev',
        domainName: 'test.local'
    }
];

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
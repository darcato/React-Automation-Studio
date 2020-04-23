import pymongo
import sys
import os
import configparser
import json
from time import sleep

path='savedConfig/'
sys.path.insert(0,path )
#######
##configs
usePvLabelsAsDescription=False
usePvUnits=True
##########
databaseName='watchDebugDb'
WATCH_DEBUG_DATABASE=os.getenv('WATCH_DEBUG_DATABASE')
replicaSet=str(os.getenv('WATCH_DEBUG_DATABASE_REPLICA_SET_NAME'))
if (WATCH_DEBUG_DATABASE is None) :
    print("Enviroment variable WATCH_DEBUG_DATABASE is not defined, can't intialize: ",databaseName)
else:
    print("Enviroment variable WATCH_DEBUG_DATABASE: ",WATCH_DEBUG_DATABASE)
    print("Enviroment variable WATCH_DEBUG_DATABASE_REPLICA_SET_NAME: ",replicaSet)
    myclient = pymongo.MongoClient("mongodb://"+str(WATCH_DEBUG_DATABASE)+"/",replicaSet=replicaSet)
    # Wait for MongoClient to discover the whole replica set and identify MASTER!
    sleep(0.1)
    dbnames = myclient.list_database_names()
    if (databaseName in dbnames):
        print("WATCH_DEBUG_DATABASE already intitialized, exiting")
    else:

        mydb = myclient[databaseName]
        mycol = mydb["log"]
        dict={
            "log":["init entry 1","init entry 2"]
                
            }
        
        
        x = mycol.insert_one(dict)     
        
# ChatLab
## rs.status 1
```{
	"set" : "rs0",
	"date" : ISODate("2019-11-02T08:52:07.544Z"),
	"myState" : 1,
	"term" : NumberLong(1),
	"syncingTo" : "",
	"syncSourceHost" : "",
	"syncSourceId" : -1,
	"heartbeatIntervalMillis" : NumberLong(2000),
	"majorityVoteCount" : 2,
	"writeMajorityCount" : 2,
	"optimes" : {
		"lastCommittedOpTime" : {
			"ts" : Timestamp(1572684721, 1),
			"t" : NumberLong(1)
		},
		"lastCommittedWallTime" : ISODate("2019-11-02T08:52:01.591Z"),
		"readConcernMajorityOpTime" : {
			"ts" : Timestamp(1572684721, 1),
			"t" : NumberLong(1)
		},
		"readConcernMajorityWallTime" : ISODate("2019-11-02T08:52:01.591Z"),
		"appliedOpTime" : {
			"ts" : Timestamp(1572684721, 1),
			"t" : NumberLong(1)
		},
		"durableOpTime" : {
			"ts" : Timestamp(1572684721, 1),
			"t" : NumberLong(1)
		},
		"lastAppliedWallTime" : ISODate("2019-11-02T08:52:01.591Z"),
		"lastDurableWallTime" : ISODate("2019-11-02T08:52:01.591Z")
	},
	"lastStableRecoveryTimestamp" : Timestamp(1572684681, 1),
	"lastStableCheckpointTimestamp" : Timestamp(1572684681, 1),
	"electionCandidateMetrics" : {
		"lastElectionReason" : "electionTimeout",
		"lastElectionDate" : ISODate("2019-11-01T13:00:38.762Z"),
		"termAtElection" : NumberLong(1),
		"lastCommittedOpTimeAtElection" : {
			"ts" : Timestamp(0, 0),
			"t" : NumberLong(-1)
		},
		"lastSeenOpTimeAtElection" : {
			"ts" : Timestamp(1572613228, 1),
			"t" : NumberLong(-1)
		},
		"numVotesNeeded" : 2,
		"priorityAtElection" : 1,
		"electionTimeoutMillis" : NumberLong(10000),
		"numCatchUpOps" : NumberLong(27017),
		"newTermStartDate" : ISODate("2019-11-01T13:00:39.530Z"),
		"wMajorityWriteAvailabilityDate" : ISODate("2019-11-01T13:00:40.204Z")
	},
	"members" : [
		{
			"_id" : 0,
			"name" : "mongo1:27017",
			"ip" : "172.31.36.100",
			"health" : 1,
			"state" : 1,
			"stateStr" : "PRIMARY",
			"uptime" : 74034,
			"optime" : {
				"ts" : Timestamp(1572684721, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-11-02T08:52:01Z"),
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"electionTime" : Timestamp(1572613238, 1),
			"electionDate" : ISODate("2019-11-01T13:00:38Z"),
			"configVersion" : 1,
			"self" : true,
			"lastHeartbeatMessage" : ""
		},
		{
			"_id" : 1,
			"name" : "mongo2:27017",
			"ip" : "172.31.46.56",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 71499,
			"optime" : {
				"ts" : Timestamp(1572684721, 1),
				"t" : NumberLong(1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1572684721, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-11-02T08:52:01Z"),
			"optimeDurableDate" : ISODate("2019-11-02T08:52:01Z"),
			"lastHeartbeat" : ISODate("2019-11-02T08:52:06.843Z"),
			"lastHeartbeatRecv" : ISODate("2019-11-02T08:52:06.842Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "mongo1:27017",
			"syncSourceHost" : "mongo1:27017",
			"syncSourceId" : 0,
			"infoMessage" : "",
			"configVersion" : 1
		},
		{
			"_id" : 2,
			"name" : "mongo3:27017",
			"ip" : "172.31.41.247",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 71499,
			"optime" : {
				"ts" : Timestamp(1572684721, 1),
				"t" : NumberLong(1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1572684721, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-11-02T08:52:01Z"),
			"optimeDurableDate" : ISODate("2019-11-02T08:52:01Z"),
			"lastHeartbeat" : ISODate("2019-11-02T08:52:07.046Z"),
			"lastHeartbeatRecv" : ISODate("2019-11-02T08:52:07.046Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "mongo1:27017",
			"syncSourceHost" : "mongo1:27017",
			"syncSourceId" : 0,
			"infoMessage" : "",
			"configVersion" : 1
		}
	],
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1572684721, 1),
		"signature" : {
			"hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
			"keyId" : NumberLong(0)
		}
	},
	"operationTime" : Timestamp(1572684721, 1)
}
```
## rs.config 1
```
{
	"_id" : "rs0",
	"version" : 1,
	"protocolVersion" : NumberLong(1),
	"writeConcernMajorityJournalDefault" : true,
	"members" : [
		{
			"_id" : 0,
			"host" : "mongo1:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 1,
			"host" : "mongo2:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 2,
			"host" : "mongo3:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		}
	],
	"settings" : {
		"chainingAllowed" : true,
		"heartbeatIntervalMillis" : 2000,
		"heartbeatTimeoutSecs" : 10,
		"electionTimeoutMillis" : 10000,
		"catchUpTimeoutMillis" : -1,
		"catchUpTakeoverDelayMillis" : 30000,
		"getLastErrorModes" : {
			
		},
		"getLastErrorDefaults" : {
			"w" : 1,
			"wtimeout" : 0
		},
		"replicaSetId" : ObjectId("5dbc2c6c731bc9291b400530")
	}
}
```
## rs.status 2
```
{
	"set" : "rs0",
	"date" : ISODate("2019-11-02T08:57:10.222Z"),
	"myState" : 2,
	"term" : NumberLong(2),
	"syncingTo" : "mongo2:27017",
	"syncSourceHost" : "mongo2:27017",
	"syncSourceId" : 1,
	"heartbeatIntervalMillis" : NumberLong(2000),
	"majorityVoteCount" : 2,
	"writeMajorityCount" : 2,
	"optimes" : {
		"lastCommittedOpTime" : {
			"ts" : Timestamp(1572685024, 1),
			"t" : NumberLong(2)
		},
		"lastCommittedWallTime" : ISODate("2019-11-02T08:57:04.603Z"),
		"readConcernMajorityOpTime" : {
			"ts" : Timestamp(1572685024, 1),
			"t" : NumberLong(2)
		},
		"readConcernMajorityWallTime" : ISODate("2019-11-02T08:57:04.603Z"),
		"appliedOpTime" : {
			"ts" : Timestamp(1572685024, 1),
			"t" : NumberLong(2)
		},
		"durableOpTime" : {
			"ts" : Timestamp(1572685024, 1),
			"t" : NumberLong(2)
		},
		"lastAppliedWallTime" : ISODate("2019-11-02T08:57:04.603Z"),
		"lastDurableWallTime" : ISODate("2019-11-02T08:57:04.603Z")
	},
	"lastStableRecoveryTimestamp" : Timestamp(1572684994, 1),
	"lastStableCheckpointTimestamp" : Timestamp(1572684994, 1),
	"members" : [
		{
			"_id" : 0,
			"name" : "mongo1:27017",
			"ip" : "172.31.36.100",
			"health" : 0,
			"state" : 8,
			"stateStr" : "(not reachable/healthy)",
			"uptime" : 0,
			"optime" : {
				"ts" : Timestamp(0, 0),
				"t" : NumberLong(-1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(0, 0),
				"t" : NumberLong(-1)
			},
			"optimeDate" : ISODate("1970-01-01T00:00:00Z"),
			"optimeDurableDate" : ISODate("1970-01-01T00:00:00Z"),
			"lastHeartbeat" : ISODate("2019-11-02T08:57:10.203Z"),
			"lastHeartbeatRecv" : ISODate("2019-11-02T08:55:23.076Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "Error connecting to mongo1:27017 (172.31.36.100:27017) :: caused by :: No route to host",
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"configVersion" : -1
		},
		{
			"_id" : 1,
			"name" : "mongo2:27017",
			"ip" : "172.31.46.56",
			"health" : 1,
			"state" : 1,
			"stateStr" : "PRIMARY",
			"uptime" : 71801,
			"optime" : {
				"ts" : Timestamp(1572685024, 1),
				"t" : NumberLong(2)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1572685024, 1),
				"t" : NumberLong(2)
			},
			"optimeDate" : ISODate("2019-11-02T08:57:04Z"),
			"optimeDurableDate" : ISODate("2019-11-02T08:57:04Z"),
			"lastHeartbeat" : ISODate("2019-11-02T08:57:09.808Z"),
			"lastHeartbeatRecv" : ISODate("2019-11-02T08:57:09.946Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"electionTime" : Timestamp(1572684923, 1),
			"electionDate" : ISODate("2019-11-02T08:55:23Z"),
			"configVersion" : 1
		},
		{
			"_id" : 2,
			"name" : "mongo3:27017",
			"ip" : "172.31.41.247",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 74244,
			"optime" : {
				"ts" : Timestamp(1572685024, 1),
				"t" : NumberLong(2)
			},
			"optimeDate" : ISODate("2019-11-02T08:57:04Z"),
			"syncingTo" : "mongo2:27017",
			"syncSourceHost" : "mongo2:27017",
			"syncSourceId" : 1,
			"infoMessage" : "",
			"configVersion" : 1,
			"self" : true,
			"lastHeartbeatMessage" : ""
		}
	],
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1572685024, 1),
		"signature" : {
			"hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
			"keyId" : NumberLong(0)
		}
	},
	"operationTime" : Timestamp(1572685024, 1)
}
```
## rs.config 2
```
{
	"_id" : "rs0",
	"version" : 1,
	"protocolVersion" : NumberLong(1),
	"writeConcernMajorityJournalDefault" : true,
	"members" : [
		{
			"_id" : 0,
			"host" : "mongo1:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 1,
			"host" : "mongo2:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 2,
			"host" : "mongo3:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		}
	],
	"settings" : {
		"chainingAllowed" : true,
		"heartbeatIntervalMillis" : 2000,
		"heartbeatTimeoutSecs" : 10,
		"electionTimeoutMillis" : 10000,
		"catchUpTimeoutMillis" : -1,
		"catchUpTakeoverDelayMillis" : 30000,
		"getLastErrorModes" : {
			
		},
		"getLastErrorDefaults" : {
			"w" : 1,
			"wtimeout" : 0
		},
		"replicaSetId" : ObjectId("5dbc2c6c731bc9291b400530")
	}
}
```
## Screenshots
![](https://raw.githubusercontent.com/iambackend/ChatLab/master/screen1.png)
![](https://raw.githubusercontent.com/iambackend/ChatLab/master/screen2.png)

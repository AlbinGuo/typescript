"use strict";
var Status;
(function (Status) {
    Status[Status["OFFLINE"] = 1] = "OFFLINE";
    Status[Status["ONLINE"] = 2] = "ONLINE";
    Status[Status["DELETED"] = 3] = "DELETED";
})(Status || (Status = {}));
console.log(Status.OFFLINE, Status[0]);
// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2
// }
// function getResult(status) {
//   if (status === Status.OFFLINE) {
//     return 'offline';
//   } else if (status === Status.ONLINE) {
//     return 'online';
//   } else if (status === Status.DELETED) {
//     return 'deleted';
//   }
//   return 'error';
// }
// const result = getResult(1);
// console.log(result);

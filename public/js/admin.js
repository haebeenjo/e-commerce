// (function () {
//   angular.module("sortTable", []).controller("mainCtrl", function () {
//     var main = this;

//     main.title = "ng filter and sort table";

//     main.persons = [
//       {
//         name: "Joe",
//         surname: "Allen",
//         age: 33,
//         id: 1,
//       },
//       {
//         name: "Alan",
//         surname: "Kowalsky",
//         age: 63,
//         id: 2,
//       },
//       {
//         name: "Victor",
//         surname: "Scendell",
//         age: 15,
//         id: 3,
//       },
//       {
//         name: "Jeniffer",
//         surname: "Lescott",
//         age: 44,
//         id: 4,
//       },
//       {
//         name: "Paul",
//         surname: "Finley",
//         age: 70,
//         id: 5,
//       },
//       {
//         name: "John",
//         surname: "Batshuai",
//         age: 23,
//         id: 6,
//       },
//     ];

//     main.orderType = "id";
//     main.orderReverse = false;

//     main.changeSortType = function (orderType) {
//       if (main.orderType == orderType) {
//         main.orderReverse = !main.orderReverse;
//       } else {
//         main.orderType = orderType;
//       }
//     };

//     main.isSortType = function (orderType) {
//       return main.orderType == orderType;
//     };

//     main.isOrderedReverse = function () {
//       return !main.orderReverse;
//     };
//   });
// })();

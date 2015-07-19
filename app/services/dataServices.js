'use strict';

angular.module('myApp.service',[])

.service('dataServices' ,['$http','_', function ($http,_) {
   
    this.gridData = [{ id: 1, name: "Moroni", age: 50, desc: "hero of the day1" },
                   { id: 2, name: "Tiancum", age: 43, desc: "hero of the day2" },
                   { id: 3, name: "Jacob", age: 27, desc: "hero of the day3" },
                   { id: 4, name: "Nephi", age: 29, desc: "hero of the day4" },
                   { id: 5, name: "Enos", age: 34, desc: "hero of the day5" }];

    this.addData = function () {
        var max = _.max(this.gridData, function (item) {
            return item.id;

        });

        var item = { id: max.id + 1, name: "", age: null, desc: "" };
       // this.gridData = null;
        this.gridData.push(item);

    };

    this.deleteItem = function (item) {

        this.gridData = _.filter(this.gridData, function (eachitem) {
            return (eachitem.id !== item)

        });

    };



}])

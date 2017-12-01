var city = [
    {name:'黑龙江', cityList:[
            {name:'齐齐哈尔',areaList:['大区','小区']},
            {name:'哈尔滨',areaList:['大区','小区']},
            {name:'牡丹江',areaList:['大区','小区']}
        ]
    },{name:'吉林', cityList:[
            {name:'长春',areaList:['大区','小区']},
            {name:'吉林',areaList:['大区','小区']},
            {name:'延吉',areaList:['大区','小区']}
        ]
    },{name:'辽宁', cityList:[
            {name:'大连',areaList:['大区','小区']},
            {name:'沈阳',areaList:['大区','小区']},
            {name:'抚顺',areaList:['大区','小区']}
        ]
    }
];

function toShiOption(name) {
    for(var v of name){
        var newOpt = document.createElement("option");
        newOpt.text = v;
        newOpt.setAttribute("value",v);
        selShi.add(newOpt,null);
    }
}

function toQuOption(name) {
    for(var v of name){
        var newOpt = document.createElement("option");
        newOpt.text = v;
        newOpt.setAttribute("value",v);
        selQu.add(newOpt,null);
    }
}

function deleteShi() {
    var optss = selShi.options;
    var length = optss.length;
    for(let i = 0;i<length-1;i++){
        selShi.remove(0);
    }
}
function deleteQu() {
    var optqu = selQu.options;
    var length = optqu.length;
    for(let i = 0;i<length-1;i++){
        selQu.remove(0);
    }
}
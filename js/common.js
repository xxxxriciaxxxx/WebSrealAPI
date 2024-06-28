    init();

    //スライダーで指示した値をテキストボックスにいれる
    document.getElementById("slider").addEventListener("change" , function () {
        document.getElementById("brightness").value = "0x0"+Number(this.value).toString(16);
    } , false );

    function init() {
        document.getElementById("com-open").disabled =false;
        document.getElementById("start").disabled=true;
        document.getElementById("stop").disabled =true;
        document.getElementById("com-close").disabled =true;

        var elements = document.getElementsByClassName('push');
        var max = elements.length;
        for (var i = 0; i < max; i++) {
            var e = elements[0];
            // console.log(e);
            e.classList.remove('push');
        }
        var elements = document.getElementsByClassName('err');
        var max = elements.length;
        for (var i = 0; i < max; i++) {
            var e = elements[0];
            // console.log(e);
            e.classList.remove('err');
        }
        var elements = document.getElementsByClassName('safe');
        var max = elements.length;
        for (var i = 0; i < max; i++) {
            var e = elements[0];
            // console.log(e);
            e.classList.remove('safe');
        }
    };    

    function errDisp(eName,eID){
        if(document.getElementsByName(eName).value == "00000000"){
            document.getElementById(eID+"_0").classList.add("safe");
        }
        //エラーが検知されている場合
        else{
            str2 = document.getElementsByName(eName).value;
            for (var i=0; i<8; i++){
                switch (str1.substr(i,1)){
                    case "0":
                            break;
                    case "1":
                            target = document.getElementById(eID + "_" + i);
                            // console.log(target)
                            if (target != null) {
                                target.classList.add("err");
                            }
                            break;
                }
            }
        }         
    }

    var StartTimer, StopTimer, Timer, time, timerID;

    time=0;
    timerID=0;

    StartTimer = function() {
        console.log("Timer start");
        timerID = setInterval(Green/*定期的に呼び出す関数名*/, 15/*呼び出す間隔*/);
    };

    StopTimer = function() {
        console.log("Timer stop");
        clearInterval(timerID);
    };    

    Disp = function() {
        console.log("Disp");
        var str1 = document.forms.form1.textBox1.value;
        target12 = document.getElementsByName("hide12");
        target12.value = ("00000000" + parseInt(str1.substr(12*2-2,2),16).toString(2)).slice(-8);
        target13 = document.getElementsByName("hide13");
        target13.value = ("00000000" + parseInt(str1.substr(13*2-2,2),16).toString(2)).slice(-8);
        target14 = document.getElementsByName("hide14");
        target14.value = ("00000000" + parseInt(str1.substr(14*2-2,2),16).toString(2)).slice(-8);

        var rtn1 = new Array("normal",
                            "Stuck Switch error",
                            "Switch decoder communicatuion error",
                            "Bezel communication error",
                            "USB host communication error",
                            "USB timeout error",
                            "USB holizontal parity check error",
                            "memory check sum error");
        var rtn2 = new Array("normal",
                            "-",
                            "Vsync interface error",
                            "Temp check error",
                            "5VDC tolerance error",
                            "LED short",
                            "LED OPEN",
                            "LED driver SPI communication error");

        target15 = document.getElementById("output15");
        target15.innerText = "I BIT 1:" + str1.substr(15*2-2,2) + ":";
        target16 = document.getElementById("output16");
        target16.innerText = "I BIT 2:" + str1.substr(16*2-2,2) + ":";
        target17 = document.getElementById("output17");
        target17.innerText = "C BIT 1:" + str1.substr(17*2-2,2) + ":";
        target18 = document.getElementById("output18");
        target18.innerText = "C BIT 2:" + str1.substr(18*2-2,2) + ":";
        target19 = document.getElementById("output19");
        target19.innerText = "P BIT 1:" + str1.substr(19*2-2,2) + ":";
        target20 = document.getElementById("output20");
        target20.innerText = "P BIT 2:" + str1.substr(20*2-2,2) + ":";
        target21 = document.getElementById("output21");
        target21.innerText = "Temp 1:" + str1.substr(21*2-2,2) + ":";
        target22 = document.getElementById("output22");
        target22.innerText = "Temp 2:" + str1.substr(22*2-2,2) + ":";

        str1 = document.getElementsByName("hide12").value;
        str1 = str1 + document.getElementsByName("hide13").value;
        str1 = str1 + document.getElementsByName("hide14").value;
        var array1 = new Array("D1","L1","R1","L2",
                                "R2","L3","R3","D2",
                                "D3","L4","R4","L5",
                                "R5","L0","R0","D4",
                                "D5","und","lmp","bit",
                                "cdu","D6","D7","D8");
        for (var i=0; i<24; i++){
            switch (str1.substr(i,1)){
                case "0":
                    //色を戻す
                    target = document.getElementById(array1[i]);
                    // console.log(target)
                    if (target != null) {
                        target.classList.remove('push');
                    }
                    break;
                case "1":
                    target = document.getElementById(array1[i]);
                    // console.log(target)
                    if (target != null) {
                        target.classList.add("push");
                    }
                    break;
            }
        }    
        var str2 = document.forms.form1.textBox1.value;
        target15 = document.getElementById("output15");
        target15.innerText = "15byte:" + str2.substr(15*2-2,2) + ":" + ("00000000"+ parseInt(str2.substr(15*2-2,2),16).toString(2)).slice(-8);
        target15 = document.getElementsByName("hide15");
        target15.value = ("00000000" + parseInt(str2.substr(15*2-2,2),16).toString(2)).slice(-8);
        target16 = document.getElementById("output16");
        target16.innerText = "16byte:" + str2.substr(16*2-2,2) + ":" + ("00000000"+ parseInt(str2.substr(16*2-2,2),16).toString(2)).slice(-8);
        target16 = document.getElementsByName("hide16");
        target16.value = ("00000000" + parseInt(str2.substr(16*2-2,2),16).toString(2)).slice(-8);
        target17 = document.getElementById("output17");
        target17.innerText = "17byte:" + str2.substr(17*2-2,2) + ":" + ("00000000"+ parseInt(str2.substr(17*2-2,2),16).toString(2)).slice(-8);
        target17 = document.getElementsByName("hide17");
        target17.value = ("00000000" + parseInt(str2.substr(17*2-2,2),16).toString(2)).slice(-8);
        target18 = document.getElementById("output18");
        target18.innerText = "18byte:" + str2.substr(18*2-2,2) + ":" + ("00000000"+ parseInt(str2.substr(18*2-2,2),16).toString(2)).slice(-8);
        target18 = document.getElementsByName("hide18");
        target18.value = ("00000000" + parseInt(str2.substr(18*2-2,2),16).toString(2)).slice(-8);
        target19 = document.getElementById("output19");
        target19.innerText = "19byte:" + str2.substr(19*2-2,2) + ":" + ("00000000"+ parseInt(str2.substr(19*2-2,2),16).toString(2)).slice(-8);
        target19 = document.getElementsByName("hide19");
        target19.value = ("00000000" + parseInt(str2.substr(19*2-2,2),16).toString(2)).slice(-8);
        target20 = document.getElementById("output20");
        target20.innerText = "20byte:" + str2.substr(20*2-2,2) + ":" + ("00000000"+ parseInt(str2.substr(20*2-2,2),16).toString(2)).slice(-8);
        target20 = document.getElementsByName("hide20");
        target20.value = ("00000000" + parseInt(str2.substr(20*2-2,2),16).toString(2)).slice(-8);
        errDisp("hide15","I1");
        errDisp("hide16","I2");
        errDisp("hide17","C1");
        errDisp("hide18","C2");
        errDisp("hide19","P1");
        errDisp("hide20","P2");
    };
var reportList  = ["rep1","rep2","rep3"];
var report1;
var report2;

function noChooseClick(){
    console.log(reportList.length);
    let report = document.getElementById(reportList[0]);
    if(reportList.length>1){
        console.log(reportList.length);

        console.log(report.id);
        let reportUnder = document.getElementById(reportList[1]);
        console.log(reportUnder.id);
        report.onclick = function(event){
            report.classList.add("takeaway");
            reportUnder.classList.remove("hide");
            console.log("click1");
    
            report.onclick = function(event) {
                report.classList.add("hide");
                report.classList.add("under");
                report.firstElementChild.classList.add("hand-hide");
                report.classList.remove("takeaway");
    
                reportUnder.firstElementChild.classList.remove("hand-hide");
                reportUnder.classList.remove("under");
                reportUnder.classList.add("up");
                let thisReport = reportList[0];
                reportList.splice(0,1);
                reportList.push(thisReport);
                console.log(reportList);
                if(reportList.length>1)
                {
                    noChooseClick();
                }
            }
        }
    } else {
        report.onclick = function(){
            report.classList.add("takeaway-choosed");
            // report.classList.add("hide");
            report.classList.add("under");
            // alert("Last report!")
            setTimeout(() => {
                window.location.replace("final-report.html");
            },1000)
        }
    }

}


function ChoosedClick(){
    if(reportList.length>1)
    {
        console.log(reportList.length);
        let report = document.getElementById(reportList[0]);
        console.log(report.id);
        let reportUnder = document.getElementById(reportList[1]);
        console.log(reportUnder.id);
        // report.getElementsByClassName("") onclick = function(event){
        report.classList.add("takeaway-choosed");
        // report.classList.add("hide");
        report.classList.add("under");
        reportUnder.classList.remove("hide");
        console.log("click1");

        // report.onclick = function(event) {
        setTimeout( () => {
            report.classList.add("hide");
            // report.classList.add("under");
            report.firstElementChild.classList.add("hand-hide");
            // report.classList.remove("takeaway");

            reportUnder.firstElementChild.classList.remove("hand-hide");
            reportUnder.classList.remove("under");
            reportUnder.classList.add("up");
            // let thisReport = reportList[0];
            reportList.splice(0,1);
            // reportList.push(thisReport);
            console.log(reportList);
            noChooseClick();
        },600)
    }
}

// window.onload = clickEvents;
noChooseClick();


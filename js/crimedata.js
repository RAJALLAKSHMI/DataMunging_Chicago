readline = require('readline');
 const fs = require('fs');
 var header =[];
 var jsonData1=[],jsonData2=[];
 var tempData1={},tempData2={};
 var over=[],under=[],noArrest=[];
 var i=0,j=0,k=0;
 var arrested=[];
 var year=0,type=0,description=0,arrest=0,code=0,crimeYear=0;
 for(i=0 ;i<=15;i++)
 {
  over[i]=0;
  under[i]=0;
  arrested[i]=0;
  noArrest[i]=0;
}
var isHeader=true;
const rl = readline.createInterface({

  input: fs.createReadStream('../crimedata.csv')

});
rl.on('line', function(line)
{
 var lineRecords= line.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);;
 for(var i=0;i<lineRecords.length;i++)
 {
   if(isHeader)
   {
     header[i]=lineRecords[i];
     if(header[i]=="Year")
     {
       year=i;
     }
     if(header[i]=="Description")
     {
       description=i;
     }
     if(header[i]=="Arrest")
     {
       arrest=i;
     }
     if(header[i]=="Primary Type")
     {
       type=i;
     }
  }
}

   if(lineRecords[type]=="THEFT" && lineRecords[description]=="OVER $500")
   {

    over[lineRecords[year]-2001]++;
  }
  else if(lineRecords[type]=="THEFT" && lineRecords[description]=="$500 AND UNDER")
  {
    under[lineRecords[year]-2001]++;
  }
  else if(lineRecords[type]=="ASSAULT" && lineRecords[arrest]=="true")
  {
    arrested[lineRecords[year]-2001]++;
  }
  else if(lineRecords[type]=="ASSAULT" && lineRecords[arrest]=="false")
  {
    noArrest[lineRecords[year]-2001]++;
  }

  isHeader=false;
});

rl.on('close',function()
{
  for(var i=0;i<=15;i++)
  {

    tempData1={};
    tempData1["Year"]=i+2001;
    tempData1["Over $500"]=over[i];
    tempData1["Under $500"]=under[i];
    jsonData1.push(tempData1);


    tempData2={};
    tempData2["Year"]=i+2001;
    tempData2["Arrested"]=arrested[i];
    tempData2["Not Arrested"]=noArrest[i];
    jsonData2.push(tempData2);

  }


  fs.writeFileSync("../outputdata/crimedata.json",JSON.stringify(jsonData1),encoding="utf8");
  console.log("Writtten to file1");
  fs.writeFileSync("../outputdata/assault.json",JSON.stringify(jsonData2),encoding="utf8");
  console.log("Written to file 2");

});

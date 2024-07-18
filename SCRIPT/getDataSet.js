import { Database } from "./database.js";

export class getDataSet
{

    myDatasetTab = [];
    myDatasetObj = {};
    constructor()
    {
        this.myDatasetTab = new Database("dataset");
    }

    getDataset(code1){
        let mmm = this.myDatasetTab.get();
        console.log(mmm);
        // alert("bonjour");
        this.myDatasetObj.dataset = code1;
        this.myDatasetObj.code = "data";
        console.log("dataset",this.myDatasetObj);
        this.myDatasetTab.save(this.myDatasetObj);
    }
}
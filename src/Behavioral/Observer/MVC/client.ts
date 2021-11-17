import { DataModel } from "./DataModel";
import { BarGraph, PieGraph, Table } from "./DataView";
import { DataController } from "./DataController";

const dataModel = new DataModel();

const pieGraph = new PieGraph(dataModel);
const barGraph = new BarGraph(dataModel);
const table = new Table(dataModel);

const dataController = DataController.getInstance();

dataController.notify(1,7,3);
pieGraph.delete();
dataController.notify(9,2,6);
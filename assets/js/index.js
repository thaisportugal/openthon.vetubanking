import HTML, {getHTML} from "./getComponent.js";
import getChart from "./getChart.js"


HTML("header")
HTML("footer")

getChart("indexGrafico", [
    ['Gastos', 'Gastos por mês'],
    ['Gasto1',  10],
    ['Gasto2',  5],
    ['Gasto3', 5],
])
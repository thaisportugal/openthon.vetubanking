import getChart, {getChartLine} from "../getChart.js"


getChart("dashBoardGraficoCircle", [
    ['Gastos', 'Gastos por mês'],
    ['Gasto1',  10],
    ['Gasto2',  5],
    ['Gasto3', 5],
], true)

getChartLine("dashBoardGraficoLine", [
    ['Gastos', 'Gastos por mês'],
    ['Gasto1',  10],
    ['Gasto2',  5],
    ['Gasto3', 5],
], "seila")
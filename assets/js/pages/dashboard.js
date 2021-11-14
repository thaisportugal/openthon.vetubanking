import getChart, {getChartLine} from "../getChart.js"


getChart("dashBoardGraficoCircle", [
    ['Gastos', 'Gastos por mês'],
    ['Gasto1',  10],
    ['Gasto2',  5],
    ['Gasto3', 5],
], true)

getChartLine("dashBoardGraficoLine", [
    ['Tempo de plataforma', 'Atividades'],
    ["", 7],
    ["", 4],
    ["", 8],
    ["", 2],
    ["", 6],
    ["", 9],
    ["", 12],
], "Tempo de plataforma")
import getChart, {getChartLine} from "../getChart.js"


getChart("dashBoardGraficoCircle", [
    ['Quanto falta para pagar a divida', 'R$'],
    ['Valor total',  5650],
    ['Valor pago',  900],
], true)

getChartLine("dashBoardGraficoLine", [
    ['Quantas parcelas você pagou por mês', 'Parcelas'],
    ["", 1],
    ["", 2],
    ["", 2],
    ["", 3],
    ["", 1],
    ["", 2],
    ["", 1],
], "Parcelas pagas por mês")
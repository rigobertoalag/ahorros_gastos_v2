export function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const getTotals = (data, place) => {

    if (place === "entries") {
        const totalEntries = data.reduce(
            (accumulator, product) => accumulator + product.ahr_amount,
            0
        );

        const totalEntriesFormatted = currencyFormat(totalEntries)

        return totalEntriesFormatted
    } else if (place === "outputs") {
        const totalOutPuts = data.reduce(
            (accumulator, product) => accumulator + product.gst_amount,
            0
        );

        const totalOutPutsFormatted = currencyFormat(totalOutPuts)

        return totalOutPutsFormatted
    } else if (place === 'entries-chart') {
        const totalEntriesChart = data.reduce(
            (accumulator, product) => accumulator + product.ahr_amount,
            0
        );

        return totalEntriesChart
    } else if (place === 'outputs-chart') {
        const totalOutPutsChart = data.reduce(
            (accumulator, product) => accumulator + product.gst_amount,
            0
        );

        return totalOutPutsChart
    }
};

export default getTotals
import ResizeObserver from 'resize-observer-polyfill';

const resize = (chart) => {
    const observer = new ResizeObserver(() => {
        chart.resize();
    });
    let myEcharts = document.getElementById('myEcharts')
    if (myEcharts) {
        observer.observe(myEcharts);
    } else {
        console.error('找不到 myEcharts')
    }
}


export default resize
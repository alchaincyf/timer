// 计时器变量
let startTime;
let elapsedTime = 0;
let timerInterval;

// 获取DOM元素
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const startButton = document.getElementById('startBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

// 开始计时
function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
    startButton.disabled = true;
    pauseButton.disabled = false;
}

// 暂停计时
function pause() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    pauseButton.disabled = true;
    startButton.textContent = '继续';
}

// 重置计时器
function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateDisplay();
    startButton.disabled = false;
    pauseButton.disabled = true;
    startButton.textContent = '开始';
}

// 更新时间显示
function updateTime() {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
}

// 更新显示界面
function updateDisplay() {
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    millisecondsDisplay.textContent = milliseconds.toString().padStart(2, '0');
}

// 添加事件监听器
startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset); 
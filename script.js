// script.js
const items = [
    { name: '람보르기니 최고급 꾸러미', probability: 6.5 },
    { name: '꽝', probability: 93.5 }
];

function drawItem() {
    const drawCount = parseInt(document.getElementById('draw-count').value, 10);
    const resultList = document.getElementById('result-list');
    resultList.innerHTML = ''; // 기존 결과 초기화

    const results = {};

    // 버튼에 클릭 클래스 추가
    const drawButton = document.querySelector('.draw-button');
    drawButton.classList.add('clicked');

    setTimeout(() => {
        drawButton.classList.remove('clicked');
    }, 300);

    for (let i = 0; i < drawCount; i++) {
        const randomNum = Math.random() * 100;
        let cumulativeProbability = 0;
        for (const item of items) {
            cumulativeProbability += item.probability;
            if (randomNum < cumulativeProbability) {
                if (!results[item.name]) {
                    results[item.name] = 0;
                }
                results[item.name]++;
                break;
            }
        }
    }

    setTimeout(() => {
        for (const [key, value] of Object.entries(results)) {
            const li = document.createElement('li');
            li.textContent = `${key} x ${value}`;
            if (key === '람보르기니 최고급 꾸러미') {
                li.classList.add('highlight');
            }
            resultList.appendChild(li);
        }
    }, 300); // 애니메이션과 동기적으로 결과를 표시하기 위한 딜레이
}

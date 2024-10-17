document.getElementById('new-advice').addEventListener('click', fetchAdvice);

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const adviceId = data.slip.id;
            const adviceText = data.slip.advice;

            document.getElementById('advice-id').innerText = adviceId;
            document.getElementById('advice-text').innerText = adviceText;
        })
        .catch(error => console.log('Error:', error));
}
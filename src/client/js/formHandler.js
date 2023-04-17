async function handleSubmit(event) {
    event.preventDefault();
    let formText = document.getElementById('name').value;
    let response = await fetch('http://localhost:8080/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: formText })
    });
    try {
      let data = await response.json();
      document.getElementById('polarity').innerHTML = `Polarity: ${data.score_tag}`;
      document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
      document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
      document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
    } catch (err) {
      console.log('error', err);
    }
  }
  
  export { handleSubmit }
  
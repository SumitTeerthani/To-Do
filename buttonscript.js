const button = document.getElementById('addItem');

  button.addEventListener('click', async () => {
    const dataToSend = {
      // Collect data from the page (e.g., input fields, variables)
    };
  
    try {
      const response = await fetch('/save-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
        // Handle success (e.g., display a success message)
      } else {
        console.error('Error saving data:', response.statusText);
        // Handle error (e.g., display an error message)
      }
    } catch (err) {
      console.error('Error sending request:', err);
    }
  });

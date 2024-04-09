const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#army-name').value.trim();
    
    const description = document.querySelector('#army-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/army/newarmy`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create army');
      }
    }
  };

  document
  .querySelector('.new-army-form')
  .addEventListener('submit', newFormHandler);
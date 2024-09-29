//userProfiles.js
fetch('userProfiles.json')
  .then(response => {
    if (!response.ok)
      throw new Error('Fetch error: ' + response.status);
    return response.json();
  })
  .then(json => {
    let output = '';

    json.userProfiles.forEach(user => {
      output += `<h3>${user.firstName} ${user.lastName}</h3>`;
      output += `<p>Email: ${user.email}</p>`;
      output += `<p>Date of Birth: ${user.dateOfBirth}</p>`;
      output += `<p>Address: ${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zipCode}</p>`;
      output += `<p>Preferences: Theme - ${user.preferences.theme}, Language - ${user.preferences.language}, Notifications - ${user.preferences.notifications ? 'On' : 'Off'}, Subscription - ${user.preferences.subscription ? 'Subscribed' : 'Not Subscribed'}</p>`;
    });

    document.getElementById('userProfiles').innerHTML = output;
  })
  .catch(err => console.error('Fetch error: ' + err.message));

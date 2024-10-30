// Replace this URL with the URL of your Google Apps Script web app
const API_URL = 'https://script.google.com/macros/s/AKfycbyyPsPozl87QIAkWkRL_Zy55K80iIsaX_TFtyWovAqj5CIS1W_xPsi_01hWx06Zt4mBHg/exec';

async function fetchEmails() {
  try {
    const response = await fetch(API_URL);
    const emails = await response.json();

    const emailList = document.getElementById('email-list');
    emailList.innerHTML = '';  // Clear existing content

    emails.forEach(email => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Subject:</strong> ${email.subject}<br><strong>Snippet:</strong> ${email.snippet}`;
      emailList.appendChild(li);
    });
  } catch (error) {
    console.error('Error fetching emails:', error);
  }
}

// Load emails on page load
window.onload = fetchEmails;

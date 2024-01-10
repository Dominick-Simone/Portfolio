export const sendEmail = (emailData) => {
    return fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': true
        },
        body: JSON.stringify(emailData),
      })
}
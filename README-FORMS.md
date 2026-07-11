# Automatic website forms

The Free Valuation and Property Search forms now submit in the background and do not open the visitor's email app.

## One-time activation

1. Publish the website.
2. Submit either form once as a test.
3. Open `soldbc@outlook.com`.
4. Approve the activation email from FormSubmit.
5. Submit the form again to verify delivery.

After activation, new leads are emailed automatically to `soldbc@outlook.com`.

The endpoint is configured near the bottom of `script.js`. For a CRM or Formspree later, replace `FORM_ENDPOINT` with the endpoint supplied by that service.

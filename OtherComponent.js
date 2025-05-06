const TestElement = ({ propText1, propText2 }) => {
  return (
  	<div>
      <p>Compoonent with prop</p>
      <p>Prop text 1 : {propText1}</p>
      <p>Prop text 2 : {propText2}</p>
    </div>
  )
}
// Attach to window so Webflow can access it
window.TestElement = TestElement;

const submitRegistration = ({ name, email, phone }) => {
  axios.post('https://68183f135a4b07b9d1ce55e0.mockapi.io/test/user', {
    "name": name,
    "email": email,
    "phone": phone,
  }, {
    // headers: {
    //   'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    // },
  })
  .then((response) => {
    console.log('Success:', response.data);
    window.location.href = "https://custom-code-react-sample.webflow.io/onboarding/registration-summary?id="+response.data.id
  })
  .catch(function (error) {
    console.error('Error:', error);
  });
}
// Attach to window so Webflow can access it
window.submitRegistration = submitRegistration;
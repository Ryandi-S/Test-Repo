const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

class DemoForm extends React.Component {
  constructor() {
    super();
    this.state = { 
      label: [
        { value: 'First name' },
        { value: 'Email address' },
        { value: 'Mobile number' },
      ],
      data: {
        name: "",
        email: "",
        phone: ""
      },
      trySubmit: false,
      submitted: false
    };
  }

  submitForm() {
    this.setState({ 
      trySubmit: true 
    });
    if (this.state.data.name && this.state.data.email && emailRegex.test(this.state.data.email) && this.state.data.phone){
      axios.post('https://68183f135a4b07b9d1ce55e0.mockapi.io/test/user', {
        "name": this.state.data.name,
        "email": this.state.data.email,
        "phone": this.state.data.phone,
      }, {
        // headers: {
        //   'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        // },
      })
      .then((response) => {
        console.log('Success:', response.data);
        this.setState({ 
          submitted: true 
        });
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
    }
    else {
      alert("Please fill all form correctly");
    }
    // window.location.href = "https://custom-code-react-sample.webflow.io/open-everyday-unlimited"
  }

  submitAgain() {
    this.setState({ 
      data: {
        name: "",
        email: "",
        phone: ""
      },
      trySubmit: false,
      submitted: false 
    });
  }

  render() {
    if (!this.state.submitted){
      return (
        <div className="form-block w-form">
          <TestElement />
          <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form w-clearfix" aria-label="Email Form">

            <label for="name" className="text">{this.state.label[0].value}</label>
            <input 
              className="form__input w-input" maxlength="256" name="name" data-name="Name" placeholder="" type="text" id="name"
              onChange={(event) => {
                this.setState({ 
                  data: {
                    ...this.state.data,
                    name: event.target.value,
                  } 
                });
              }}
            ></input>
            {this.state.trySubmit && !this.state.data.name ? (<div className="text__message text__message__error">Field is required</div>) : null}

            <label for="email" className="text">{this.state.label[1].value}</label>
            <input 
              className="form__input w-input" maxlength="256" name="email" data-name="Email" placeholder="" type="email" id="email" required="" 
              onChange={(event) => {
                this.setState({ 
                  data: {
                    ...this.state.data,
                    email: event.target.value,
                  } 
                });
              }}
            ></input>
            <div className="text__message">E.g: john.doe@gmail.com</div>
            {this.state.trySubmit && (!this.state.data.email || !emailRegex.test(this.state.data.email)) ? (<div className="text__message text__message__error">{!this.state.data.email ? "Field is required" : !emailRegex.test(this.state.data.email) ? "Email format incorrect" : ""}</div>) : null}

            <label for="field" className="text">{this.state.label[2].value}</label>
            <input 
              className="form__input w-input" maxlength="256" name="field" data-name="Field" placeholder="" type="text" id="field" required=""
              onChange={(event) => {
                this.setState({ 
                  data: {
                    ...this.state.data,
                    phone: event.target.value,
                  } 
                });
              }}
            ></input>
            <div className="text__message">E.g: 0512345678</div>
            {this.state.trySubmit && !this.state.data.phone ? (<div className="text__message text__message__error">Field is required</div>) : null}

            <a className="button__primary w-button"onClick={() => this.submitForm()}>Get Started</a>
          </form>
        </div>
      )
    }
    else {
      return (
        <div className="w-layout-cell">
          <p className="text">Form Submitted</p>
          <p className="text">Name : {this.state.data.name}</p>
          <p className="text">Email : {this.state.data.email}</p>
          <p className="text">Phone : {this.state.data.phone}</p>
          <p>&nbsp;</p>
          <a className="button__primary w-button"onClick={() => this.submitAgain()}>Submit again</a>
        </div>
      )
    }
  }
};

// Attach to window so Webflow can access it
window.DemoForm = DemoForm;
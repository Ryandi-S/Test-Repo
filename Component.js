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
      this.setState({ 
        submitted: true 
      });
    }
    else {
      alert("Please fill all form correctly");
    }
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
          <TestElement propText1="Lorem ipsum" propText2="Dolor sit amet" />
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
        <div>
          <div className="w-layout-cell">
            <p className="text">Form will be submitted with this data :</p>
            <p className="text">Name : {this.state.data.name}</p>
            <p className="text">Email : {this.state.data.email}</p>
            <p className="text">Phone : {this.state.data.phone}</p>
          </div>
          <div className="w-layout-cell">
            <div className="w-layout-layout quick-stack-2 wf-layout-layout">
              <div className="w-layout-cell">
                <a className="button__primary w-button"onClick={() => this.submitAgain()}>Reset Data</a>
              </div>
              <div className="w-layout-cell">
                <a className="button__primary w-button"onClick={() => submitRegistration(this.state.data)}>Submit Data</a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
};

// Attach to window so Webflow can access it
window.DemoForm = DemoForm;



class RegisteredData extends React.Component {
  constructor() {
    super();
    this.state = { 
      data: {
        name: "-",
        email: "-",
        phone: "-"
      }
    };
  }

  componentDidMount(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    axios.get('https://68183f135a4b07b9d1ce55e0.mockapi.io/test/user/'+id)
    .then((response) => {
      console.log('Success get user data:', response.data);
      this.setState({
        data: {
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone
        }
      })
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
  }

  render() {
    return (
      <div>
        <TestElement propText1="Registration data received!" propText2="The new user ---> UPDATED #4" />
        <div className="w-layout-cell">
          <p className="text">Name : {this.state.data.name}</p>
          <p className="text">Email : {this.state.data.email}</p>
          <p className="text">Phone : {this.state.data.phone}</p>
        </div>
      </div>
    )
  }
};

// Attach to window so Webflow can access it
window.RegisteredData = RegisteredData;
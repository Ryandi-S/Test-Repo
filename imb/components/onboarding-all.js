function Stepper({ step, maxStep, className }) {
  console.log("--- components / Stepper ---");
  const renderItems = () => {
    const elements = [];
    for (let i = 0; i < maxStep; i++) {
      elements.push(
        <div
          key={i}
          className={`sm:w-12 w-full h-1 rounded-lg mr-1
                      ${
                        i < step
                          ? "bg-fg-highlight-neutral"
                          : "bg-bg-greyscale-subtle"
                      }`}
        />
      );
    }
    return elements;
  };

  return <div className={`flex flex-row ${className}`}>{renderItems()}</div>;
}
// Attach to window so Webflow can access it
window.Stepper = Stepper;

function PrimaryButton({ onClick, arrow, className, type, disabled, label }) {
  return (
    <button
      disabled={disabled ? true : false}
      className={`btn bg-bg-accent-neutral border-none text-fg-brand-default rounded-full btn-sm mt-2 !h-10 text-base hover:bg-bg-accent-neutral hover:opacity-60
        ${className}
        disabled:opacity-40 disabled:bg-bg-accent-neutral disabled:border-none disabled:text-fg-brand-default`}
      onClick={onClick}
      type={type}
    >
      {label}
      {/* {arrow ? <FaArrowRight /> : <></>} */}
      {arrow ? " >" : null}
    </button>
  );
}
// Attach to window so Webflow can access it
window.PrimaryButton = PrimaryButton;

function SecondaryButton({
  onClick,
  label,
  className,
  plus,
  border = true,
  edit,
}) {
  return (
    <button
      className={`btn btn-outline rounded-full btn-sm mt-2 !h-10 text-base hover:bg-transparent hover:text-fg-greyscale-strongest hover:opacity-60
        ${className}
        ${!border && "border-none !px-0"}
        ${label === "Cancel" && "text-fg-greyscale-subtler hover:opacity-100"}`}
      onClick={onClick}
    >
      {edit ? (
        <Image
          src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eec86c94548a98c68e50_edit-square.svg"
          alt="edit"
          className="size-6"
        />
      ) : null}
      {label}
      {/* {plus ? <Plus /> : <></>} */}
    </button>
  );
}
// Attach to window so Webflow can access it
window.SecondaryButton = SecondaryButton;

function SelectButton({ onClick, idx, selected, label, className }) {
  return (
    <button
      onClick={onClick}
      className={`w-[176px] py-2 flex justify-center border border-border-greyscale-subtler rounded-md cursor-pointer
        ${idx === selected && "bg-bg-accent-subtle border-none"},
        ${className}`}
    >
      <h5 className={cn("font-normal", idx === selected && "!font-medium")}>
        {label}
      </h5>
    </button>
  );
}
// Attach to window so Webflow can access it
window.SelectButton = SelectButton;

function GetStartedPage({ next }) {
  console.log("--- components / GetStartedPage ---");
  return (
    <div className="container flex lg:grid lg:grid-cols-2 gap-8 items-center relative h-[calc(100vh-64px)]">
      <div>
        <h5 className="mb-2 text-fg-highlight-strong">Get Started</h5>
        <h1 className="strong mb-6 text-fg-greyscale-stronger">
          Start your journey with{" "}
          <span className="text-fg-highlight-strong">Alphie.</span>
        </h1>
        <p className="mb-8 p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="actions flex flex-row mt-9 gap-6">
          <PrimaryButton label="Login" arrow onClick={() => null} />
          <SecondaryButton
            label="Sign up now"
            onClick={next}
            className="border-border-highlight-strong hover:border-border-highlight-strong"
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eb4ada84cde075a54387_flower.svg"
          alt="flower"
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    </div>
  );
}
// Attach to window so Webflow can access it
window.GetStartedPage = GetStartedPage;

function PhoneNumberInput({
  phoneNumber,
  setPhoneNumber,
  numberError,
  setNumberError,
  className,
}) {
  return (
    <PhoneInput
      international
      defaultCountry="AU"
      countryCallingCodeEditable={true}
      value={phoneNumber}
      onChange={(value) => {
        setPhoneNumber(value);
        setNumberError((prev) => ({
          ...prev,
          status: false,
        }));
      }}
      className={`input w-full h-9 mr-4  text-base px-0 minimal-input ${
        numberError.status ? "text-fg-danger-neutral" : ""
      } ${className}`}
    />
  );
}
window.PhoneNumberInput = PhoneNumberInput;

function ContactPage({ next, prev, skipPrev, page }) {
  this.state = {
    emailError: {
      status: false,
      message: "",
      type: "",
    },
    numberError: {
      status: false,
      message: "",
      type: "",
    },
    usersData: [],
    email: "",
    phoneNumber: "",
  };

  // const { updateOriginationForm, originationForm } = useStore();
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  // const [emailError, setEmailError] = useState({
  //   status: false,
  //   message: "",
  //   type: "",
  // });
  // const [numberError, setNumberError] = useState({
  //   status: false,
  //   message: "",
  //   type: "",
  // });

  // const [usersData, setUsersData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("/api/get-users");
  //       const result = await response.json();
  //       setUsersData(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const handleNext = () => {
    switch (page) {
      case PageStep.Email:
        const userExist = usersData.some((user) => user.email === email);
        const validEmail = validator.isEmail(email);
        if (this.state.email === "") {
          this.state.emailError((prev) => ({
            ...prev,
            status: true,
            message: "Please provide a valid email address",
          }));
          return;
        } else if (!validEmail) {
          this.state.emailError((prev) => ({
            ...prev,
            status: true,
            message: "Invalid email address",
          }));
          return;
        } else if (userExist) {
          this.state.emailError((prev) => ({
            ...prev,
            status: true,
            message:
              "The email address provided is already linked to an existing account. Please login or proceed to password recovery to continue",
          }));
          return;
        }
        // updateOriginationForm({ email });
        break;
      case PageStep.Number:
        if (this.state.phoneNumber === "" || !phoneNumber) {
          this.state.numberError((prev) => ({
            ...prev,
            status: true,
            message: "Enter your phone number",
          }));
          return;
        } else if (!isValidPhoneNumber(phoneNumber)) {
          this.state.NumberError((prev) => ({
            ...prev,
            status: true,
            message: "Invalid phone number",
          }));
          return;
        }
        // updateOriginationForm({ phoneNumber });
        break;
      default:
        break;
    }
    next();
  };

  return (
    <div className="container flex flex-row sm:mb-[104px] mb-16 items-center h-full max-h-[680px]">
      <div className="left sm:w-[550px] w-full sm:mr-10  h-full flex flex-col justify-between">
        <div>
          <h5 className="text-fg-highlight-strong mb-2">Getting Started</h5>

          {page === PageStep.Email && (
            <div>
              <h1 className="origination-steps-title">What’s your email?</h1>
              <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  this.state.email(e.target.value);
                  this.state.emailError((prev) => ({
                    ...prev,
                    status: false,
                  }));
                }}
                className={`input !w-full h-9 mr-4 origination-input-text px-0 minimal-input  ${
                  this.state.emailError.status ? "text-fg-danger-neutral" : ""
                }`}
              />
              {this.state.emailError.status && (
                <p className="mt-2 p3 text-fg-danger-neutral">
                  {this.state.emailError.message}
                </p>
              )}
            </div>
          )}

          {page === PageStep.Number && (
            <>
              <h1 className="origination-steps-title">
                What’s your phone number?
              </h1>
              <h4 className="origination-input-label">Phone Number</h4>
              <PhoneNumberInput
                setNumberError={this.state.numberError}
                setPhoneNumber={this.state.phoneNumber}
                phoneNumber={this.state.phoneNumber}
                numberError={this.state.numberError}
              />

              {numberError.status && (
                <p className="mt-2 p3 text-fg-danger-neutral">
                  {this.state.numberError.message}
                </p>
              )}
            </>
          )}
        </div>
        <div className="actions sm:flex flex-row mt-9 grid grid-cols-2 gap-6 sm:gap-3">
          <SecondaryButton label="Back" onClick={prev} />
          <PrimaryButton label="Next" onClick={handleNext} arrow />
        </div>
      </div>
    </div>
  );
}

window.ContactPage = ContactPage;

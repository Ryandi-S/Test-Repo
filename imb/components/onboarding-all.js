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
      {arrow ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 12H20M20 12L14 6M20 12L14 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : null}
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
        <image
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

function PersonalDetailsConfirmPage({ next, prev, userData }) {
  console.log("--- components / PersonalDetailsConfirmPage ---", userData);
  const submitRegistration = ({ userData }) => {
    console.log("--- submitRegistration ---", userData);
    axios
      .post("https://68183f135a4b07b9d1ce55e0.mockapi.io/test/user", {
        name: `${userData.firstName} ${
          userData.middleName ? userData.middleName + " " : ""
        }${userData.lastName}`,
        email: userData.email,
        phone: userData.phone,
      })
      .then((response) => {
        console.log("Success:", response.data);
        next();
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };

  function handleSubmit() {
    submitRegistration({ userData });
  }
  return (
    <div className="container flex flex-row sm:mb-[104px] mb-16 items-center h-full max-h-[680px]">
      <div className="left sm:w-[654px] w-full sm:mr-10 h-full flex justify-between flex-col">
        <div>
          <h5 className="text-fg-highlight-strong mb-2">Personal Details</h5>
          <h1 className="origination-steps-title">
            Let's confirm your details
          </h1>
          <h6 className="mb-4 text-md">
            Ensure that your details are accurate and proceed to the next steps.
          </h6>

          <div className="info-section mt-10">
            <div className="name mb-6">
              <p className="p4 mb-2 text-fg-greyscale-subtle">Full Name</p>
              <p className="p2 uppercase">{`${userData.firstName} ${
                userData.middleName ? userData.middleName + " " : ""
              }${userData.lastName}`}</p>
            </div>
            <div className="name mb-6">
              <p className="p4 mb-2 text-fg-greyscale-subtle">Email</p>
              <p className="p2 uppercase">{`${userData.email}`}</p>
            </div>
            <div className="name mb-6">
              <p className="p4 mb-2 text-fg-greyscale-subtle">Phone</p>
              <p className="p2 uppercase">{`${userData.phone}`}</p>
            </div>
          </div>
        </div>

        <div className="actions sm:flex flex-row mt-9 grid grid-cols-2 gap-6 sm:gap-3">
          <SecondaryButton label="Back" onClick={prev} />
          <PrimaryButton label="Confirm" arrow onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
// Attach to window so Webflow can access it
window.PersonalDetailsConfirmPage = PersonalDetailsConfirmPage;

function SuccessPage({ userData, reset }) {
  console.log("--- components / SuccessPage ---", userData);
  return (
    <div className="container flex items-center h-full">
      <div className="flex mx-auto">
        <div className="left sm:w-[516px] w-full">
          <p className="text-fg-highlight-strong font-medium mb-2">Success</p>
          <h1 className="mb-6 sm:text-4xl text-[22px] strong">
            Welcome to IMB,{" "}
            <span className="text-fg-highlight-strong">
              {userData.firstName}
            </span>
          </h1>
          {/* <div className="lg:hidden block mb-10 w-full">
            <video width="353" height="283" autoPlay muted loop>
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div> */}
          <p className="p2 mb-10">
            Congratulations on opening your account with us! We're thrilled to
            have you as a part of our community. We make banking a breeze at
            IMB. Feel free to reach out here if you have any questions or need
            assistance.
          </p>

          <div className="actions sm:flex flex-row mt-9 grid grid-cols-2 gap-6 sm:gap-3">
            <PrimaryButton label="Let's Begin" onClick={reset} arrow />
            <SecondaryButton label="Get the App" onClick={reset} />
          </div>
        </div>
        {/* <div className="right hidden lg:block">
          <video width="353" height="283" autoPlay muted loop>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div> */}
      </div>
    </div>
  );
}
// Attach to window so Webflow can access it
window.SuccessPage = SuccessPage;

function GetStartedPage({ next, jump }) {
  console.log("--- components / GetStartedPage ---");
  return (
    <div className="container flex lg:grid lg:grid-cols-2 gap-8 items-center relative h-[calc(100vh-64px)]">
      <div>
        <h5 className="mb-2 text-fg-highlight-strong">Get Started</h5>
        <h1 className="strong mb-6 text-fg-greyscale-stronger">
          Start your journey with{" "}
          <span className="text-fg-highlight-strong">IMB.</span>
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
          src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eb4ada84cde075a54387_5425c564983d58e4623f90ada8f86ccd_flower.svg"
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

const PageStep = {
  Email: 1,
  Number: 2,
  Verification: 3,
};

function ContactPage({ next, prev, skipPrev, page, userData, setUserData }) {
  // const { updateOriginationForm, originationForm } = useStore();
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [emailError, setEmailError] = React.useState({
    status: false,
    message: "",
    type: "",
  });
  const [numberError, setNumberError] = React.useState({
    status: false,
    message: "",
    type: "",
  });

  // const [usersData, setUsersData] = React.React.useState([]);

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

  function handleNext() {
    next();
  }

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
                  setUserData({
                    ...userData,
                    email: e.target.value,
                  });
                  setEmail(e.target.value);
                  setEmailError((prev) => ({
                    ...prev,
                    status: false,
                  }));
                }}
                className={`input !w-full h-9 mr-4 origination-input-text px-0 minimal-input  ${
                  emailError.status ? "text-fg-danger-neutral" : ""
                }`}
              />

              {emailError.status && (
                <p className="mt-2 p3 text-fg-danger-neutral">
                  {emailError.message}
                </p>
              )}
            </div>
          )}

          {page === PageStep.Number && (
            <div>
              <h1 className="origination-steps-title">
                What’s your phone number?
              </h1>

              <input
                className={`input !w-full h-9 mr-4 origination-input-text px-0 minimal-input  ${
                  numberError.status ? "text-fg-danger-neutral" : ""
                }`}
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(event) => {
                  setUserData({
                    ...userData,
                    phone: event.target.value,
                  });
                  setPhoneNumber(event.target.value);
                  setNumberError((prev) => ({
                    ...prev,
                    status: false,
                  }));
                }}
              ></input>

              {numberError.status && (
                <p className="mt-2 p3 text-fg-danger-neutral">
                  {numberError.message}
                </p>
              )}
            </div>
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

function PersonalDetailsPage({
  next,
  prev,
  page,
  skipPrev,
  userData,
  setUserData,
}) {
  // const { updateOriginationForm, originationForm } = useStore();

  const [title, setTitle] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [openDropdown, setOpenDropdown] = React.useState(false);

  //! --------------------- Error states ---------------------
  const [titleError, setTitleError] = React.useState({
    status: false,
    message: "",
    type: "",
  });
  const [firstNameError, setFirstNameError] = React.useState({
    status: false,
    message: "",
    type: "",
  });
  const [lastNameError, setLastNameError] = React.useState({
    status: false,
    message: "",
    type: "",
  });
  const [middleNameError, setMiddleNameError] = React.useState({
    status: false,
    message: "",
    type: "",
  });

  const titleOptions = React.useMemo(
    () => ["Mr", "Mrs", "Miss", "Dr", "Prof"],
    []
  );

  function handleNext() {
    // switch (page) {
    //   case PageStep.Name:
    //     let hasError = false;

    //     if (title === "") {
    //       setTitleError((prev) => ({
    //         ...prev,
    //         status: true,
    //         message: "Please select a title",
    //       }));
    //       hasError = true;
    //     }
    //     if (firstName === "") {
    //       setFirstNameError((prev) => ({
    //         ...prev,
    //         status: true,
    //         message: "You must include your first name",
    //       }));
    //       hasError = true;
    //     }
    //     if (lastName === "") {
    //       setLastNameError((prev) => ({
    //         ...prev,
    //         status: true,
    //         message: "You must include your last name",
    //       }));
    //       hasError = true;
    //     }

    //     const validNamePattern = /^[a-z ,.'-]+$/i;

    //     if (firstName !== "" && !validNamePattern.test(firstName)) {
    //       setFirstNameError((prev) => ({
    //         ...prev,
    //         status: true,
    //         message:
    //           "Invalid characters detected. Please use alphabetic characters and hyphens only.",
    //       }));
    //       hasError = true;
    //     }
    //     if (lastName !== "" && !validNamePattern.test(lastName)) {
    //       setLastNameError((prev) => ({
    //         ...prev,
    //         status: true,
    //         message:
    //           "Invalid characters detected. Please use alphabetic characters and hyphens only.",
    //       }));
    //       hasError = true;
    //     }
    //     if (middleName !== "" && !validNamePattern.test(middleName)) {
    //       setMiddleNameError((prev) => ({
    //         ...prev,
    //         status: true,
    //         message:
    //           "Invalid characters detected. Please use alphabetic characters and hyphens only.",
    //       }));
    //       hasError = true;
    //     }

    //     if (hasError) {
    //       return;
    //     }

    //     hasError = false;
    //     // updateOriginationForm({
    //     //   name: { title, firstName, middleName, lastName },
    //     // });
    //     break;

    //   default:
    //     break;
    // }
    next();
  }

  return (
    <div className="container flex flex-row sm:mb-[104px] mb-16 items-center h-full max-h-[680px]">
      <div className="left sm:w-[550px] w-full sm:mr-10  h-full flex flex-col justify-between">
        <div>
          <h5 className="text-fg-highlight-strong mb-2">Personal Details</h5>
          <h1 className="origination-steps-title">Let's get to know you</h1>
          <div>
            <h4 className="origination-input-label">What's your name?</h4>

            <div className="name-container flex sm:flex-row flex-col sm:mt-5 mt-0 gap-8 sm:gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  maxLength={50}
                  placeholder="*First name"
                  value={firstName}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      firstName: event.target.value,
                    });
                    setFirstName(e.target.value);
                    setFirstNameError((prev) => ({
                      ...prev,
                      status: false,
                    }));
                  }}
                  className={`input w-40 max-w-xs h-9 border sm:text-[26px] text-base px-0 minimal-input tracking-tight ${
                    firstNameError.status ? "text-fg-danger-neutral" : ""
                  }`}
                />
                {firstNameError.status && (
                  <p className="mt-2 p3 text-fg-danger-neutral">
                    {firstNameError.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  maxLength={50}
                  placeholder="Middle name"
                  value={middleName}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      middleName: event.target.value,
                    });
                    setMiddleName(e.target.value);
                    setMiddleNameError((prev) => ({
                      ...prev,
                      status: false,
                    }));
                  }}
                  className={`input w-40 max-w-xs h-9 border sm:text-[26px] text-base px-0 minimal-input tracking-tight ${
                    middleNameError.status ? "text-fg-danger-neutral" : ""
                  }`}
                />
                {middleNameError.status && (
                  <p className="mt-2 p3 text-fg-danger-neutral">
                    {middleNameError.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  maxLength={50}
                  placeholder="*Last name"
                  value={lastName}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      lastName: event.target.value,
                    });
                    setLastName(e.target.value);
                    setLastNameError((prev) => ({
                      ...prev,
                      status: false,
                    }));
                  }}
                  className={`input w-40 max-w-xs h-9 mr-3 border sm:text-[26px] text-base px-0 minimal-input tracking-tight ${
                    lastNameError.status ? "text-fg-danger-neutral" : ""
                  }`}
                />
                {lastNameError.status && (
                  <p className="mt-2 p3 text-fg-danger-neutral">
                    {lastNameError.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="actions sm:flex flex-row mt-9 grid grid-cols-2 gap-6 sm:gap-3">
          <SecondaryButton
            label="Back"
            // onClick={() => {
            //   if (
            //     !(
            //       originationForm.accounts &&
            //       originationForm.accounts.transaction
            //     )?.transaction &&
            //     page === PageStep.Name
            //   ) {
            //     skipPrev();
            //   } else {
            //     prev();
            //   }
            // }}
            onClick={prev}
          />
          <PrimaryButton label="Next" onClick={handleNext} arrow />
        </div>
      </div>
    </div>
  );
}
// Attach to window so Webflow can access it
window.PersonalDetailsPage = PersonalDetailsPage;

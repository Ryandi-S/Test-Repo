const mapPageToStep = (page) => {
  if (page === 0) return 0;
  if ([1, 2, 3, 4].includes(page)) return 1;
  if ([5, 6].includes(page)) return 2;
  if ([7, 8, 9, 10].includes(page)) return 3;
  if (page === 11 || page === 12) return 4;
  return 0; // Default step if page is not defined
};

function OnboadingForm() {
  // const { originationForm, updateOriginationForm } = useStore();
  const [page, setPage] = React.useState(() => {
    const storedPage = JSON.parse(
      typeof sessionStorage !== "undefined"
        ? sessionStorage.getItem("currentPage") || "0"
        : "0"
    );
    return storedPage || 0;
  });
  const [isFormLoaded, setIsFormLoaded] = React.useState(false);

  const step = mapPageToStep(page);

  const resetPage = React.useCallback(() => setPage(1), [page]);
  const jumpPage = React.useCallback(() => setPage(4), [page]);
  const nextPage = React.useCallback(() => setPage(page + 1), [page]);
  const prevPage = React.useCallback(() => setPage(page - 1), [page]);
  const skipNextPage = React.useCallback(() => setPage(page + 2), [page]);
  const skipPrevPage = React.useCallback(() => setPage(page - 2), [page]);
  const personalDetailsPage = React.useCallback(() => setPage(4), []);

  const [userData, setUserData] = React.useState({
    firstName: "John",
    middleName: "",
    lastName: "Doe",
    email: "m@il.com",
    phone: "0809",
  });

  // React.useEffect(() => {
  //   const storedForm = JSON.parse(
  //     sessionStorage.getItem("originationForm") || "{}"
  //   );

  //   if (storedForm) {
  //     updateOriginationForm(storedForm);
  //     setIsFormLoaded(true);
  //   }
  // }, [updateOriginationForm]);

  // React.useEffect(() => {
  //   if (originationForm.email !== "") {
  //     sessionStorage.setItem(
  //       "originationForm",
  //       JSON.stringify(originationForm)
  //     );
  //   }
  //   sessionStorage.setItem("currentPage", page.toString());
  // }, [originationForm, page]);

  // if (!isFormLoaded) {
  //   return;
  // }

  React.useEffect(() => {
    console.log("--- OnboadingForm ---");
  }, []);

  return (
    <div
      className="flex flex-col items-left mx-auto md:px-40 px-6 max-w-[1440px] w-full
            h-[calc(100vh-64px)] overflow-auto no-scrollbar justify-start 2xl:justify-center"
    >
      {page < 4 && page !== 0 && (
        <Stepper step={step} maxStep={5} className="mt-20 mb-10" />
      )}

      {page === 0 && <GetStartedPage next={nextPage} jump={jumpPage} />}

      {[1, 2].includes(page) && (
        // <p>- ContactPage / email & phone -</p>
        <ContactPage
          next={nextPage}
          prev={prevPage}
          skipPrev={skipPrevPage}
          page={page}
        />
      )}

      {page === 3 && (
        // <p>- PersonalDetailsPage / name -</p>
        <PersonalDetailsPage
          next={nextPage}
          prev={prevPage}
          page={page}
          skipPrev={skipPrevPage}
        />
      )}

      {page === 4 && (
        // <p>- PersonalDetailsConfirmPage -</p>
        <PersonalDetailsConfirmPage
          next={nextPage}
          prev={prevPage}
          userData={userData}
        />
      )}

      {page === 5 && (
        // <p>- SuccessPage -</p>
        <SuccessPage userData={userData} reset={resetPage} />
      )}
    </div>
  );
}

// Attach to window so Webflow can access it
window.OnboadingForm = OnboadingForm;


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

  const nextPage = React.useCallback(() => setPage(page + 1), [page]);
  const prevPage = React.useCallback(() => setPage(page - 1), [page]);
  const skipNextPage = React.useCallback(() => setPage(page + 2), [page]);
  const skipPrevPage = React.useCallback(() => setPage(page - 2), [page]);
  const personalDetailsPage = React.useCallback(() => setPage(4), []);

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
    console.log("--- OINK ---")
  }, [])

  return (
    <div>TEST
    {/*<div
      className="flex flex-col items-left mx-auto md:px-40 px-6 max-w-[1440px] w-full
            h-[calc(100vh-64px)] overflow-auto no-scrollbar justify-start 2xl:justify-center"
    >
      {page !== 13 && page !== 0 && (
        <Stepper step={step} maxStep={5} className="mt-20 mb-10" />
      )}

      {page === 0 && <GetStartedPage next={nextPage} />}

      {[1, 2, 3].includes(page) && (
        <ContactPage
          next={nextPage}
          prev={prevPage}
          skipPrev={skipPrevPage}
          page={page}
        />
      )}

      {page === 4 && (
        <CreatePasswordPage
          next={nextPage}
          skipNext={skipNextPage}
          prev={prevPage}
        />
      )}

      {page === 5 && (
        <CreateAccountPage
          next={nextPage}
          skipNext={skipNextPage}
          prev={prevPage}
        />
      )}
      {page === 6 && <CardCustomizationPage next={nextPage} prev={prevPage} />}
      {[7, 8, 9].includes(page) && (
        <PersonalDetailsPage
          next={nextPage}
          prev={prevPage}
          page={page}
          skipPrev={skipPrevPage}
        />
      )}
      {page === 10 && (
        <PersonalDetailsConfirmPage
          next={nextPage}
          prev={prevPage}
          edit={personalDetailsPage}
        />
      )}
      {page === 11 && (
        <IdentityVerificationPage next={nextPage} prev={prevPage} />
      )}

      {page === 12 && (
        <IdentityDetailsConfirmPage
          next={nextPage}
          prev={prevPage}
          edit={personalDetailsPage}
        />
      )}
      {page === 13 && <SuccessPage />}
    </div>*/}
    </div>
  );
}

// Attach to window so Webflow can access it
window.OnboadingForm = OnboadingForm;
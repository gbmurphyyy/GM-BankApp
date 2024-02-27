function Home() {
  return (
    <>
      <Card
        txtcolor="black"
        header="Welcome to GB Bank"
        title="To be quite frank, your money is everything at GB Bank!"
        text="We are a very unsecure bank, but thanks for choosing us! Please Sign Up or Login to begin your journey or access some account information."
        body={
          <>
            <div className="row align-items-center">
              <div className="col mx-auto">
                <img src="./bank.png" className="img-fluid" width="40%" alt="bank-logo" />
              </div>
              <div className="col">
                <div className="d-grid gap-4 mx-auto">
                  <Link to="/login" className="btn btn-primary btn-md">
                    Login
                  </Link>
                  <Link to="/CreateAccount" className="btn btn-secondary btn-md">
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}

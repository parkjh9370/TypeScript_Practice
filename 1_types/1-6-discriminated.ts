{
  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  // printLoginState(state: Loginstate)
  // success -> body
  // fail -> reason
  function printLoginState2(state: LoginState): void {
    if (state.result === "success") {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }
}

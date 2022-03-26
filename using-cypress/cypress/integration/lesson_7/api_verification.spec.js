/// <reference types="Cypress" />

describe("API verification", () => {
  it("Case #1", async () => {
    const requestBody = {
      action: "add",
      phone: "+380686979712",
      amount: 50,
      currency: "UAH",
      cardCvv: "327",
      card: "4506909324274797",
      cardExp: "0622",
      operator: "Kyivstar Ukraine",
      operatorId: "602",
      xref: "cb6808f9e02d10b3d8eadf442f52b4f4",
      nameA: "Peter Scroggs",
      _: 1647926341613,
    };

    const requestHeaders = {
      cookie:
        "pubkey=2adf556681537c36597ada260d46753c; fp=9; lfp=3/17/2022, 8:08:15 PM; pa=1647926098191.84720.8002623493380963next.privat24.ua0.7270396566625823+1",
    };

    const response = await cy.request({
      method: "POST",
      url: "https://next.privat24.ua/api/p24/pub/mobipay",
      body: requestBody,
      headers: requestHeaders,
    });

    expect(response).to.have.property("status").to.equal(200);
    expect(response.body).to.have.property("status").to.equal("success");
    expect(response.body.data).not.have.property("amount");
  });

  it("Case #1", async () => {
    const requestBody = {
      action: "add",
      phone: "+380686979712",
      amount: 50,
      currency: "UAH",
      cardCvv: "327",
      card: "4506909324274797",
      cardExp: "0622",
      operator: "Kyivstar Ukraine",
      operatorId: "602",
      xref: "cb6808f9e02d10b3d8eadf442f52b4f4",
      nameA: "Peter Scroggs",
      _: 1647926341613,
    };

    const requestHeaders = {
      cookie:
        "pubkey=2adf556681537c36597ada260d46753c; fp=9; lfp=3/17/2022, 8:08:15 PM; pa=1647926098191.84720.8002623493380963next.privat24.ua0.7270396566625823+1",
    };

    const response = await cy
      .request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: requestHeaders,
      })
      .its("body")
      .should("contain", { status: "success" })
      .its("data")
  });
});

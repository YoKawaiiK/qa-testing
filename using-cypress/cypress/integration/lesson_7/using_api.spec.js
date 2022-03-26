/// <reference types="Cypress" />
describe("Using API", () => {
  it("Sending the GET request", async () => {
    const response = await cy.request(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(response);
  });

  it("Sending the GET request for getting list", async () => {
    const response = await cy.request(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response);
  });

  let responseBody = null;
  it("Sending the POST request", async () => {
    const response = await cy.request({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "POST",
      body: {
        title: "by Yokawaiik record",
        body: "Hello world",
        userId: 18,
      },
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    responseBody = response.body;
    console.log(responseBody);
  });

  it("Sending the POST request", async () => {
    const response = await cy.request({
      url: `https://jsonplaceholder.typicode.com/posts/${responseBody.userId}`,
      method: "PUT",
      body: {
        title: "by Yokawaiik record [changed]",
        body: "Hello world [changed]",
        userId: responseBody.userId,
        id: responseBody.id,
      },
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    console.log(response.body);
  });

  it("Sending the PATCH request", async () => {
    const response = await cy.request({
      url: `https://jsonplaceholder.typicode.com/posts/${responseBody.id}`,
      method: "PATCH",
      body: {
        title: "by Yokawaiik record [patched]",
      },
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    console.log(response.body);
  });

  it("Sending the DELETE request", async () => {
    const response = await cy.request({
      url: `https://jsonplaceholder.typicode.com/posts/${responseBody.id}`,
      method: "DELETE",
    });
    console.log(response.body);
  });
});

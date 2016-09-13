export default {
  'User Logs in': (client) => {
    const loginPage = client.page.loginPage();
    const instancesPage = client.page.instancesPage();

    loginPage
      .navigate()
      .login(process.env.NIGHTWATCH_EMAIL, process.env.NIGHTWATCH_PASSWORD);

    instancesPage.expect.element('@instancesListDescription').text.to.contain('Your first instance.');

    client.end();
  }
};

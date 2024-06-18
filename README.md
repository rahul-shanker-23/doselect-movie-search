# Vue: Template for DoSelect Problem Creation

This is a template for creating project-based Vue problems. You can use this template as a base to create your own problem.
The template is set up to work both locally and on the DoSelect platform. Please do not make any configuration-related changes.
Please follow the best practices used for Vue Development in each of your projects.

After you have created the project, follow these steps:

- Add the files that candidates have to modify to the **default_open_files** array in the [configuration.json](configuration.json) file.
- Add the test files to the **read_only_files** array in the [configuration.json](configuration.json) file.
- Modify this README.md file to give candidates relevant instructions for the project. Ensure that candidates can pass the test cases
- The README.md can be modified to include sections such as Functionality, Testing, and Live Preview.
- Modify the title of this README.md file to the name of the project.
- Zip the entire Solution project as `Vue_ProblemName_Solutions.zip` and upload it on the platform.
- Remove the main logic code that the candidates are being tested on, and save the workspace as `Vue_ProblemName_Stubs.zip`. Then, upload it to the platform.

Keep the following instructions unchanged at the end of the README.md file:

## Commands

### Install Packages:

```bash
npm install
```

This command will run automatically when the IDE is launched. However, if stopped, you may need to run it manually.

### Start Dev Server:

```bash
npm start
```

This command will start the dev server. You can view the **Live Preview** once the server is started in multiple ways:

- Click the `Preview in Editor` option that pops up at the bottom-right corner
- Click the Open `Preview` option in the `Run` menu

<!-- Dear Creators, Please keep this command only if you are using API calls in the project with the jsoserver npm package, else remove this command from here as well as configuartion.json and change post_start command to only "npm install" -->

### Start API Server:

```bash
npm run server
```

This command will start the api server. The server would start automatically once the packages are installed. However, if it is stopped, you may need to start it manually by running this command.

### Run Test Cases:

```bash
npm test
```

This will run the test cases in the terminal.

> These commands can be executed in the terminal or by selecting options from the `Run` menu.

## Environment

- Vue Version: 3.4.29
- Node Version: 14.21.3
- Default Port: 3000

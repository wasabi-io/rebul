import Application from "./app/Application";

const options = JSON.parse(JSON.stringify(process.env.options as any));

const application = new Application(options);
application.render();
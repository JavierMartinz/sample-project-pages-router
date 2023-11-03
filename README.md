# sample-project
A sample project that demonstrates the full page refresh when using the App router in a dockerized Next.js SPA with Nginx

**To run the project in a development environment:**
1. `cd` into the root directory of the project
2. Run the following command (replace <container-name> with your chosen container name):
```
 docker-compose -p <container-name> up --build
```

**To run the project in a production environment:**
1. `cd` into the root directory of the project
2. Run the following command (replace <container-name> with your chosen container name):
```
 docker-compose -p <container-name> --file docker-compose.production.yaml up --build
```

The app router bug can only be observed in a **production** container.

**Steps to Reproduce:**
1. Run the the project in a production environment
2. Click on the "Go to SPA page" button. You will be redirected to another page.
3. If you are running this locally or through a Vercel vanity URL, you will see how a soft-navigation is performed. However, if you access this App through nginx proxy, you will be redirected with a full page reload.

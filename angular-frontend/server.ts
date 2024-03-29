//TODO
// import 'zone.js/dist/zone-node';
//
// import { ngExpressEngine } from '@nguniversal/express-engine';
// import * as express from 'express';
// import { join } from 'path';
//
// import { AppServerModule } from './src/main.server';
// import { APP_BASE_HREF } from '@angular/common';
// import { existsSync } from 'fs';
//
// // The Express app is exported so that it can be used by serverless Functions.
// export function app(): express.Express {
//   const server = express();
//   const distFolder = join(process.cwd(), 'dist/angular-study/browser');
//   const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
//
//   // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
//   server.engine('html', ngExpressEngine({
//     bootstrap: AppServerModule,
//   }));
//
//   server.set('view engine', 'html');
//   server.set('views', distFolder);
//
//   // Example Express Rest API endpoints
//   // server.get('/api/**', (req, res) => { });
//   // Serve static files from /browser
//   server.get('*.*', express.static(distFolder, {
//     maxAge: '1y'
//   }));
//
//   // All regular routes use the Universal engine
//   server.get('*', (req, res) => {
//     res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
//   });
//
//   //TODO
//   // https://ksrae.github.io/angular/angular-universal/
//   // api 호출은 /api 내부에 구성하여 /api 호출은 data 호출로
//   // /api 호출이 아니고 파일 확장자가 없으면 app 내의 페이지 호출로
//   // 기타 호출은 asset 호출로
//   //
//   // server.get('/api/*', (req, res) => {
//   //   res.status(404).send('data requests are not supported');
//   // });
//   //
//   // server.get('*', (req, res) => {
//   //   res.render('index', { req });
//   // });
//   //
//   // server.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
//
//   return server;
// }
//
// function run(): void {
//   const port = process.env.PORT || 4000;
//
//   // Start up the Node server
//   const server = app();
//   server.listen(port, () => {
//     console.log(`Node Express server listening on http://localhost:${port}`);
//   });
// }
//
// // Webpack will replace 'require' with '__webpack_require__'
// // '__non_webpack_require__' is a proxy to Node 'require'
// // The below code is to ensure that the server is run only when not requiring the bundle.
// declare const __non_webpack_require__: NodeRequire;
// const mainModule = __non_webpack_require__.main;
// const moduleFilename = mainModule && mainModule.filename || '';
// if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
//   run();
// }
//
// export * from './src/main.server';

//TODO
// Set path after run command 'npm run-script build'
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-study/browser'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-study/browser/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

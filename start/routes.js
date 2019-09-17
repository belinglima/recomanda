const Route = use('Route')

Route.post('/user', 'UserController.store')
Route.post('/sessions', 'SessionController.create')

Route
  .group(() => {
    Route.resource('evaluation', 'EvaluationController').apiOnly()
    Route.resource('product', 'ProductController').apiOnly()
    Route.resource('user', 'UserController').apiOnly()
    
    Route.post('/product/:id/images', 'ImageProductController.store')
    Route.get('/image/:path', 'ImageProductController.show')
    Route.post('/user/:id/images', 'ImageUserController.store')
    Route.get('/image/:path', 'ImageUserController.show')
  }).prefix('auth').middleware(['auth'])

// rota public
Route.get('/*', () => {
    return `
    <html>
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <section>
          <div class="logo"></div>
          <div class="title"></div>
          <div class="subtitle"><p>
          Page with restrictions, I'll see you on the dashboard if you're an admin,
          see ya.
          </p></div>
        </section>
      </body>
    </html>
    `
  })
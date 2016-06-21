    var feed = new Instafeed({
        get: 'user',
        userId: '223043938',
        clientId: 'a9b9c8b243f64c0987612bc35d523cf1'
        template: '<a href="{{link}}"><img src="{{image}}" /></a>'
        limit: '4'
    });
    feed.run();

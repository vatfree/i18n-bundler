Package.describe({
  name: "vatfree:i18n-bundler",
  summary: "Bundles your project's vatfree-i18n files and pre-loads them on the client automatically",
  version: '0.3.1',
  git: 'https://github.com/vatfree/tap-bundler'
});

Package.on_use(function(api) {
  api.versionsFrom('1.6');

  api.use([
    'coffeescript@1.0.11',
    'jquery',
    'vatfree:i18n@1.8.1'
  ], ['client', 'server']);

  api.add_files("i18n-bundler.coffee", "server");
  api.add_files("i18n-bundle-receiver.coffee", "client");

});

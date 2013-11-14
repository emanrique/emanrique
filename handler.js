var handler = {
  STATIC_PATH: '/static/',
  static_url: function(uri) {
    return this.STATIC_PATH + uri;
  },
  urls: {},
  Url: function(obj) {
    this.obj = obj;
    this.get = function(name) {
      return this.obj[name];
    };
    return this;
  },
  set_url: function(name, obj) {
    this.urls[name] = new this.Url(obj);
  },
  reverse_url: function(name) {
    if (this.urls[name]) {
      if (this.urls[name].get('url')) {
        return this.urls[name].get('url');
      }

      else {
        return this.urls[name].get('uri').split('.jade').join('.html');
      }
    }

    else {
      return '';
    }
  },
  works:{},
  defaults: {
    title: 'Elizabeth Manrique - Frontend Web Developer'
  }
};


module.exports = handler;

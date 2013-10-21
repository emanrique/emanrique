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
    title: 'Ena Guerra'
  }
};
handler.works.arcoiris = {   
    'bg_type':'bg-arcoiris',
    'name':'arcoiris',
    'title': 'Arcoiris',
    'title_eng':'Rainbow',
    'des':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'des_eng':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'slides':[
      {
        'src':'arcoiris/001.jpg',
        'alt':'arcoiris -1'
      },
      {
        'src':'arcoiris/002.jpg',
        'alt':'arcoiris -2'
      },
      {
        'src':'arcoiris/003.jpg',
        'alt':'Warhol -3'
      }
    ]
};
handler.works.band_aid = {
    'bg_type':'bg-band-aid',
    'title': 'Band aid',
    'name':'band-aid',
    'title_eng':'Band aid',
    'des':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'des_eng':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'slides':[
      {
        'src':'band-aid/001.jpg',
        'alt':'band-aid -1'
      },
      {
        'src':'band-aid/002.jpg',
        'alt':'band-aid -2'
      },
      {
        'src':'band-aid/003.jpg',
        'alt':'band-aid -3'
      },
      {
        'src':'band-aid/004.jpg',
        'alt':'band-aid -4'
      }
    ]
};
handler.works.cookie_constellation = {   
    'bg_type':'bg-cookie-constellation',
    'title': 'Cookie Constellation',
    'name':'cookie-constellation',
    'title_eng':'Cookie Constellation',
    'des':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'des_eng':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'slides':[
      {
        'src':'cookie-constellation/001.jpg',
        'alt':'Cookie Constellation -1'
      },
      {
        'src':'cookie-constellation/002.jpg',
        'alt':'Cookie Constellation -2'
      }
    ]
};
handler.works.poetry_fest = {   
    'bg_type':'bg-poetry-fest',
    'title': 'Festival de poesía',
    'name':'poetry-fest',
    'title_eng':'Poetry fest',
    'des':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'des_eng':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'slides':[
      {
        'src':'festival-de-poesia/001.jpg',
        'alt':'Festival de poesía - 1'
      },
      {
        'src':'festival-de-poesia/002.jpg',
        'alt':'Festival de poesía - 2'
      },
      {
        'src':'festival-de-poesia/003.jpg',
        'alt':'Festival de poesía - 3'
      },
      {
        'src':'festival-de-poesia/004.jpg',
        'alt':'Festival de poesía - 4'
      }
    ]
};
handler.works.bad_girl = {   
    'bg_type':'bg-bad-girl',
    'title': 'Niña mala',
    'name':'bad-girl',
    'title_eng':'Bad girl',
    'des':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'des_eng':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'slides':[
      {
        'src':'nina-mala/001.jpg',
        'alt':'Niña mala - 1'
      },
      {
        'src':'nina-mala/002.jpg',
        'alt':'Niña mala - 2'
      }
    ]
};
handler.works.pipo_and_me = {   
    'bg_type':'bg-pipo-and-me',
    'title': 'Pipo y yo',
    'name':'pipo-and-me',
    'title_eng':'Pipo and me',
    'des':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'des_eng':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'slides':[
      {
        'src':'pipo-y-yo/001.jpg',
        'alt':'Pipo y yo - 1'
      }
    ]
};
handler.works.sagittarius = {   
    'bg_type':'bg-sagittarius',
    'title': 'Sagitario',
    'name':'sagittarius',
    'title_eng':'Sagittarius',
    'des':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'des_eng':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'slides':[
      {
        'src':'sagitario/001.jpg',
        'alt':'Sagitario - 1'
      }
    ]
};
handler.works.mr_coffee_and_tea_cup = {   
    'bg_type':'bg-mr-coffee-and-tea-cup',
    'title': 'Señor café y la taza de té',
    'name':'mr-coffee-and-tea-cup',
    'title_eng':'Mr. coffee and tea cup',
    'des':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'des_eng':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'slides':[
      {
        'src':'senor-cafe-y-la-taza-de-te/001.jpg',
        'alt':'Señor cafe y la taza de té - 1'
      },
      {
        'src':'senor-cafe-y-la-taza-de-te/002.jpg',
        'alt':'Señor cafe y la taza de té - 2'
      },
      {
        'src':'senor-cafe-y-la-taza-de-te/003.jpg',
        'alt':'Señor cafe y la taza de té - 3'
      },
      {
        'src':'senor-cafe-y-la-taza-de-te/004.jpg',
        'alt':'Señor cafe y la taza de té - 4'
      },
      {
        'src':'senor-cafe-y-la-taza-de-te/005.jpg',
        'alt':'Señor cafe y la taza de té - 5'
      }

    ]
};
handler.works.mr_coffee = {   
    'bg_type':'bg-mr-coffee',
    'title': 'El señor café',
    'name':'mr-coffee',
    'title_eng':'Mr. cofee',
    'des':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'des_eng':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'slides':[
      {
        'src':'senor-cafe/001.jpg',
        'alt':'Señor café - 1'
      },
      {
        'src':'senor-cafe/002.jpg',
        'alt':'Señor café - 2'
      }
    ]
};
handler.works.card = {   
    'bg_type':'bg-card',
    'title': 'Tarjeta',
    'name':'card',
    'title_eng':'Card',
    'des':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'des_eng':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'slides':[
      {
        'src':'tarjeta/001.jpg',
        'alt':'Tarjeta - 1'
      }
    ]
};
handler.works.dress_flower = {   
    'bg_type':'bg-dress-flower',
    'title': 'Vestido de Flores',
    'name':'dress-flower',
    'title_eng':'Dress flower',
    'des':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'des_eng':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'slides':[
      {
        'src':'vestido-de-flores/001.jpg',
        'alt':'Vestido de flores - 1'
      },
      {
        'src':'vestido-de-flores/002.jpg',
        'alt':'Vestido de flores - 2'
      }
    ]
};


handler.works.warhol = {   
    'bg_type':'bg-warhol',
    'title': 'Warhol',
    'name':'warhol',
    'title_eng':'Warhol',
    'des':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'des_eng':'Lorem ipsum Ullamco Ut culpa culpa magna velit non e',
    'slides':[
      {
        'src':'warhol/001.jpg',
        'alt':'Warhol -1'
      },
      {
        'src':'warhol/002.jpg',
        'alt':'Warhol -2'
      }
    ]
};
handler.set_url('home', {
      url: '/index.html'
});
handler.set_url('warhol', {
      url: '/ilustraciones/warhol.html'
});
handler.set_url('band-aid', {
      url: '/ilustraciones/band-aid.html'
});
handler.set_url('arcoiris', {
      url: '/ilustraciones/arcoiris.html'
});
handler.set_url('dress-flower', {
      url: '/ilustraciones/vestido-de-flores.html'
});
handler.set_url('card', {
      url: '/ilustraciones/tarjeta.html'
});
handler.set_url('mr-coffee', {
      url: '/ilustraciones/senor-cafe.html'
});
handler.set_url('mr-coffee-and-tea-cup', {
      url: '/ilustraciones/senor-cafe-y-la-taza-de-te.html'
});
handler.set_url('bad-girl', {
      url: '/ilustraciones/nina-mala.html'
});
handler.set_url('cookie-constellation', {
      url: '/ilustraciones/cookie-constellation.html'
});
handler.set_url('poetry-fest', {
      url: '/ilustraciones/festival-de-poesia.html'
});
handler.set_url('pipo-and-me', {
      url: '/ilustraciones/pipo-y-yo.html'
});
handler.set_url('sagittarius', {
      url: '/ilustraciones/sagitario.html'
});
handler.set_url('store', {
      url: '/tienda.html'
});
handler.set_url('about-me', {
      url: '/sobre-mi.html'
});
handler.set_url('contact', {
      url: '/contacto.html'
});
handler.set_url('iquitos-travel', {
      url: '/mi-diario-dibujado/viaje-iquitos.html'
});
handler.set_url('office', {
      url: '/mi-diario-dibujado/oficina.html'
});
handler.set_url('clouds', {
      url: '/mi-diario-dibujado/nubes.html'
});

module.exports = handler;

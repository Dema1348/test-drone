(function ()
{
    'use strict';

    var haibuSmartThemes = {
        haibuSmart  : {
            primary   : {
                name: 'haibuSmart-blue',
                hues: {
                    'default': 'A700',
                    'hue-1'  : 'A700',
                    'hue-2'  : 'A400'
                }
            },
            accent    : { //oscuro
                name: 'haibuSmart-blue',
                hues: {
                    'default': '800',
                    'hue-1'  : '800',     
                    'hue-2'  : '900',              
                }
            },
            warn      : {
                 name: 'haibuSmart-red',
                hues: {
                    'default': 'A700',
                    'hue-1'  : 'A400'        
                }
            },
            background: {
                name: 'grey',
                hues: {
                    'default': 'A100',
                    'hue-1'  : 'A100',
                    'hue-2'  : '100',
                    'hue-3'  : '300'
                }
            }
        }
    };

  
    angular
        .module('app.theme')
        .constant('haibuSmartThemes', haibuSmartThemes);
})();
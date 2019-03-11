define("plugins/my.snippets/package.my.snippets", [], {
    "name": "my.snippets",
    "c9": {
        "plugins": [
            {
                "packagePath": "plugins/my.snippets/__static__"
            }
        ]
    }
});

define("plugins/my.snippets/__static__",[], function(require, exports, module) {
    main.consumes = [
        "Plugin", "plugin.debug"
    ];
    main.provides = [];
    return main;
    function main(options, imports, register) {
        var debug = imports["plugin.debug"];
        var Plugin = imports.Plugin;
        var plugin = new Plugin();
        plugin.version = "undefined";
        plugin.on("load", function load() {
            [
                {
                    "type": "snippets",
                    "filename": "javascript.snippets",
                    "data": "# scope: javascript\n\n\n# class method snippet\nsnippet meth\n\t\t/*-------------------------------------------------------------------------\n\t\t* ${1}\n\t\t*------------------------------------------------------------------------*/\n\t\t${2}(${3}) {\n\n\t\t\t${0}\n\t\t}\n\n# test snippet\nsnippet test\n\t\tif (${1:true}) {\n\t\t\t${2}\n\t\t}\n\t\t${0}\n\n# import snippet\nsnippet im\n\t\timport ${1} from '${2}'${0}\n\n# export snippet\nsnippet ex\n\t\texport default ${0}\n\n# class snippet\nsnippet class\n\t\t${1} class {\n\t\t\tconstructor(${2}) {\n\t\t\t\t${0}\n\t\t\t}\n\t\t}\n"
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "my.snippets", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("my.snippets.bundle");
        
        register(null, {});
    }
});

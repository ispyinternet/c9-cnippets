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
                    "data": "# scope: javascript\n\n# class method snippet\nsnippet meth\n\t/*-------------------------------------------------------------------------\n\t* ${1}\n\t*------------------------------------------------------------------------*/\n\t${2}(${3}) {\n\n\t\t${0}\n\t}\n"
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "my.snippets", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("my.snippets.bundle");
        
        register(null, {});
    }
});

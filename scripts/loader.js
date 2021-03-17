function runScript(script){
    let filename = this.modName + "/" + script + ".js";
    let file = readString(filename);
    Vars.mods.scripts.runConsole(file);
}

function load(content){
    function iterate(obj, prev){
        if(!prev) prev = "content/";
        for(let e in obj){
            if(obj[e] === 0){
                let file = prev + e;
                try{
                    runScript(file);
                }catch(c){
                    Log.err("couldn't load file: [accent]" + file + ".js[]\n" + c);
                }
            }else if(obj[e].__proto__ === Object.prototype){
                iterate(obj[e], prev + e + "/");
            }else{
                Log.warn("object [accent]" + prev + e + "[] is not a file or a folder, skipping");
            }
        }
    }
    
    iterate(content);
}

module.exports = load;

// my newest content loader system lol
function load(content){
    function iterate(obj, prev){
        if(!prev) prev = "content/";
        for(let e in obj){
            if(obj[e] === 0){
                let file = prev + e;
                try{
                    require(file);
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

// this is basically a recreation of the "content/" directory as an object
let content = {
    blocks: {
        turrets: {
            lightsabers: {
                blue: 0,
                red: 0,
                green: 0,
            }
        }
    }
};

// why do i always forget this line
load(content);

const url = process.env.APP_URL+"/";

class MoveFiles{
    constructor() {
        
    }
    async one(file,pathFull,path){
        let link = url+path+file.stream.filename;
        
        await file.move(pathFull,{
            overwrite: true
        });
        
        if (!file.moved()) {
          return file.error()
        }
        return link;
      }
    async all(files,pathFull,path){
        let links = ""
        if(!files) return null;
    
        else if(!files.files){
          await files.move(pathFull,{
              overwrite: true
          });
          links += url+ path +files.stream.filename;
        }
        else{
          let i = 1;
          await files.moveAll(pathFull,(file)=>{
            links += url + path + file.stream.filename;
            links += i < files._files.length ? "<newline>" : "";
            i += 1;
            return {
              overwrite: true
            }
           });
           if (!files.movedAll()) {
            return files.errors()
            }
        }
        return links;
      }
}

module.exports = MoveFiles;
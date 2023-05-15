class Cache {
  setItem(key: string, value: string) {
    window.sessionStorage.setItem(key, value);
  }
  getItem(key:string){
   return JSON.stringify( window.sessionStorage.getItem(key))
  }
}
export default new Cache();

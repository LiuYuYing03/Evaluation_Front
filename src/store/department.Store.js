import { makeAutoObservable } from 'mobx'

class departmentStore {
    name=""
    contentList=[]

    constructor() {
        makeAutoObservable(this)
    }

}
export default departmentStore;

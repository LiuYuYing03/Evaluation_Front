import { makeAutoObservable } from 'mobx'

class DepartmentStore {
    contentList={}

    constructor() {
        makeAutoObservable(this)
    }

}
export default DepartmentStore;

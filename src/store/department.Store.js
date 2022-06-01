import { makeAutoObservable } from 'mobx'

class DepartmentStore {
    contentList={}
    departmentName=""

    constructor() {
        makeAutoObservable(this)
    }

}
export default DepartmentStore;

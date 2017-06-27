export class Mission {

    private id: number;
    private creation_date: string;
    private frontend_info: {
        name: string;
        photo_id: number;
        description: string;
        requires: string;
        client: string;
        members_count: number;
        exp: number;
        rewards: string;
    }

    getId(): number{
        return this.id;
    }

    getCreationDate(): string{
        return this.creation_date;
    }

    getFrontend_Info(): any{
        return this.frontend_info;
    }

    setId(id: number){
        this.id = id;
    }

    setCreationDate(creation_date: string){
        this.creation_date = creation_date;
    }

    setFrontend_Info(frontend_info: any){
        this.frontend_info = frontend_info;
    }

}
export class Achievement{

    private id: number;
    private rank: number[];
    private frontend_info: {
        name: string;
        photo_id: number;
        description: string;
        tier: string;
    }

    getId(): number{
        return this.id;
    }

    getRank(): number[]{
        return this.rank;
    }

    getFrontend_Info(): any{
        return this.frontend_info;
    }

    setId(id: number){
        this.id = id;
    }

    setRank(rank: number[]){
        this.rank = rank;
    }

    setFrontend_Info(frontend_info: any){
        this.frontend_info = frontend_info;
    }

}
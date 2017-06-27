export class Adventurer {
    
    private id: number;
    private level: number;
    private exp: number;
    private missions: {
        finished: number[];
        doing: number[];
    }
    private achievements: number[];
    private frontend_info: {
        name: string;
        photo_id: number;
        description: string;
        skills: string;
    }

    getId(): number{
        return this.id;
    }

    getLevel(): number{
        return this.level;
    }

    getExp(): number{
        return this.exp;
    }

    getMissions(): any{
        return this.missions;
    }

    getAchievements(): number[]{
        return this.achievements;
    }

    getFrontend_Info(): any{
        return this.frontend_info;
    }

    setId(id: number){
        this.id = id;
    }

    setLevel(level: number){
        this.level = level;
    }

    setExp(exp: number){
        this.exp = exp;
    }

    setMissions(missions: any){
        this.missions = missions;
    }

    setAchievements(achievements: number[]){
        this.achievements = achievements;
    }

    setFrontend_Info(frontend_info: any){
        this.frontend_info = frontend_info;
    }

}
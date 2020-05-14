/// <reference path="./Card.ts" />

namespace PokemonCards{
    export class Pokemon extends Card{
        private type: EnergyType;
        private attacks: Array<Attack>;
        private weakness = new Map<EnergyType, string>();
        private resistance = new Map<EnergyType, number>();
        private retreat = new Map<EnergyType, number>();
        private stage: Stage;

        getType(){
            return this.type;
        }

        setType(type: EnergyType){
            this.type = type;
        }

        getAttacks(){
            return this.attacks;
        }

        setAttack(attack: Attack){
            this.attacks.push(attack);
        }

        getWeaknesses(){
            return this.weakness;
        }

        setWeakness(weakness: EnergyType, modifier: string){
            this.weakness.set(weakness, modifier);
        }

        getResistance(){
            return this.resistance;
        }

        setResistance(resistance: EnergyType, modifier: number){
            this.resistance.set(resistance, modifier);
        }

        getRetreat(){
            return this.retreat;
        }

        setRetreat(retreat: EnergyType){
            let type = this.retreat.get(retreat);
            if(type){
                this.retreat.set(retreat, type + 1);
            } else {
                this.retreat.set(retreat, 1);
            }
        }

        getState(){
            return this.stage;
        }

        setStage(stage: Stage){
            this.stage = stage;
        }
    }

    export class Attack{
        private name: string;
        private description: string;
        private cost = new Map<EnergyType, number>();

        getName(){
            return this.name;
        }

        setName(name: string){
            this.name = name;
        }

        getDescription(){
            return this.description;
        }

        setDescription(description: string){
            this.description = description;
        }

        getCost(){
            return this.cost;
        }

        setCost(cost: EnergyType){
            let type = this.cost.get(cost);
            if(type){
                this.cost.set(cost, type + 1);
            } else {
                this.cost.set(cost, 1);
            }
        }
    }

    export class Ability{
        private name: string;
        private description: string;

        getName(){
            return this.name;
        }

        setName(name: string){
            this.name = name;
        }

        getDescription(){
            return this.description;
        }

        setDescription(description: string){
            this.description = description;
        }
    }

    export enum Stage{
        BASIC = "Basic",
        STAGE_ONE = "Stage 1",
        STAGE_TWO = "Stage 2",
        V = "V",
        VMAX = "VMAX"
    }
    
    export enum EnergyType {
        COLORLESS = "Colorless",
        GRASS = "Grass",
        WATER = "Water",
        FIRE = "Fire",
        LIGHTNING = "Lightning",
        PSYCHIC = "Psychic",
        FIGHTING = "Fighting",
        DARKNESS = "Darkness",
        METAL = "Metal",
        SPECIAL = "Special"
    }
}
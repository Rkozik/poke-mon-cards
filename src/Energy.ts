/// <reference path="./Card.ts" />
/// <reference path="./Pokemon.ts" />

namespace PokemonCards {
    export class Energy extends Card{
        private description: string;
        private type: EnergyType;

        getDescription(){
            return this.description;
        }

        setDescription(description: string){
            this.description = description;
        }

        getType(){
            return this.type;
        }

        setType(type: EnergyType){
            this.type = type;
        }
    }
}
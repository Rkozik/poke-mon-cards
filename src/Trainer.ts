/// <reference path="./Card.ts" />

namespace PokemonCards {
    export class Trainer extends Card{
        private description: string;
        private type: TrainerType;

        getDescription(){
            return this.description;
        }

        setDescription(description: string){
            this.description = description;
        }

        getType(){
            return this.type;
        }

        setType(type: TrainerType){
            this.type = type;
        }
    }

    enum TrainerType{
        SUPPORTER = "Supporter",
        ITEM = "Item"
    }
}
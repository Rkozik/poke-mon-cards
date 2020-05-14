namespace PokemonCards{
    export abstract class Card {
        protected name: string;
        protected picture: string;
        protected set: Set;
        protected number: string;
        protected rarity: Rarity;

        getName(){
            return this.name;
        }

        setName(name: string){
            this.name = name;
        }

        getPicture(){
            return this.picture;
        }

        setPicture(picture: string){
            this.picture = picture;
        }

        getSet(){
            return this.set;
        }

        setSet(set: Set){
            this.set = set;
        }

        getNumber(){
            return this.number;
        }

        setNumber(number: string){
            this.number = number;
        }

        getRarity(){
            return this.rarity;
        }

        setRarity(rarity: Rarity){
            this.rarity = rarity;
        }
    }

    enum Set{
        SWORD_AND_SHIELD = "Sword & Shield",
        SUN_AND_MOON = "Sun & Moon"
    }

    enum Rarity{
        COMMON = "Common",
        UNCOMMON = "Uncommon",
        RARE = "Rare",
        RARE_ULTRA = "Rare Ultra",
        RARE_SECRET = "Rare Secret",
        RARE_V = "Rare V",
        RARE_VMAX = "Rare VMAX",
        RARE_HOLO = "Rare Holo",
        RARE_HOLO_V = "Rare Holo V",
        RARE_HOLO_VMAX = "Rare Holo VMAX",
        RARE_RAINBOW = "Rare Rainbow"
    }
}
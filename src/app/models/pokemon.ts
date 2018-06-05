export class Pokemon {
  url: string;
  name: string;
  index: number;

  static fromResponse(json: any, index: number): Pokemon {
    let pokemon = new Pokemon();
    pokemon.url = json.url;
    pokemon.name = json.name;
    pokemon.index = index;
    return pokemon;
  }
}

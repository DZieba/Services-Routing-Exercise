
export class AnimalsService {
  private animals = [
    {id:1,
      name:'Eddy',
      race:'dog',
      age:13,
      owner:"Mr Jade"
    },
    {id:2,
      name:'Meowy',
      race:'cat',
      age:1,
      owner:"Mrs Norris"
    },
    {id:3,
      name:'Gotta',
      race:'lizard',
      age:10,
      owner:"Mr Pump"
    },
    {id:4,
      name:'Wiki',
      race:'parrot',
      age:50,
      owner:"Mr Jade"
    },
    {id:5,
      name:'Elza',
      race:'guineapig',
      age:2,
      owner:"Mr Pump"
    },
    {id:6,
      name:'Stinky',
      race:'rat',
      age:7,
      owner:"Mr Glice"
    },
  ];

  getAnimals(){
    return this.animals;
  }
  getAnimal(id:number){
    const animal = this.animals.find(
      (a)=>{
        return a.id === id;
      }
    );
    return animal;
  }


EditAnimal(id:number, name:string, race:string, age:number, owner:string) {
    const animal = this.animals.find(
      (a)=> {
        return a.id===id;
      }
    );
    if (animal) {
      animal.name=name;
      animal.race=race;
      animal.age=age;
      animal.owner=owner;
    }
}

}

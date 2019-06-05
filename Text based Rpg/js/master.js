var game = {
    situation: "Vous etes un petit groupe d'aventuriers explorant le pays de Dosslo. <br> Vous arriver devant la porte d'un village, solidement gardée.",
    options: [{
        action: "Vous vous renseignez sur la situation auprés des gardes",
        next: {
            situation: "Le garde vous informe que la ville est barricadée à cause d'une récente attaque de bandits",
            options: [{
                action: "You continue along the main path.",
                next: {
                    situation: "In the distance you see a massive castle. It looks evil.",
                    options: [{
                        action: "Turn towards the castle.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Continue down the path to god knows where.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Nothing here, sorry.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }]
                }
            }, {
                action: "Vous laissez le nain parler pour le groupe",
                next: {
                    situation: "Half an hour later you see the entrance to a cave dug into a mountainside. To the left of the cave is a path that leads back in the direction of the path.",
                    options: [{
                        action: "Go into the cave.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Go along the path to the left.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Go back the way you came.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }]
                }
            }, {
                action: "Vous forcez le passage",
                next: {
                    situation: "You start to become dehydrated and disorientated. You can't seem to find any food or water.",
                    options: [{
                        action: "Continue along the path, hoping to reach the hill again.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Take a rest where you are.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Go into the bush looking for food and water.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }]
                }
            }]
        }
    }, {
        action: "Vous laissez le nain parler pour le groupe",
        next: {
            situation: "Six hours after starting your trek along the path, you come to a small village named Raven Town. There is an inn called The Raven which has a few empty rooms.",
            options: [{
                action: "Get a room at The Raven for the night.",
                next: {
                    situation: "You have a good sleep, though you have a hangover.",
                    options: [{
                        action: "Have a look around town and socialise with the locals.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Ignore the rest of the town and go onto the path again to see where it takes you.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Nothing here, sorry.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }]
                }
            }, {
                action: "Ask a local if you can stay at their place overnight.",
                next: {
                    situation: "...",
                    options: [{
                        action: "...",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "...",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "...",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }]
                }
            }, {
                action: "Continue down the path through the night.",
                next: {
                    situation: "In the darkness you trip over a tree root crossing the path and hit your head hard on a rock. When you wake up, you are in a cave. There are three tunnels. Left, middle and right. To the left you can see a faint glow. In the middle is a seemingly endless dark tunnel. To the right there is a strong glow and soft chatter.",
                    options: [{
                        action: "Go down the left tunnel.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Go down the tunnel in the middle.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Go down the right tunnel.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }]
                }
            }]
        }
    }, {
        action: "Vous forcez le passage",
        next: {
            situation: "You sit at the top of the mountain and watch as the sun rises and then sets. Throughout the day, you slowly get the sense that there is something very very wrong.",
            options: [{
                action: "Sleep on the hillside.",
                next: {
                    situation: "You have a nice peaceful sleep. That is, before you find an arrow sticking out of the side of your head. The last thing you see is a goblin's ugly face.",
                    end: true
                }
            }, {
                action: "Stay up trying to work out what it is that is bothering you so much.",
                next: {
                    situation: "You notice movement on one of the hills, and see a flash of metal.",
                    options: [{
                        action: "Hide behind a tree.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Run for your life down the the path, following the sun to the west.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "...",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }]
                }
            }, {
                action: "Nothing here, sorry.",
                next: {
                    situation: "The story hasn't been completed to this point.",
                    end: true
                }
            }]
        }
    }]
};

//Affiche la situation
var current = game;

//DOM Peche aux elements
var situation = document.getElementById('text'),
    button1 = document.getElementById('button1'),
    button2 = document.getElementById('button2'),
    button3 = document.getElementById('button3');

//Boutton
function button(index){
    if(!current.end){
        if(index){
            current = current.options[index].next;
        }
        situation.innerHTML = current.situation;
        if(!current.end){
            button1.innerHTML = current.options[0].action;
            button2.innerHTML = current.options[1].action;
            button3.innerHTML = current.options[2].action;
        }else{
            button1.style.display = button2.style.display = button3.style.display = 'none';
        }
    }
}
button()